import { PageContainer } from '@/components/atomics/PageContainer'
import Header from '@/components/molecules/Header'
import { ProfileCard } from '@/components/organisms/ProfileCard'
import { Typography } from '@/components/atomics/Typography'
import { router } from 'expo-router'

function profile() {
    router.push('/therapist/home/profile')
}

export default function Home() {
  return (
    <PageContainer>
        <Header name='John Doe' profileImage='https://github.com/diego3g.png' headerType = "goBack" />
        <Typography style={{fontSize: 18}}>Pacientes</Typography>
        <ProfileCard fn={profile} color='green' fontColor='white' variation='normal'/>
        <ProfileCard fn={profile} color='green' fontColor='white' variation='normal'/>
        <ProfileCard fn={profile} color='green' fontColor='white' variation='normal'/>
        <ProfileCard fn={profile} color='green' fontColor='white' variation='normal'/>
        <ProfileCard fn={profile} color='green' fontColor='white' variation='normal'/>
        <ProfileCard fn={profile} color='green' fontColor='white' variation='normal'/>
        <ProfileCard fn={profile} color='green' fontColor='white' variation='normal'/>
        <ProfileCard fn={profile} color='green' fontColor='white' variation='normal'/>
        <ProfileCard fn={profile} color='green' fontColor='white' variation='normal'/>
    </PageContainer>
  )
}