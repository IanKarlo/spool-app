import { Colors } from "@/themes";
import { Box } from "../atomics/Box";
import { Typography } from "../atomics/Typography";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import Profile from "../atomics/Profile";

export function ProfileCard({
  color,
  fontColor,
  variation,
  style,
  fn,
  name = "Mateus Azevedo",
  info = "Kelly Azevedo",
}: {
  color: Colors;
  fontColor: Colors;
  variation: "small" | "normal";
  style?: ViewStyle;
  fn: () => void;
  name?: string;
  info?: string;
}) {
  const width = variation === "normal" ? "100%" : 260;

  return (
    <TouchableOpacity onPress={fn}>
      <Box style={{ height: 92, padding: 12, width, ...style }} bgColor={color}>
        <View style={{ display: "flex", flexDirection: "row", gap: 12 }}>
          <Profile uri="https://github.com/diego3g.png" color={color} />
          <View style={{ marginVertical: "auto" }}>
            <Typography color={fontColor} style={{ fontSize: 18 }}>
              {name}
            </Typography>
            <Typography color={fontColor} style={{ fontSize: 12 }}>
              {info}
            </Typography>
          </View>
        </View>
      </Box>
    </TouchableOpacity>
  );
}
