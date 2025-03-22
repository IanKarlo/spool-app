import { PageContainer } from "@/components/atomics/PageContainer"
import { Typography } from "@/components/atomics/Typography"
import Header from "@/components/molecules/Header"
import { ProfileCard } from "@/components/organisms/ProfileCard"
import { router } from "expo-router"
import { View } from "react-native"

export default function carerList() {
  return (
    <PageContainer>
      <Header name='John Doe' simpleText="prof de Matematica" profileImage="https://github.com/diego3g.png" headerType="goBack" />
      <Typography
        style={{
          fontSize: 20,
          fontWeight: 600,
          fontFamily: 'TTChocolates-Medium',
        }}
        color="darkBlue"
      >
        Cuidadores
      </Typography>
      <View style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <ProfileCard
          fn={() => router.push('/parents/teaching/viewCarer')}
          color='darkBlue'
          variation="normal"
          style={{ marginRight: 12 }}
          name="Kelly Azevedo"
          info="cuidador"
        />
        <ProfileCard
          fn={() => router.push('/parents/teaching/viewCarer')}
          color='darkBlue'
          variation="normal"
          style={{ marginRight: 12 }}
          name="Kelly Azevedo"
          info="cuidador"
        />
        <ProfileCard
          fn={() => router.push('/parents/teaching/viewCarer')}
          color='darkBlue'
          variation="normal"
          style={{ marginRight: 12 }}
          name="Kelly Azevedo"
          info="cuidador"
        />
        <ProfileCard
          fn={() => router.push('/parents/teaching/viewCarer')}
          color='darkBlue'
          variation="normal"
          name="Kelly Azevedo"
          info="cuidador"
        />
      </View>
    </PageContainer>
  )
}