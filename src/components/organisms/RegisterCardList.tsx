import { View } from 'react-native'
import { RegisterCard } from "./RegisterCard"
import { formatToBrazilianDate } from '@/utils/string'

interface CardListProps {
  cardLimit?: number
  cardFn: () => void
  data?: getChildRecordResponse['data'];
}

export function CardList({ cardLimit, cardFn, data }: CardListProps) {
  if (!data) return null

  return (
    <View style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {data?.slice(0, cardLimit).map((card) => (
        <RegisterCard key={card.id} fn={cardFn} bodyText={card.content} title={String(card.authorId)} subtitle={card.authorRole} date={formatToBrazilianDate(card.createdAt)} />
      ))}
    </View>
  )
}

export default CardList
