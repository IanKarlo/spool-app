import { PageContainer } from "@/components/atomics/PageContainer";
import Header from "@/components/molecules/Header";
import { ProfileCard } from "@/components/organisms/ProfileCard";
import { Typography } from "@/components/atomics/Typography";
import { router } from "expo-router";
import { useEducators } from "@/contexts/EducatorsContext";

function profile(id: number) {
  router.push(`/educators/home/studentProfile/${id}`);
}

export default function Students() {
  const { educationistChildren } = useEducators();
  return (
    <PageContainer>
      <Header
        name="John Doe"
        profileImage="https://github.com/diego3g.png"
        headerType="goBack"
      />
      <Typography style={{ fontSize: 18 }}>Alunos</Typography>
      {educationistChildren?.map((child) => (
        <ProfileCard
          fn={() => profile(child.id)}
          color="blue"
          variation="normal"
          info={child.class}
          name={child.name}
          key={child.id}
        />
      ))}
    </PageContainer>
  );
}
