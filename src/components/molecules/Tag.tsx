import { Icon, type IconProps } from "@/components/atomics/Icon";
import { Typography } from "@/components/atomics/Typography";
import type { Colors } from "@/themes";
import type { ComponentProps } from "react";
import { Pressable, TouchableOpacity, View } from "react-native";
import { useTheme } from "styled-components";

type Variant = "inactive" | "active" | "white";

interface TagProps {
  icon?: IconProps['name'];
  label: string;
  color: Colors;
  variant?: Variant;
  onPress?: () => void;
}

const variantStyles = (
  color: Colors
): Record<
  Variant,
  {
    bgColor?: Colors;
    textColor: Colors;
    iconColor: Colors;
    borderWidth: number;
    borderColor: Colors;
  }
> => ({
  inactive: {
    textColor: "gray",
    iconColor: "gray",
    borderWidth: 1,
    borderColor: "gray",
  },
  active: {
    bgColor: color,
    borderWidth: 1,
    borderColor: color,
    textColor: "white",
    iconColor: "white",
  },
  white: {
    bgColor: "white",
    borderWidth: 1,
    borderColor: 'white',
    textColor: color,
    iconColor: color,
  },
});

export function Tag({
  icon,
  label,
  color,
  variant = "inactive",
  onPress,
}: TagProps) {
  const theme = useTheme();
  const styles = variantStyles(color)[variant];

  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          borderRadius: 24,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          paddingVertical: 4,
          paddingHorizontal: 6,
          alignSelf: "flex-start", // to fit-content
          backgroundColor: styles.bgColor
            ? theme.colors[styles.bgColor]
            : "transparent",
          borderWidth: styles.borderWidth,
          borderColor: theme.colors[styles.borderColor],
          height: 24,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 12,
            width: 12,
          }}
        >
          <Icon name={icon || getIconName(label)} size={12} color={styles.iconColor} />
        </View>
        <Typography
          color={styles.textColor as Colors}
          style={{
            fontSize: 12,
            alignSelf: "center",
            textAlign: "center",
            textAlignVertical: "center",
            fontWeight: 500,
            fontFamily: 'TTChocolates-Medium',
          }}
        >
          {label}
        </Typography>
      </View>
    </Pressable>
  );
}

const getIconName = (text?: string): IconProps['name'] => {
  const iconMap: { [key: string]: IconProps['name'] } = {
    "Gritos": "frown",
    "Agitação": "battery-charging",
    "Distração": "meh",
    "Mau-humor": "frown",
    "Motivação": "check",
    "Bom-humor": "smile",
    "Empatia": "heart",
    "Foco": "eye",
    "Ansiedade": "alert-triangle",
    "Agressividade": "thumbs-down",
    "Criatividade": "star",
  };

  return iconMap[text || ""] || "help-circle";
};

