import { View } from 'react-native'
import { RegisterCard } from "./RegisterCard"
import type { Colors } from "@/themes"

interface CardListProps {
  cardLimit?: number
  cardFn: () => void
  data?: getChildRecordResponse['data'];
}

export function CardList({ cardLimit, cardFn, data }: CardListProps) {

  return (
    <View style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {data?.slice(0, cardLimit).map((card) => (
        <RegisterCard key={card.id} fn={cardFn} bodyText={card.content} title={String(card.authorId)} subtitle={card.authorRole} date={card.createdAt} />
      ))}
    </View>
  )
}

export default CardList

const MOCK_DATA = [
  {
    id: 1,
    title: 'Kelly Azevedo',
    subtitle: 'Responsável',
    date: '20/02 ás 12h00',
    bodyText: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
  },
  {
    id: 2,
    title: 'John Doe',
    subtitle: 'Teacher',
    date: '21/02 ás 14h00',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 3,
    title: 'Jane Smith',
    subtitle: 'Student',
    date: '22/02 ás 10h00',
  },
  {
    id: 4,
    title: 'Alice Johnson',
    subtitle: 'Parent',
    date: '23/02 ás 16h00',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 5,
    title: 'Bob Brown',
    subtitle: 'Principal',
    date: '24/02 ás 09h00',
    bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
]