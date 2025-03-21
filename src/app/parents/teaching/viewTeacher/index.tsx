import { PageContainer } from "@/components/atomics/PageContainer";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import RegisterCardList from "@/components/organisms/RegisterCardList";
import { router } from "expo-router";

export default function viewTeacher() {
  return (
    <PageContainer>
      <Header name='John Doe' simpleText="prof de Matematica" profileImage="https://github.com/diego3g.png" headerType = "profile"/>
      <Typography
            style={{
              fontSize: 20,
              fontWeight: 600,
            }}
            color="darkBlue"
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