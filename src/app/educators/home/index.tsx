import { PageContainer } from "@/components/atomics/PageContainer";
import Header from "@/components/molecules/Header";
import { BigCard } from "@/components/organisms/BigCard";
import {
  CarouselItens,
  CarouselList,
} from "@/components/organisms/CarousellList";
import { RegisterHistory } from "@/components/organisms/History";
import { useEducators } from "@/contexts/EducatorsContext";
import { router } from "expo-router";
import { useMemo } from "react";

export default function Home() {
  function newRegister() {
    router.push("/educators/home/newRegister");
  }

  function students() {
    router.push("/educators/home/students");
  }

  function studentProfile(id: number) {
    router.push(`/educators/home/studentProfile/${id}`);
  }

  function viewRegister(id: number) {
    router.push(`/educators/home/viewRegister/${id}`);
  }

  const { user, educationistChildren, educationistRecords, isLoading, error } =
    useEducators();

  const carousellItens: CarouselItens[] = useMemo(() => {
    if (!educationistChildren) return [];
    return educationistChildren?.map((child) => ({
      id: child.id,
      name: child.name,
      info: child.class,
    }));
  }, [educationistChildren]);

  return (
    <PageContainer isLoading={isLoading} error={error}>
      {user && (
        <>
          <Header
            name={user.name}
            subtitle1="Olá,"
            profileImage="https://github.com/diego3g.png"
          />
          <BigCard color="blue" fontColor="white" fn={newRegister} />
          <CarouselList
            crFn={students}
            cardFn={studentProfile}
            title="Alunos"
            itens={carousellItens}
          />
          <RegisterHistory
            cardFn={viewRegister}
            hideIcon
            data={educationistRecords}
          />
        </>
      )}
    </PageContainer>
  );
}
