import type { Colors } from "@/themes";
import { Box } from "../atomics/Box";
import { TouchableOpacity, View } from "react-native";
import { Typography } from "../atomics/Typography";
import { Tag } from "../molecules/Tag";

interface RegisterCardProps {
  title?: string;
  subtitle?: string;
  date?: string;
  bodyText?: string;
  fn: () => void;
}

export function RegisterCard({
  title,
  subtitle,
  date,
  bodyText,
  fn,
}: RegisterCardProps) {
  return (
    <TouchableOpacity onPress={() => fn()}>
      <Box style={{ width: "100%", padding: 12, gap: 12 }} bgColor="lightBlue">
        <View style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 8,
            }}
          >
            <View>
              <Typography
                color="darkBlue"
                style={{ fontSize: 18, fontWeight: 700 }}
              >
                {title}
              </Typography>
              <Typography color='text1' style={{ fontSize: 16, fontWeight: 300 }}>
                {subtitle}
              </Typography>
            </View>
            <Typography color='text1' style={{ fontSize: 16, fontWeight: 400 }}>
              {date}
            </Typography>
          </View>
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
              color="blue"
              label="Bom-humor"
              variant="white"
            />
            <Tag
              icon="airplay"
              color="blue"
              label="Bom-humor"
              variant="white"
            />
            <Tag
              icon="airplay"
              color="blue"
              label="Bom-humor"
              variant="white"
            />
          </View>
          {bodyText && (
            <Typography color='text1' style={{ fontSize: 14 }} numberOfLines={2}>
              {bodyText}
            </Typography>
          )}
      </Box>
    </TouchableOpacity>
  );
}
