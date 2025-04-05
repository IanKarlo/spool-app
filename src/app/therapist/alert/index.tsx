import { PageContainer } from "@/components/atomics/PageContainer";
import { Typography } from "@/components/atomics/Typography";
import { router } from "expo-router";
import Header from "@/components/molecules/Header";
import { View } from "react-native";
import { RegisterCard } from "@/components/organisms/RegisterCard";
import { useTherapist } from "@/contexts/TherapistContext";
import { useGetUnreadRecords, usePostRead } from "@/services/apiService";
import { useMemo, useState } from "react";
import { formatAlertsByDay } from "@/app/educators/alerts";
import { roleMap } from "@/components/pages/ViewRegisterPage";
import { useQueryClient } from "@tanstack/react-query";

const today = new Date();
const yesterday = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 1
);

function makeCard(
  index: number,
  index2: number,
  data: getUnreadRecordsResponse["data"][number],
  viewRegister: (id: number) => void
) {
  return (
    <RegisterCard
      fn={() => viewRegister(data.id)}
      key={`${index}-${index2}`}
      title={data.authorName}
      subtitle={roleMap[data.authorRole]}
      date={new Date(data.createdAt).toLocaleTimeString("pt-BR")}
      bodyText={data.content}
      tags={data.symptoms}
    />
  );
}

function makeDays(
  data: { date: string; data: getUnreadRecordsResponse["data"] },
  index: number,
  viewRegister: (id: number) => void
) {
  return (
    <View key={index} style={{ gap: 8 }}>
      <Typography style={{ fontSize: 20 }}>{data.date}</Typography>
      <View style={{ gap: 12 }}>
        {data.data.map((alert, index2) =>
          makeCard(index, index2, alert, viewRegister)
        )}
      </View>
    </View>
  );
}

export default function Alerts() {
  const { user } = useTherapist();
  const { mutateAsync } = usePostRead();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  if (!user) return null;

  const { data, isLoading, error } = useGetUnreadRecords(user.id, user.role);

  const alertsByDay = useMemo(() => {
    if (!data) return [];

    return formatAlertsByDay(data.data);
  }, [data]);

  async function viewRegister(id: number) {
    router.push(`/therapist/home/viewRegister/${id}`);
    if (user) {
      setLoading(true);
      await mutateAsync({ recordId: id, userId: user.id, userRole: user.role });
      queryClient.invalidateQueries({ queryKey: ["getUnreadRecords"] });
      await queryClient.refetchQueries({ queryKey: ["getUnreadRecords"] });
      setLoading(false);
    }
  }

  return (
    <PageContainer isLoading={isLoading} error={error}>
      <Header
        name="Alertas"
        subtitle1="Seus"
        profileImage="https://github.com/diego3g.png"
      />
      <View style={{ gap: 12 }}>
        {alertsByDay.length > 0 &&
          alertsByDay.map((data, index) => makeDays(data, index, viewRegister))}
        {alertsByDay.length == 0 && (
          <Typography style={{ textAlign: "center", fontSize: 20 }}>
            Você não possui nenhum registro não lido
          </Typography>
        )}
      </View>
    </PageContainer>
  );
}
