import { PageContainer } from "@/components/atomics/PageContainer";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { BigCard } from "@/components/organisms/BigCard";
import { CarouselList } from "@/components/organisms/CarousellList";
import { RegisterHistory } from "@/components/organisms/History";
import { router } from "expo-router";
import { useGetChildRecord } from "@/services/apiService";
export default function Home() {
  const { data, error, isLoading } = useGetChildRecord(1);

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
      <BigCard color="blue" fontColor="white" fn={newRegister} />
      <RegisterHistory data={data?.data} cardFn={viewRegister} historyFn={viewHistory}/>
    </PageContainer>
  );
}
