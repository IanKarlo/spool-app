import { PageContainer } from "@/components/atomics/PageContainer";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { BigCard } from "@/components/organisms/BigCard";
import { CarousellList } from "@/components/organisms/CarousellList";
import { RegisterHistory } from "@/components/organisms/History";
import { router } from "expo-router";

export default function Home() {
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
    router.push("/parents/home/viewHistory");
  }
  function viewRegister() {
    router.push("/parents/home/viewRegister");
  }

  return (
    <PageContainer>
      <Header name="Mateus" profileImage="https://github.com/diego3g.png" simpleText="Ensino do"/>
      <CarousellList crFn={teacherList} title='Professores' cardFn={viewTeacher} color="white" fontColor='black' cardColor='lightBlue' cardFontcolor='black'/>
      <CarousellList crFn={carerList} title='Cuidadores' cardFn={viewCarer} color="white" fontColor='black' cardColor='lightBlue' cardFontcolor='black'/>
      <RegisterHistory cardFn={viewRegister} historyFn={viewHistory} cardColor="lightBlue" fontCardColor="darkBlue"/>
    </PageContainer>
  );
}
