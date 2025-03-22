import { PageContainer } from "@/components/atomics/PageContainer";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { BigCard } from "@/components/organisms/BigCard";
import { CarouselList } from "@/components/organisms/CarousellList";
import { RegisterHistory } from "@/components/organisms/History";
import { router } from "expo-router";

export default function Teaching() {
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
    <PageContainer>
      <Header name="Mateus" profileImage="https://github.com/diego3g.png" simpleText="Ensino do"/>
      <CarouselList crFn={teacherList} title='Professores' cardFn={viewTeacher}  />
      <CarouselList crFn={carerList} title='Cuidadores' cardFn={viewCarer}  />
      <RegisterHistory cardFn={viewRegister} historyFn={viewHistory} cardColor="lightBlue" fontCardColor="darkBlue"/>
    </PageContainer>
  );
}
