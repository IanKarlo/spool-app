import { PageContainer } from "@/components/atomics/PageContainer";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { BigCard } from "@/components/organisms/BigCard";
import { CarouselItens, CarouselList } from "@/components/organisms/CarousellList";
import { RegisterHistory } from "@/components/organisms/History";
import { useGetChildEducationist, useGetChildRecord, useGetUserByToken } from '@/services/apiService'
import { router } from "expo-router";
import { useMemo } from 'react'

export default function Teaching() {
  const { data: user, error: errorUser, isLoading: isLoadingUser } = useGetUserByToken('58f8b9fe');
  const { data: childEducationist, error: errorChildEducationist, isLoading: isLoadingChildEducationist } = useGetChildEducationist(1);
  const { data: childRecord, error: errorChildRecord, isLoading: isLoadingChildRecord } = useGetChildRecord(1, 1, 4);

    const { professors, caretakers } = useMemo(() => {
    if (!childEducationist) return { professors: [], caretakers: [] };
    const carouselItens = childEducationist?.data.map((child) => ({
      id: child.id,
      name: child.name,
      info: child.specialization,
    }));
    const professors = carouselItens.filter((educator) => educator.info === "Professor(a)");
    const caretakers = carouselItens.filter((educator) => educator.info === "Cuidador(a)");
    return { professors, caretakers };
  }, [childEducationist]);


  function viewTeacher() {
    router.push("/parents/teaching/viewTeacher");
  }
  function teacherList() {
    router.push("/parents/teaching/teacherList");
  }
  function viewCarer() {
    router.push("/parents/teaching/viewCarer");
  }
  function carerList() {
    router.push("/parents/teaching/carerList");
  }
  function viewHistory() {
    router.push("/parents/teaching/viewHistory");
  }
  function viewRegister() {
    router.push("/parents/teaching/viewRegister");
  }

  return (
    <PageContainer isLoading={isLoadingUser || isLoadingChildEducationist || isLoadingChildRecord} error={errorUser || errorChildEducationist || errorChildRecord}>
      <Header name={user?.data.name ?? ''} profileImage={`https://api.dicebear.com/9.x/adventurer/png?seed=${encodeURI(user?.data.name ?? '')}`} subtitle1="Ensino do"/>
      <CarouselList itens={professors} crFn={teacherList} title='Professores' cardFn={viewTeacher}  />
      <CarouselList itens={caretakers} crFn={carerList} title='Cuidadores' cardFn={viewCarer}  />
      <RegisterHistory data={childRecord?.data} cardFn={viewRegister} historyFn={viewHistory} />
    </PageContainer>
  );
}
