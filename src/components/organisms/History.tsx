import { TouchableOpacity, View } from "react-native";
import { Typography } from "../atomics/Typography";
import { RegisterCard } from "./RegisterCard";
import { Ionicons } from "@expo/vector-icons";
import type { Colors } from "@/themes";
import RegisterCardList from "./RegisterCardList";

interface RegisterHistoryProps {
  hideIcon?: boolean;
  cardColor?: Colors;
  fontCardColor?: Colors;
  cardFn: () => void;
  historyFn?: () => void;
}

export function RegisterHistory({
  hideIcon,
  cardColor = "lightBlue",
  fontCardColor = "white",
  cardFn,
  historyFn,
}: RegisterHistoryProps) {
  return (
    <View style={{ gap: 16 }}>
      <TouchableOpacity onPress={() => historyFn?.()} activeOpacity={hideIcon ? 1 : 0.2}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Typography style={{ fontSize: 18, fontWeight: 600, fontFamily: 'TTChocolates-Medium' }} color="darkBlue">Histórico de Registros</Typography>
          {!hideIcon && <Ionicons name="chevron-forward" size={20} />}
        </View>
      </TouchableOpacity>
      <RegisterCardList cardFn={cardFn} cardLimit={4}/>
    </View>
  );
}
