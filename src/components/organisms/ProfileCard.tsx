import type { Colors } from "@/themes";
import { Box } from "../atomics/Box";
import { Typography } from "../atomics/Typography";
import { TouchableOpacity, View, type ViewStyle } from "react-native";
import Profile from "../atomics/Profile";

export function ProfileCard({
  color,
  fontColorName = "text1",
  fontColorInfo = "text2",
  variation,
  style,
  fn,
  name,
  info,
}: {
  color: Colors;
  fontColorName?: Colors;
  fontColorInfo?: Colors;
  variation: "small" | "normal";
  style?: ViewStyle;
  fn: () => void;
  name: string;
  info: string;
}) {
  const width = variation === "normal" ? "100%" : 260;

  return (
    <TouchableOpacity onPress={fn}>
      <Box style={{ height: 92, padding: 12, width, ...style }} bgColor={'lightBlue'}>
        <View style={{ display: "flex", flexDirection: "row", gap: 12 }}>
          <Profile uri="https://github.com/diego3g.png" color={color} />
          <View style={{ marginVertical: "auto" }}>
            <Typography color={fontColorName} style={{ fontSize: 18, fontWeight: 600, fontFamily: 'TTChocolates-Medium' }}>
              {name}
            </Typography>
            <Typography color={fontColorInfo} style={{ fontSize: 12, fontWeight: 400, fontFamily: 'TTChocolates-Regular' }}>
              {info}
            </Typography>
          </View>
        </View>
      </Box>
    </TouchableOpacity>
  );
}
