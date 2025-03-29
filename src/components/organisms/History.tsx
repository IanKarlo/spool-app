import { TouchableOpacity, View } from "react-native";
import { Typography } from "../atomics/Typography";
import { Ionicons } from "@expo/vector-icons";
import type { Colors } from "@/themes";
import RegisterCardList from "./RegisterCardList";
interface RegisterHistoryProps {
  hideIcon?: boolean;
  cardFn: (id: number) => void;
  historyFn?: () => void;
  data?: getChildRecordResponse["data"];
}

export function RegisterHistory({
  hideIcon,
  cardFn,
  historyFn,
  data,
}: RegisterHistoryProps) {
  return (
    <View style={{ gap: 16 }}>
      <TouchableOpacity
        onPress={() => historyFn?.()}
        activeOpacity={hideIcon ? 1 : 0}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Typography style={{ fontSize: 22 }} color="text1">
            Histórico de Registros
          </Typography>
          {!hideIcon && <Ionicons name="chevron-forward" size={20} />}
        </View>
      </TouchableOpacity>
      <RegisterCardList data={data} cardFn={cardFn} cardLimit={4} />
    </View>
  );
}
