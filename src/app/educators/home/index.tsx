import { PageContainer } from "@/components/atomics/PageContainer";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { BigCard } from "@/components/organisms/BigCard";
import { CarousellList } from "@/components/organisms/CarousellList";
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
      <Header name="John Doe" profileImage="https://github.com/diego3g.png" />
      <BigCard color="orange" fontColor="white" fn={newRegister} />
      <CarousellList
        crFn={students}
        cardFn={studentProfile}
        color="blue"
        fontColor="white"
        cardColor="darkBlue"
        cardFontcolor="white"
        title="Alunos"
      />
      <RegisterHistory cardFn={viewRegister} />
    </PageContainer>
  );
}
