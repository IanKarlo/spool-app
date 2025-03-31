import { PageContainer } from "@/components/atomics/PageContainer";
import Header from "@/components/molecules/Header";
import { RegisterHistory } from "@/components/organisms/History";

type EducationistProfilePageProps = {
  viewRegisterHistory: (id: number) => void;
  educationist: any;
  educationistRecords?: getEducationistRecordResponse["data"];
  isLoading: boolean;
  error: Error | null;
};

export default function EducationistProfilePage({
  educationist,
  viewRegisterHistory,
  educationistRecords,
  isLoading,
  error,
}: EducationistProfilePageProps) {

  return (
    <PageContainer isLoading={isLoading} error={error}>
      <Header
        name={educationist?.name}
        subtitle1={educationist?.specialization}
        profileImage="https://github.com/diego3g.png"
        headerType="profile"
      />
      <RegisterHistory
        cardFn={viewRegisterHistory}
        hideIcon={true}
        data={educationistRecords}
      />
    </PageContainer>
  );
}
