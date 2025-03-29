import { PageContainer } from "@/components/atomics/PageContainer";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { BigCard } from "@/components/organisms/BigCard";
import { CarouselList } from "@/components/organisms/CarousellList";
import { RegisterHistory } from "@/components/organisms/History";
import { router } from "expo-router";
import { useParents } from "@/contexts/ParentsContext";
export default function Home() {
  const { user, isLoading, error, childRecords } = useParents();

  function newRegister() {
    router.push("/parents/home/newRegister");
  }
  function viewRegister(id: number) {
    router.push(`/parents/home/viewRegister/${id}`);
  }
  function viewHistory() {
    router.push("/parents/home/viewHistory");
  }

  return (
    <PageContainer isLoading={isLoading} error={error}>
      {user && <Header subtitle1='Resumo do' name={user?.name ?? ''} profileImage={`https://api.dicebear.com/9.x/adventurer/png?seed=${encodeURI(user?.name)}`} />}
      <BigCard color="blue" fontColor="white" fn={newRegister} />
      <RegisterHistory data={childRecords} cardFn={viewRegister} historyFn={viewHistory}/> 
    </PageContainer>
  );
}
