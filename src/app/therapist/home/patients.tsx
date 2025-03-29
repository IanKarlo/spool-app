import { PageContainer } from "@/components/atomics/PageContainer";
import Header from "@/components/molecules/Header";
import { ProfileCard } from "@/components/organisms/ProfileCard";
import { Typography } from "@/components/atomics/Typography";
import { router } from "expo-router";
import { useTherapist } from "@/contexts/TherapistContext";

function profile(id: number) {
  router.push(`/therapist/home/patientProfile/${id}`);
}

export default function Home() {
  const { therapistChildren, user, isLoading, error } = useTherapist();
  return (
    <PageContainer isLoading={isLoading} error={error}>
      {user && (
        <>
          <Header
            name={user.name}
            profileImage="https://github.com/diego3g.png"
            headerType="goBack"
          />
          <Typography style={{ fontSize: 18 }}>Pacientes</Typography>
          {therapistChildren?.map((child) => (
            <ProfileCard
              fn={() => profile(child.id)}
              color="blue"
              variation="normal"
              info={child.class}
              name={child.name}
              key={child.id}
            />
          ))}
        </>
      )}
    </PageContainer>
  );
}
