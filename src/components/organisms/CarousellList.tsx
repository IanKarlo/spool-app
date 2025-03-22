import type { Colors } from "@/themes";
import { Box } from "../atomics/Box";
import { Typography } from "../atomics/Typography";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { ProfileCard } from "./ProfileCard";
import { Ionicons } from "@expo/vector-icons";

export function CarouselList({
  fontColor = 'text1',
  cardColor = 'darkBlue',
  crFn,
  cardFn,
  title,
  marginSize = 24,
}: {
  fontColor?: Colors;
  cardColor?: Colors;
  title?: string;
  crFn: () => void;
  cardFn: () => void;
  marginSize?: number;
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
          <Typography color={fontColor} style={{ fontSize: 22, }}>
            {title}
          </Typography>
          <Ionicons name="chevron-forward" size={20} color={fontColor} />
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ display: "flex", flexDirection: "row", gap: 24, marginHorizontal: -marginSize }}
        >
          <View style={{ width: marginSize }}/>
          {/* LISTA AQUI ABAIXO */}
          <ProfileCard
            fn={cardFn}
            color={cardColor}
            variation="small"
            style={{ marginRight: 12 }}
            info="Turma 1A"
            name="Fulano de Tal"
          />
          <ProfileCard
            fn={cardFn}
            color={cardColor}
            variation="small"
            style={{ marginRight: 12 }}
            info="Turma 1A"
            name="Fulano de Tal"
          />
          <ProfileCard
            fn={cardFn}
            color={cardColor}
            variation="small"
            style={{ marginRight: 12 }}
            info="Turma 1A"
            name="Fulano de Tal"
          />
          <ProfileCard
            fn={cardFn}
            color={cardColor}
            variation="small"
            name="Fulano de Tal"
            info="Turma 1A"
          />
          {/* LISTA AQUI ACIMA */}
          <View style={{ width: marginSize }}/>
        </ScrollView>
      </View>
    </TouchableOpacity>
  );
}
