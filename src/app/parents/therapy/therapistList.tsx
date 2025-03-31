import { PageContainer } from "@/components/atomics/PageContainer";
import Header from "@/components/molecules/Header";
import { ProfileCard } from "@/components/organisms/ProfileCard";
import { Typography } from "@/components/atomics/Typography";
import { router } from "expo-router";
import { useParents } from "@/contexts/ParentsContext";
import { useMemo } from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function profile(id: number) {
  router.push(`/parents/therapy/therapistProfile/${id}`);
}

export default function teacherList() {
  const { user, childTherapist, childRecords, isLoading, error } = useParents();

  const { therapists } = useMemo(() => {
    if (!childTherapist) return { therapists: [] };
    const carouselItens = childTherapist.map((therapist) => ({
      id: therapist.id,
      name: therapist.name,
      info: therapist.specialization,
    }));
    return { therapists: carouselItens };
  }, [childTherapist]);

  return (
    <PageContainer isLoading={isLoading} error={error}>
      {user && (
        <>
          <Header
            name={user.name}
            profileImage="https://github.com/diego3g.png"
            headerType="goBack"
          />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            style={{
              fontSize: 20,
              fontWeight: 600,
            }}
            color="darkBlue"
          >
            Terapeutas
          </Typography>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
            }}
            onPress={() => router.push("/parents/therapy/addTherapist")}
          >
            <Typography
              style={{
                fontSize: 14,
                fontWeight: 400,
              }}
              color="darkBlue"
            >
              Adicionar Terapeuta
            </Typography>
            <Ionicons name="add" size={14} color="darkBlue" />
          </TouchableOpacity>
        </View>
          {therapists?.map((therapist) => (
            <ProfileCard
              fn={() => profile(therapist.id)}
              color="blue"
              variation="normal"
              info={therapist.info}
              name={therapist.name}
              key={therapist.id}
            />
          ))}
        </>
      )}
    </PageContainer>
  );
}
