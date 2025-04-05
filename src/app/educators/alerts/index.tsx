import { PageContainer } from "@/components/atomics/PageContainer";
import { Typography } from "@/components/atomics/Typography";
import { router } from "expo-router";
import Header from "@/components/molecules/Header";
import { View } from "react-native";
import { RegisterCard } from "@/components/organisms/RegisterCard";
import { useEducators } from "@/contexts/EducatorsContext";
import { useGetUnreadRecords, usePostRead } from "@/services/apiService";
import { useMemo } from "react";
import { roleMap } from "@/components/pages/ViewRegisterPage";

export function formatAlertsByDay(
  data: getUnreadRecordsResponse["data"]
): { date: string; data: getUnreadRecordsResponse["data"] }[] {
  const groupedByDate: { [key: string]: getUnreadRecordsResponse["data"] } = {};

  data.forEach((record) => {
    const createdAt = new Date(record.createdAt);
    let dateString = createdAt.toLocaleDateString("pt-BR");

    if (createdAt === today) {
      dateString = "Hoje";
    }

    if (createdAt === yesterday) {
      dateString = "Ontem";
    }

    if (!groupedByDate[dateString]) {
      groupedByDate[dateString] = [];
    }

    groupedByDate[dateString].push(record);
  });

  return Object.keys(groupedByDate).map((date) => {
    return {
      date: date,
      data: groupedByDate[date],
    };
  });
}

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
  const { user } = useEducators();
  const { mutate } = usePostRead();

  if (!user) return null;

  const { data, isLoading, error } = useGetUnreadRecords(user.id, user.role);

  const alertsByDay = useMemo(() => {
    if (!data) return [];

    return formatAlertsByDay(data.data);
  }, [data]);

  function viewRegister(id: number) {
    router.push(`/educators/home/viewRegister/${id}`);
    // console.log("viewRegister", id);
    // console.log("user.id", user?.id);
    // console.log("user.role", user?.role);
    if (user) mutate({ recordId: id, userId: user.id, userRole: user.role });
  }

  return (
    <PageContainer isLoading={isLoading} error={error}>
      <Header
        name="Alertas"
        subtitle1="Seus"
        profileImage="https://github.com/diego3g.png"
      />
      <View style={{ gap: 12 }}>
        {alertsByDay.length > 0 && alertsByDay.map((data, index) => makeDays(data, index, viewRegister))}
        {alertsByDay.length == 0 && <Typography style={{ textAlign: "center", fontSize: 20 }}>Você não possui nenhum registro não lido</Typography>}
      </View>
    </PageContainer>
  );
}
