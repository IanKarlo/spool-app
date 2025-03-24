import ViewRegisterPage from '@/components/pages/ViewRegisterPage'

export default function Home() {
  return (
    <ViewRegisterPage type='therapist' child={{
      name: 'John Doe',
      profileImage: 'https://github.com/diego3g.png',
      subtitle: '20/02 ás 12h00'
    }}/>
  )
}