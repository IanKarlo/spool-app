import type { Colors } from "@/themes";
import { Box } from "../atomics/Box";
import { Typography } from "../atomics/Typography";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { ProfileCard } from "./ProfileCard";
import { Ionicons } from "@expo/vector-icons";

export type CarouselItens = {
  id: number;
  name: string;
  info: string;
};

export function CarouselList({
  fontColor = "text1",
  cardColor = "darkBlue",
  crFn,
  cardFn,
  title,
  marginSize = 24,
  itens,
}: {
  fontColor?: Colors;
  cardColor?: Colors;
  title?: string;
  crFn: () => void;
  cardFn: (id: number) => void;
  marginSize?: number;
  itens?: CarouselItens[];
}) {
  return (
    <TouchableOpacity onPress={() => crFn()}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignContent: "center",
          gap: 16,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography color={fontColor} style={{ fontSize: 22 }}>
            {title}
          </Typography>
          <Ionicons name="chevron-forward" size={20} color={fontColor} />
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 24,
            marginHorizontal: -marginSize,
          }}
        >
          <View style={{ width: marginSize }} />
          {itens?.map((item) => (
            <ProfileCard
              key={item.id}
              color={cardColor}
              style={{ marginRight: 12 }}
              variation="small"
              fn={() => cardFn(item.id)}
              name={item.name}
              info={item.info}
            />
          ))}
          <View style={{ width: marginSize }} />
        </ScrollView>
      </View>
    </TouchableOpacity>
  );
}
