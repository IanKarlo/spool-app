import { PageContainer } from "@/components/atomics/PageContainer"
import { Typography } from "@/components/atomics/Typography"
import Header from "@/components/molecules/Header"
import RegisterCardList from "@/components/organisms/RegisterCardList"
import { router } from "expo-router"

export default function viewCarer() {
  return (
    <PageContainer>
      <Header name='John Doe' subtitle1="Cuidador" profileImage="https://github.com/diego3g.png" headerType="profile" />
      <Typography
        style={{
          fontSize: 20,
          fontWeight: 600,
          fontFamily: 'TTChocolates-Medium',
        }}
        color="darkBlue"
      >
        Histórico de Registros
      </Typography>
      <RegisterCardList
        cardFn={() => router.push("/parents/teaching/viewRegister")}
      />
    </PageContainer>
  )
}