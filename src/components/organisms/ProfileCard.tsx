import type { Colors } from "@/themes";
import { Box } from "../atomics/Box";
import { Typography } from "../atomics/Typography";
import { TouchableOpacity, View, type ViewStyle } from "react-native";
import Profile from "../atomics/Profile";
import { usePathnameColor } from "@/hooks/usePathnameColor";
import { useTheme } from "styled-components";

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
  const { tabColor } = usePathnameColor();
  const theme = useTheme();

  const colorAvatar = theme.colors[tabColor as Colors].split("#")[1];

  const profileImageAvatar = `https://ui-avatars.com/api/?size=64&background=${colorAvatar}&color=fff&name=${encodeURI(
    name
  )}`;

  return (
    <TouchableOpacity onPress={fn}>
      <Box
        style={{ height: 92, padding: 12, width, ...style }}
        bgColor={"lightBlue"}
      >
        <View style={{ display: "flex", flexDirection: "row", gap: 12, alignItems: "center", height: "100%" }}>
          <Profile
            uri={profileImageAvatar}
            color={color}
            singleBorder
            size={48}
          />
          <View style={{ marginVertical: "auto" }}>
            <Typography
              color={fontColorName}
              style={{
                fontSize: 18,
                fontWeight: 600,
                fontFamily: "TTChocolates-Medium",
              }}
            >
              {name}
            </Typography>
            <Typography
              color={fontColorInfo}
              style={{
                fontSize: 12,
                fontWeight: 400,
                fontFamily: "TTChocolates-Regular",
              }}
            >
              {info}
            </Typography>
          </View>
        </View>
      </Box>
    </TouchableOpacity>
  );
}
