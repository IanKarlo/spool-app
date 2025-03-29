import NewRegisterPage from "@/components/pages/NewRegisterPage";
import { useEducators } from "@/contexts/EducatorsContext";

export default function NewRegister() {
  const { educationistChildren, user } = useEducators();
  return (
    <NewRegisterPage
      type="educator"
      children={educationistChildren}
      currentUser={user}
    />
  );
}
