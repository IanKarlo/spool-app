import { PageContainer } from "@/components/atomics/PageContainer";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { BigCard } from "@/components/organisms/BigCard";
import { CarousellList } from "@/components/organisms/CarousellList";
import { RegisterHistory } from "@/components/organisms/History";
import RegisterCardList from "@/components/organisms/RegisterCardList";
import { router } from "expo-router";

export default function Home() {


  return (
    <PageContainer>
      <Header name="John Doe" profileImage="https://github.com/diego3g.png" headerType = "goBack"/>
      <Typography
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "darkBlue",
            }}
          >
            Histórico de Registros
          </Typography>
      <RegisterCardList 
        cardFn={() => router.push("/parents/home/viewRegister")}
      />
    </PageContainer>
  );
}
