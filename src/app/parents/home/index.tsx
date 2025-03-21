import { PageContainer } from "@/components/atomics/PageContainer";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { BigCard } from "@/components/organisms/BigCard";
import { CarousellList } from "@/components/organisms/CarousellList";
import { RegisterHistory } from "@/components/organisms/History";
import { router } from "expo-router";

export default function Home() {
  function newRegister() {
    router.push("/parents/home/newRegister");
  }
  function viewRegister() {
    router.push("/parents/home/viewRegister");
  }
  function viewHistory() {
    router.push("/parents/home/viewHistory");
  }

  return (
    <PageContainer>
      <Header name="John Doe" profileImage="https://github.com/diego3g.png" />
      <BigCard color="darkBlue" fontColor="white" fn={newRegister} />
      <RegisterHistory cardFn={viewRegister} historyFn={viewHistory} cardColor="lightBlue" fontCardColor="darkBlue"/>
    </PageContainer>
  );
}
