import { View } from "react-native";
import { RegisterCard } from "./RegisterCard";
import { formatToBrazilianDate, mapRoleToPortuguese } from "@/utils/string";
interface CardListProps {
  cardLimit?: number;
  cardFn: (id: number) => void;
  data?: ChildRecord[];
}

export function CardList({ cardLimit, cardFn, data }: CardListProps) {
  if (!data) return null;

  return (
    <View style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {data?.slice(0, cardLimit).map((card) => (
        <RegisterCard
          tags={card.symptoms}
          key={card.id}
          fn={() => cardFn(card.id)}
          bodyText={card.content}
          title={String(card.authorName)}
          subtitle={mapRoleToPortuguese(card.authorRole)}
          date={formatToBrazilianDate(card.createdAt)}
        />
      ))}
    </View>
  );
}

export default CardList;
