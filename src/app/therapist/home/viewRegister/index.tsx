import { PageContainer } from '@/components/atomics/PageContainer'
import Header from '@/components/molecules/Header'
import { RegisterHistory } from '@/components/organisms/History'
import { ProfileHeader } from '@/components/molecules/ProfileHeader'
import { Button } from '@/components/atomics/Button'
import { View } from 'react-native'
import { Typography } from '@/components/atomics/Typography'
import { Tag } from '@/components/molecules/Tag'

function registerView() {
    router.push('/therapist/home/viewRegister')
}
export default function Home() {
  return (
    <PageContainer>
        <Header name='John Doe' profileImage='https://github.com/diego3g.png' showGoBackButton/>
        <ProfileHeader nameColor='purple'/>
        <View style={{gap: 12}}>
            <View>
                <Typography style={{fontSize: 32}}>Terapeuta</Typography>
                <Typography>Joaquim Soares</Typography>
                <Typography>20/02 ás 12h00</Typography>
            </View>
            <View>
                <Typography style={{fontSize: 20}}>Sintomas</Typography>
                <View style={{display: 'flex', flexDirection: 'row', gap: 4, flexWrap: 'wrap'}}>
                    <Tag icon="airplay" color="purple" label="Bom-humor" variant="active"/>
                    <Tag icon="airplay" color="purple" label="Bom-humor" variant="inactive"/>
                    <Tag icon="airplay" color="purple" label="Bom-humor" variant="active"/>
                    <Tag icon="airplay" color="purple" label="Bom-humor" variant="inactive"/>
                    <Tag icon="airplay" color="purple" label="Bom-humor" variant="active"/>
                </View>
            </View>
            <View>
                <Typography style={{fontSize: 20}}>Descrição</Typography>
                <Typography>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Typography>
            </View>
        </View>
    </PageContainer>
  )
}