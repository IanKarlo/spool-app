import { router } from "expo-router";
import ChildProfilePage from "@/components/pages/ChildProfilePage";
function registerView() {
  router.push("/educators/home/viewRegister");
}

function newRegister() {
  router.push("/educators/home/newRegister");
}

export default function StudentProfile() {
  return (
    <ChildProfilePage addRegister={newRegister} viewRegisterHistory={registerView} />
  );
}
