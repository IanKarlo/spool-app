import { PageContainer } from "@/components/atomics/PageContainer"
import { Typography } from "@/components/atomics/Typography"
import Header from "@/components/molecules/Header"
import RegisterCardList from "@/components/organisms/RegisterCardList"
import { router } from "expo-router"
import { useParents } from "@/contexts/ParentsContext"
import { useMemo } from "react"

export default function Home() {
  const { childRecords, user } = useParents();

  const { therapistsRecords } = useMemo(() => {
    if (!childRecords) return { therapistsRecords: [] };
    const therapistsRecords = childRecords.filter(
      (record) => record.authorRole === 'Therapist'
    );
    return { therapistsRecords };
  }, [childRecords]);

  return (
    <PageContainer>
      <Header name={user?.name || ''} profileImage="https://github.com/diego3g.png" headerType="goBack" />
      <Typography
        style={{
          fontSize: 24,
          fontWeight: 600,
        }}
        color="darkBlue"
      >
        Histórico de Registros
      </Typography>
      <RegisterCardList
        cardFn={(id) => router.push(`/parents/home/viewRegister/${id}`)}
        data={therapistsRecords}
      />
    </PageContainer>
  )
}
