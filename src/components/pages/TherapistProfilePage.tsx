import { PageContainer } from "@/components/atomics/PageContainer";
import Header from "@/components/molecules/Header";
import { RegisterHistory } from "@/components/organisms/History";

type TherapistProfilePageProps = {
  viewRegisterHistory: (id: number) => void;
  therapist: any;
  therapistRecords?: getTherapistRecordResponse["data"];
  isLoading: boolean;
  error: Error | null;
};

export default function TherapistProfilePage({
  therapist,
  viewRegisterHistory,
  therapistRecords,
  isLoading,
  error,
}: TherapistProfilePageProps) {

  return (
    <PageContainer isLoading={isLoading} error={error}>
      <Header
        name={therapist?.name}
        subtitle1={therapist?.specialization}
        profileImage="https://github.com/diego3g.png"
        headerType="profile"
      />
      <RegisterHistory
        cardFn={viewRegisterHistory}
        hideIcon={true}
        data={therapistRecords}
      />
    </PageContainer>
  );
}
