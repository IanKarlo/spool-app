import ViewRegisterPage from '@/components/pages/ViewRegisterPage'

export default function ViewRegister() {
  return (
    <ViewRegisterPage type="educator" child={{
      name: 'Matheus Azevedo',
      profileImage: 'https://github.com/diego3g.png',
      subtitle: '6 Anos'
    }} />
  )

}
