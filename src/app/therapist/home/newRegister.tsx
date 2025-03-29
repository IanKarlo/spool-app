import NewRegisterPage from "@/components/pages/NewRegisterPage";
import { useTherapist } from "@/contexts/TherapistContext";

export default function Home() {
  const { user, therapistChildren } = useTherapist();

  return (
    <NewRegisterPage
      type="therapist"
      children={therapistChildren}
      currentUser={user}
    />
  );
}
