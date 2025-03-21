import { PageContainer } from "@/components/atomics/PageContainer";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import RegisterCardList from "@/components/organisms/RegisterCardList";
import { router } from "expo-router";

export default function viewHistory() {
  return (
    <PageContainer>
      <Header name='John Doe' profileImage="https://github.com/diego3g.png" headerType = "goBack"/>
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
        cardFn={() => router.push("/parents/teaching/viewRegister")}
        color="lightBlue"
        fontColor="darkBlue"
      />
    </PageContainer>
  );
}