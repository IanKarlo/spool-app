import { PageContainer } from "@/components/atomics/PageContainer";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { BigCard } from "@/components/organisms/BigCard";
import { CarouselList } from "@/components/organisms/CarousellList";
import { RegisterHistory } from "@/components/organisms/History";
import { router } from "expo-router";

export default function Home() {
  function newRegister() {
    router.push("/educators/home/newRegister");
  }

  function students() {
    router.push("/educators/home/students");
  }

  function studentProfile() {
    router.push("/educators/home/studentProfile");
  }

  function viewRegister() {
    router.push("/educators/alerts/viewRegister");
  }
  return (
    <PageContainer>
      <Header name="John Doe" subtitle1="Olá," profileImage="https://github.com/diego3g.png" />
      <BigCard color="blue" fontColor="white" fn={newRegister} />
      <CarouselList
        crFn={students}
        cardFn={studentProfile}
        title="Alunos"
      />
      <RegisterHistory cardFn={viewRegister} />
    </PageContainer>
  );
}
