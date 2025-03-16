import { TouchableOpacity, View } from "react-native";
import { Typography } from "../atomics/Typography";
import { RegisterCard } from "./RegisterCard";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/themes";

interface RegisterHistoryProps {
  hideIcon?: boolean;
  color?: Colors;
  cardFn: () => void;
  historyFn: () => void;
}

export function RegisterHistory({
  hideIcon,
  color = "purple",
  cardFn,
  historyFn,
}: RegisterHistoryProps) {
  return (
    <View style={{ gap: 16 }}>
      <TouchableOpacity onPress={() => historyFn && historyFn()} activeOpacity={hideIcon ? 1 : 0.2}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Typography style={{ fontSize: 18 }}>Histórico de Registros</Typography>
          {!hideIcon && <Ionicons name="chevron-forward" size={20} />}
        </View>
      </TouchableOpacity>

      <View style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <RegisterCard fn={cardFn} color={color} />
        <RegisterCard fn={cardFn} color={color} />
        <RegisterCard fn={cardFn} color={color} />
        <RegisterCard fn={cardFn} color={color} />
        <RegisterCard fn={cardFn} color={color} />
      </View>
    </View>
  );
}
