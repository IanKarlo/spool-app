import { PageContainer } from "@/components/atomics/PageContainer";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { BigCard } from "@/components/organisms/BigCard";
import { CarousellList } from "@/components/organisms/CarousellList";
import { RegisterHistory } from "@/components/organisms/History";
import { router } from "expo-router";

export default function Therapy() {
  function viewTherapist() {
    router.push("/parents/therapy/viewTherapist");
  }
  function therapistList() {
    router.push("/parents/therapy/therapistList");
  }
  function viewHistory() {
    router.push("/parents/therapy/viewHistory");
  }
  function viewRegister() {
    router.push("/parents/therapy/viewRegister");
  }
  function addTherapist() {
    router.push("/parents/therapy/addTherapist");
  }

  return (
    <PageContainer>
      <Header name="Mateus" profileImage="https://github.com/diego3g.png" simpleText="Ensino do"/>
      <CarousellList crFn={therapistList} title='Terapeutas' cardFn={viewTherapist} color="white" fontColor='black' cardColor='lightBlue' cardFontcolor='black'/>
      <RegisterHistory cardFn={viewRegister} historyFn={viewHistory} cardColor="lightBlue" fontCardColor="darkBlue"/>
    </PageContainer>
  );
}
