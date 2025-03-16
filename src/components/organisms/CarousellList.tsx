import { Colors } from "@/themes";
import { Box } from "../atomics/Box";
import { Typography } from "../atomics/Typography";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { ProfileCard } from "./ProfileCard";
import { Ionicons } from "@expo/vector-icons";

export function CarousellList({
  color,
  fontColor,
  cardColor,
  cardFontcolor,
  crFn,
  cardFn,
  title = "Pacientes",
}: {
  color: Colors;
  fontColor: Colors;
  cardColor: Colors;
  cardFontcolor: Colors;
  title?: string;
  crFn: () => void;
  cardFn: () => void;
}) {
  return (
    <TouchableOpacity onPress={() => crFn()}>
      <Box style={{ height: 160, padding: 12 }} bgColor={color}>
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
            <Typography color={fontColor} style={{ fontSize: 18 }}>
              {title}
            </Typography>
            <Ionicons name="chevron-forward" size={20} color={fontColor} />
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ display: "flex", flexDirection: "row", gap: 24 }}
          >
            <ProfileCard
              fn={cardFn}
              color={cardColor}
              fontColor={cardFontcolor}
              variation="small"
              style={{ marginRight: 12 }}
              info="Turma 1A"
            />
            <ProfileCard
              fn={cardFn}
              color={cardColor}
              fontColor={cardFontcolor}
              variation="small"
              style={{ marginRight: 12 }}
              info="Turma 1A"
            />
            <ProfileCard
              fn={cardFn}
              color={cardColor}
              fontColor={cardFontcolor}
              variation="small"
              style={{ marginRight: 12 }}
              info="Turma 1A"
            />
            <ProfileCard
              fn={cardFn}
              color={cardColor}
              fontColor={cardFontcolor}
              variation="small"
            />
          </ScrollView>
        </View>
      </Box>
    </TouchableOpacity>
  );
}
