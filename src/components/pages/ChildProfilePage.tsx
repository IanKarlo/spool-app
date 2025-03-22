import { PageContainer } from "@/components/atomics/PageContainer";
import Header from "@/components/molecules/Header";
import { ProfileHeader } from "@/components/molecules/ProfileHeader";
import { Button } from "@/components/atomics/Button";
import { RegisterHistory } from "@/components/organisms/History";

type ChildProfilePageProps = {
  addRegister: () => void
  viewRegisterHistory: () => void
}

export default function ChildProfilePage({addRegister, viewRegisterHistory}: ChildProfilePageProps) {
  return (
    <PageContainer>
      <Header
        name="John Doe"
        subtitle1="Nível de suporte II"
        subtitle2="6 Anos"
        profileImage="https://github.com/diego3g.png"
        headerType = "profile"
      />
      <Button
        text="Novo registro"
        variant="outlined"
        color="blue"
        onPress={addRegister}
        style={{ width: 'auto', alignSelf: 'center' }}
        rightIcon="plus"
      />
      <RegisterHistory cardFn={viewRegisterHistory} hideIcon={true} />
    </PageContainer>
  );
}
