import { PageContainer } from "@/components/atomics/PageContainer";
import { Typography } from "@/components/atomics/Typography";
import Header from "@/components/molecules/Header";
import { ProfileCard } from "@/components/organisms/ProfileCard";
import RegisterCardList from "@/components/organisms/RegisterCardList";
import { router } from "expo-router";
import { ScrollView, View } from "react-native";

export default function teacherList() {
  return (
    <PageContainer>
      <Header name='John Doe' simpleText="prof de Matematica" profileImage="https://github.com/diego3g.png" headerType = "goBack"/>
      <Typography
            style={{
              fontSize: 20,
              fontWeight: 600,
            }}
            color="darkBlue"
          >
            Professores
          </Typography>
        <View style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <ProfileCard
                fn={() => router.push('/parents/teaching/viewTeacher')}
                color='lightBlue'
                fontColor='black'
                variation="normal"
                style={{ marginRight: 12 }}
                info="Turma 1A"
                />
                <ProfileCard
                fn={() => router.push('/parents/teaching/viewTeacher')}
                color='lightBlue'
                fontColor='black'
                variation="normal"
                style={{ marginRight: 12 }}
                info="Turma 1A"
                />
                <ProfileCard
                fn={() => router.push('/parents/teaching/viewTeacher')}
                color='lightBlue'
                fontColor='black'
                variation="normal"
                style={{ marginRight: 12 }}
                info="Turma 1A"
                />
                <ProfileCard
                fn={() => router.push('/parents/teaching/viewTeacher')}
                color='lightBlue'
                fontColor='black'
                variation="normal"
                />
        </View>
    </PageContainer>
  );
}