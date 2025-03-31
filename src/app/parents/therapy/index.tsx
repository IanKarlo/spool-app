import { PageContainer } from "@/components/atomics/PageContainer";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { BigCard } from "@/components/organisms/BigCard";
import { CarouselList } from "@/components/organisms/CarousellList";
import { RegisterHistory } from "@/components/organisms/History";
import { useParents } from "@/contexts/ParentsContext";
import { router } from "expo-router";
import { useMemo } from "react";

export default function Therapy() {

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
  
  const { childTherapistRecords } = useMemo(() => {
    if (!childRecords) return { childTherapistRecords: [] };
    const childTherapistRecords = childRecords.filter(
      (record) => record.authorRole === 'Therapist'
    );
    return { childTherapistRecords };
  }, [childRecords]);

  function therapistProfile(id: number) {
    router.push(`/parents/therapy/therapistProfile/${id}`);
  }
  function therapistList() {
    router.push("/parents/therapy/therapistList");
  }
  function viewHistory() {
    router.push("/parents/therapy/viewHistory");
  }
  function viewRegister(id: number) {
    router.push(`/parents/therapy/viewRegister/${id}`);
  }

  return (
    <PageContainer isLoading={isLoading} error={error}>
      <Header name={user?.name ?? ''} profileImage={`https://api.dicebear.com/9.x/adventurer/png?seed=${encodeURI(user?.name ?? '')}`} subtitle1="Terapia do"/>
      <CarouselList itens={therapists} crFn={therapistList} title='Terapeutas' cardFn={therapistProfile}  />
      <RegisterHistory data={childTherapistRecords} cardFn={viewRegister} historyFn={viewHistory} />
    </PageContainer>
  );
}
