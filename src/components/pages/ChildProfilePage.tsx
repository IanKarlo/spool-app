import { PageContainer } from "@/components/atomics/PageContainer";
import Header from "@/components/molecules/Header";
import { Button } from "@/components/atomics/Button";
import { RegisterHistory } from "@/components/organisms/History";

type ChildProfilePageProps = {
  addRegister: () => void;
  viewRegisterHistory: (id: number) => void;
  child: any;
  childRecords?: getChildRecordResponse["data"];
  isLoading: boolean;
  error: Error | null;
};

export default function ChildProfilePage({
  child,
  addRegister,
  viewRegisterHistory,
  childRecords,
}: ChildProfilePageProps) {
  function getAgeLabel(birthDateString: string): string {
    const birthDate = new Date(birthDateString);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return `${age} anos`;
  }

  return (
    <PageContainer>
      <Header
        name={child.name}
        subtitle1={child.class}
        subtitle2={getAgeLabel(child.birthDate)}
        profileImage="https://github.com/diego3g.png"
        headerType="profile"
      />
      <Button
        text="Novo registro"
        variant="outlined"
        color="blue"
        onPress={addRegister}
        style={{ width: "auto", alignSelf: "center" }}
        rightIcon="plus"
      />
      <RegisterHistory
        cardFn={viewRegisterHistory}
        hideIcon={true}
        data={childRecords}
      />
    </PageContainer>
  );
}
