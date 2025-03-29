import { PageContainer } from "@/components/atomics/PageContainer";
import { router } from "expo-router";
import Header from "@/components/molecules/Header";
import { BigCard } from "@/components/organisms/BigCard";
import {
  CarouselItens,
  CarouselList,
} from "@/components/organisms/CarousellList";
import { RegisterHistory } from "@/components/organisms/History";
import { useTherapist } from "@/contexts/TherapistContext";
import { useMemo } from "react";

function newRegister() {
  router.push("/therapist/home/newRegister");
}

function patients() {
  router.push("/therapist/home/patients");
}

function profile(id: number) {
  router.push(`/therapist/home/patientProfile/${id}`);
}

function registerView(id: number) {
  router.push(`/therapist/home/viewRegister/${id}`);
}

export default function Home() {
  const { user, therapistChildren, therapistRecords, isLoading, error } =
    useTherapist();

  const carousellItens: CarouselItens[] = useMemo(() => {
    if (!therapistChildren) return [];
    return therapistChildren?.map((child) => ({
      id: child.id,
      name: child.name,
      info: child.class,
    }));
  }, [therapistChildren]);

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
            crFn={patients}
            cardFn={profile}
            fontColor="black"
            title="Pacientes"
            itens={carousellItens}
          />
          <RegisterHistory
            cardFn={registerView}
            hideIcon
            data={therapistRecords}
          />
        </>
      )}
    </PageContainer>
  );
}
