import type { Colors } from "@/themes";
import { Box } from "../atomics/Box";
import { Typography } from "../atomics/Typography";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function BigCard({
  color,
  fontColor,
  fn,
}: {
  color: Colors;
  fontColor: Colors;
  fn: () => void;
}) {
  return (
    <TouchableOpacity onPress={() => fn()}>
      <Box style={{ height: 48, padding: 12, boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} bgColor={color}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Typography color={fontColor} style={{ fontSize: 18, fontFamily: 'TTChocolates-Medium' }}>
            Criar Registro
          </Typography>
          <Ionicons name="add-outline" size={20} color={fontColor} />
        </View>
      </Box>
    </TouchableOpacity>
  );
}
