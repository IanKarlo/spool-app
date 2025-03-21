import { Colors } from "@/themes";
import { Box } from "../atomics/Box";
import { TouchableOpacity, View } from "react-native";
import { Typography } from "../atomics/Typography";
import { Tag } from "../molecules/Tag";

interface RegisterCardProps {
  responsibleName?: string;
  responsibleRole?: string;
  date?: string;
  color: Colors;
  fontColor?: Colors;
  fn: () => void;
}

export function RegisterCard({
  color,
  responsibleName = 'Kelly Azevedo',
  responsibleRole = 'Responsável',
  date = '20/02 ás 12h00',
  fontColor = "white",
  fn,
}: RegisterCardProps) {
  return (
    <TouchableOpacity onPress={() => fn()}>
      <Box style={{ height: 160, width: "100%", padding: 12 }} bgColor={color}>
        <View style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Typography
                color={fontColor}
                style={{ fontSize: 18, fontWeight: "bold" }}
              >
                {responsibleName}
              </Typography>
              <Typography color='black' style={{ fontSize: 14 }}>
                {responsibleRole}
              </Typography>
            </View>
            <Typography color='black' style={{ fontWeight: "100" }}>
              {date}
            </Typography>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 4,
            }}
          >
            <Tag
              icon="airplay"
              color={fontColor}
              label="Bom-humor"
              variant="white"
            />
            <Tag
              icon="airplay"
              color={fontColor}
              label="Bom-humor"
              variant="white"
            />
            <Tag
              icon="airplay"
              color={fontColor}
              label="Bom-humor"
              variant="white"
            />
          </View>
          <Typography color='black' style={{ fontSize: 14, marginTop: 12 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Typography>
        </View>
      </Box>
    </TouchableOpacity>
  );
}
