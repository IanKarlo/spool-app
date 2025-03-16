import { PageContainer } from "@/components/atomics/PageContainer";
import Header from "@/components/molecules/Header";
import { ProfileCard } from "@/components/organisms/ProfileCard";
import { Typography } from "@/components/atomics/Typography";
import { router } from "expo-router";

function profile() {
  router.push("/educators/home/studentProfile");
}

export default function Students() {
  return (
    <PageContainer>
      <Header
        name="John Doe"
        profileImage="https://github.com/diego3g.png"
        showGoBackButton
      />
      <Typography style={{ fontSize: 18 }}>Alunos</Typography>
      <ProfileCard
        fn={profile}
        color="blue"
        fontColor="white"
        variation="normal"
        info="Turma 1A"
      />
      <ProfileCard
        fn={profile}
        color="blue"
        fontColor="white"
        variation="normal"
        info="Turma 1A"
      />
      <ProfileCard
        fn={profile}
        color="blue"
        fontColor="white"
        variation="normal"
        info="Turma 1A"
      />
      <ProfileCard
        fn={profile}
        color="blue"
        fontColor="white"
        variation="normal"
        info="Turma 1A"
      />
      <ProfileCard
        fn={profile}
        color="blue"
        fontColor="white"
        variation="normal"
        info="Turma 1A"
      />
      <ProfileCard
        fn={profile}
        color="blue"
        fontColor="white"
        variation="normal"
        info="Turma 1A"
      />
      <ProfileCard
        fn={profile}
        color="blue"
        fontColor="white"
        variation="normal"
        info="Turma 1A"
      />
      <ProfileCard
        fn={profile}
        color="blue"
        fontColor="white"
        variation="normal"
        info="Turma 1A"
      />
      <ProfileCard
        fn={profile}
        color="blue"
        fontColor="white"
        variation="normal"
        info="Turma 1A"
      />
    </PageContainer>
  );
}
