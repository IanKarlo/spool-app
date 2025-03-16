import { PageContainer } from "@/components/atomics/PageContainer";
import Header from "@/components/molecules/Header";
import { RegisterHistory } from "@/components/organisms/History";
import { ProfileHeader } from "@/components/molecules/ProfileHeader";
import { Button } from "@/components/atomics/Button";
import { router } from "expo-router";

function registerView() {
  router.push("/educators/home/viewRegister");
}

function newRegister() {
  router.push("/educators/home/newRegister");
}

export default function StudentProfile() {
  return (
    <PageContainer>
      <Header
        name="John Doe"
        profileImage="https://github.com/diego3g.png"
        showGoBackButton
      />
      <ProfileHeader profileColor="purple" />
      <Button
        text="Novo registro"
        variant="outlined"
        color="pink"
        onPress={newRegister}
      ></Button>
      <RegisterHistory cardFn={registerView} hideIcon={true} />
    </PageContainer>
  );
}
