import { PageContainer } from "@/components/atomics/PageContainer";
import Header from "@/components/molecules/Header";
import { ProfileCard } from "@/components/organisms/ProfileCard";
import { Typography } from "@/components/atomics/Typography";
import { router } from "expo-router";
import { useParents } from "@/contexts/ParentsContext";
import { useMemo } from "react";

function profile(id: number) {
  router.push(`/parents/teaching/educationistProfile/${id}`);
}

export default function teacherList() {
  const { childEducationist, user, isLoading, error } = useParents();

  const { professors } = useMemo(() => {
      if (!childEducationist) return { professors: []};
      const carouselItens = childEducationist?.map((educator) => ({
        id: educator.id,
        name: educator.name,
        info: educator.specialization,
      }));
      const professors = carouselItens.filter((educator) => educator.info === "Professor(a)");
      return { professors };
  }, [childEducationist]);

  return (
    <PageContainer isLoading={isLoading} error={error}>
      {user && (
        <>
          <Header
            name={user.name}
            profileImage="https://github.com/diego3g.png"
            headerType="goBack"
          />
          <Typography style={{ fontSize: 18 }}>Professores</Typography>
          {professors?.map((educationist) => (
            <ProfileCard
              fn={() => profile(educationist.id)}
              color="blue"
              variation="normal"
              info={educationist.info}
              name={educationist.name}
              key={educationist.id}
            />
          ))}
        </>
      )}
    </PageContainer>
  );
}
