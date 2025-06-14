import { PageContainer } from "@/components/atomics/PageContainer";
import Header from "@/components/molecules/Header";
import { CarouselList } from "@/components/organisms/CarousellList";
import { RegisterHistory } from "@/components/organisms/History";
import { useParents } from '@/contexts/ParentsContext'
import { router } from "expo-router";
import { useMemo } from 'react'

export default function Teaching() {
  const { user, childEducationist, childRecords, isLoading, error } = useParents();

    const { professors, caretakers } = useMemo(() => {
    if (!childEducationist) return { professors: [], caretakers: [] };
    const carouselItens = childEducationist?.map((educator) => ({
      id: educator.id,
      name: educator.name,
      info: educator.specialization,
    }));
    const professors = carouselItens.filter((educator) => educator.info === "Professor(a)");
    const caretakers = carouselItens.filter((educator) => educator.info === "Cuidador(a)");
    return { professors, caretakers };
  }, [childEducationist]);

  const { educationistsRecords } = useMemo(() => {
    if (!childRecords) return { educationistsRecords: [] };
    const educationistsRecords = childRecords.filter(
      (record) => record.authorRole === 'Educationist'
    );
    return { educationistsRecords };
  }, [childRecords]);

  function educationistProfile(id: number) {
    router.push(`/parents/teaching/educationistProfile/${id}`);
  }
  function teachers() {
    router.push("/parents/teaching/teachers");
  }
  function carers() {
    router.push("/parents/teaching/carers");
  }
  function viewHistory() {
    router.push("/parents/teaching/viewHistory");
  }
  function viewRegister(id: number) {
    router.push(`/parents/teaching/viewRegister/${id}`);
  }

  return (
    <PageContainer isLoading={isLoading} error={error}>
      <Header name={user?.name ?? ''} profileImage={`https://api.dicebear.com/9.x/adventurer/png?seed=${encodeURI(user?.name ?? '')}`} subtitle1="Ensino do"/>
      <CarouselList itens={professors} crFn={teachers} title='Professores' cardFn={educationistProfile}  />
      <CarouselList itens={caretakers} crFn={carers} title='Cuidadores' cardFn={educationistProfile}  />
      <RegisterHistory data={educationistsRecords} cardFn={viewRegister} historyFn={viewHistory} />
    </PageContainer>
  );
}
