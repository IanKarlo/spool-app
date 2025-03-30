import { Button } from '@/components/atomics/Button'
import { Typography } from '@/components/atomics/Typography'
import React from 'react'
import { View, SectionList } from 'react-native'
import { useUser } from '@/contexts/UserContext'
import { router } from 'expo-router'
export default function Tokens() {
  const { setUserToken } = useUser();
  const sections = [
    { title: 'Crianças', data: children },
    { title: 'Educadores', data: educators },
    { title: 'Terapeutas', data: therapists },
  ]

  const onPress = (token: string, section: string) => {
    setUserToken(token);
    switch (section) {
      case 'Crianças':
        router.replace('./parents');
        break;
      case 'Educadores':
        router.replace('./educators');
        break;
      case 'Terapeutas':
        router.replace('./therapist');
        break;
    }
  }

  return (
    <View style={{ flex: 1, padding: 4 }}>
      <SectionList
        sections={sections}
        renderItem={({ item, section }) => renderItem({ item, onPress: (token) => onPress(token, section.title) })}
        renderSectionHeader={({ section: { title } }) => (
          <Typography style={{ fontSize: 24, fontWeight: "bold", marginVertical: 8 }}>
            {title}
          </Typography>
        )}
        keyExtractor={(item) => item.token}
        contentContainerStyle={{
          gap: 4,
        }}
        stickySectionHeadersEnabled={false}
        renderSectionFooter={() => <View style={{ height: 16 }} />}
      />
    </View>
  )
}

const renderItem = ({ item, onPress }: { item: { name: string, token: string }, onPress: (token: string) => void }) => {

  return (
      <Button
        variant="outlined"
        text={`${item.name} - ${item.token}`}
        onPress={() => onPress(item.token)}
        style={{
          height: 40,
          paddingVertical: 4,
          paddingHorizontal: 4,
          flex: 1
        }}
      />
  )
}

const children = [
  { name: 'João Silva', token: 'f57773d3' },
  { name: 'Ana Costa', token: '5a7f8c9c' },
  { name: 'Pedro Almeida', token: '992ea7ae' },
  { name: 'Mariana Rocha', token: '073cb842' },
  { name: 'Lucas Fernandes', token: '0b7dafb3' },
  { name: 'Sofia Lima', token: '51a8757e' },
  { name: 'Gabriel Santos', token: '58f8b9fe' },
  { name: 'Laura Oliveira', token: '529a6987' },
  { name: 'Enzo Pereira', token: 'e3ed19b3' },
  { name: 'Valentina Souza', token: '185279ac' },
  { name: 'Rafael Gonçalves', token: '2c30c996' },
  { name: 'Beatriz Martins', token: '62273f9b' },
  { name: 'Davi Ribeiro', token: '750acb0b' },
  { name: 'Helena Carvalho', token: 'e8731956' },
  { name: 'Arthur Lopes', token: 'bce798bf' },
  { name: 'Alice Barbosa', token: '1cc4bf37' },
  { name: 'Bernardo Nunes', token: '56a076da' },
  { name: 'Clara Mendes', token: '4a6795c3' },
  { name: 'Luiz Castro', token: '01a1567f' },
  { name: 'Isabel Ferreira', token: 'f7f30e8b' },
];

const educators = [
  { name: 'Ana Souza', token: '8cf7bd59' },
  { name: 'Carlos Mendes', token: 'c3979f5a' },
  { name: 'Fernanda Lima', token: '96307ae2' },
  { name: 'Roberto Alves', token: 'd5e28e0c' },
  { name: 'Patrícia Costa', token: 'e3730f99' },
  { name: 'Marcos Oliveira', token: '469e95b8' },
  { name: 'Juliana Santos', token: '52365702' },
  { name: 'Eduardo Mendes', token: '32e9f440' },
  { name: 'Cristina Pereira', token: '7b879391' },
  { name: 'Antônio Souza', token: '391f2595' },
  { name: 'Isabela Gonçalves', token: 'a2e0a263' },
  { name: 'Felipe Martins', token: 'd9b2a9ed' },
  { name: 'Luciana Ribeiro', token: '8bd81fe2' },
  { name: 'Gustavo Carvalho', token: '62ab5137' },
  { name: 'Tatiane Lopes', token: 'd4248d80' },
  { name: 'Rodrigo Barbosa', token: 'd6e46381' },
  { name: 'Camila Nunes', token: '5beacd03' },
  { name: 'Amanda Castro', token: 'e5e57659' },
  { name: 'Bruno Ferreira', token: '57196942' },
  { name: 'Maria Silva', token: '0b3ecf04' },
];

const therapists = [
  { name: 'Dr. Ricardo Almeida', token: '392b97b6' },
  { name: 'Dra. Sofia Rocha', token: '8b7eb31e' },
  { name: 'Dr. Pedro Costa', token: 'ee1be5bf' },
  { name: 'Dra. Luiza Fernandes', token: 'd8de6997' },
  { name: 'Dr. Gabriel Santos', token: '8c73babf' },
  { name: 'Dra. Carla Oliveira', token: '8d874087' },
  { name: 'Dr. Lucas Pereira', token: '56194c60' },
  { name: 'Dra. Mariana Gonçalves', token: '37a2509c' },
  { name: 'Dr. Rafael Martins', token: '77e29b2d' },
  { name: 'Dra. Beatriz Nunes', token: '0283a71e' },
  { name: 'Dr. Arthur Castro', token: 'a17a7ecf' },
  { name: 'Dra. Laura Ferreira', token: 'a33b24f9' },
  { name: 'Dr. Enzo Barbosa', token: '5cdef58a' },
  { name: 'Dra. Clara Mendes', token: '7602be50' },
  { name: 'Dr. Bernardo Lopes', token: '879e89bf' },
  { name: 'Dra. Alice Castro', token: '41097a1a' },
  { name: 'Dr. Davi Ribeiro', token: '212f787b' },
  { name: 'Dra. Valentina Souza', token: '097ffbe6' },
  { name: 'Dr. Luiz Carvalho', token: '33b3548c' },
  { name: 'Dra. Isabel Ferreira', token: '931bc0b3' },
  { name: 'Dra. Solange Melo', token: 'fecdf007' },
  { name: 'Dr. Fabio Melo', token: 'eacdb499' },
];