import { router } from 'expo-router'
import ChildProfilePage from '@/components/pages/ChildProfilePage'

function registerView() {
  router.push('/therapist/home/viewRegister')
}

function newRegister() {
  router.push('/therapist/home/newRegister')
}

export default function Home() {
  return (
    <ChildProfilePage addRegister={newRegister} viewRegisterHistory={registerView}/>
  )
}