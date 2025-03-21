import { View } from 'react-native';
import { RegisterCard } from "./RegisterCard";
import { Colors } from "@/themes";

interface CardListProps {
    cardLimit?: number;
    cardFn: () => void;
    color: Colors;
    fontColor?: Colors;
}

export function CardList({ cardLimit, cardFn, color, fontColor='white' }: CardListProps) {
    const cards = [1,2,3,4,5,6,7,8,9,10];

    return (
        <View style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {cards.slice(0, cardLimit).map((_, index) => (
            <RegisterCard key={index} fn={cardFn} color={color} fontColor={fontColor}/>
            ))}
        </View>
    );
}

export default CardList;