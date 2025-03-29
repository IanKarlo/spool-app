import { PageContainer } from "@/components/atomics/PageContainer";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { BigCard } from "@/components/organisms/BigCard";
import { CarouselList } from "@/components/organisms/CarousellList";
import { RegisterHistory } from "@/components/organisms/History";
import { router } from "expo-router";
import { useGetChildRecord, useGetUserByToken } from "@/services/apiService";
export default function Home() {
  const {data: user, isLoading: isLoadingUser, error: errorUser} = useGetUserByToken('58f8b9fe')
  const { data: childRecord, error: errorChildRecord, isLoading: isLoadingChildRecord } = useGetChildRecord(1, 1, 4);

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
    <PageContainer isLoading={isLoadingUser || isLoadingChildRecord} error={errorUser || errorChildRecord}>
      {user && <Header subtitle1='Resumo do' name={user?.data.name ?? ''} profileImage={`https://api.dicebear.com/9.x/adventurer/png?seed=${encodeURI(user?.data.name)}`} />}
      <BigCard color="blue" fontColor="white" fn={newRegister} />
      <RegisterHistory data={childRecord?.data} cardFn={viewRegister} historyFn={viewHistory}/>
    </PageContainer>
  );
}
