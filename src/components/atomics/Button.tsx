import type { Colors } from "@/themes";
import type { PressableProps, StyleProp, ViewStyle } from "react-native";
import { ActivityIndicator, Pressable } from "react-native";
import { Box } from "./Box";
import { Typography } from "./Typography";
import { useTheme } from "styled-components/native";
import type { ComponentProps } from "react";
import { Icon } from "@/components/atomics/Icon";

interface ButtonProps extends Omit<PressableProps, "style"> {
  variant?: "filled" | "outlined";
  color?: Colors;
  text: string;
  style?: StyleProp<Omit<ViewStyle, "backgroundColor">>;
  isLoading?: boolean;
  rightIcon?: ComponentProps<typeof Icon>["name"];
  textWeight?: "bold" | "normal";
}

export function Button({
  variant = "filled",
  color = "pink",
  text,
  style,
  textWeight = "normal",
  isLoading,
  rightIcon,
  ...pressableProps
}: ButtonProps) {
  const theme = useTheme();
  const backgroundColor = variant === "filled" ? color : "white";
  const textColor = variant === "filled" ? "white" : color;
  const fontWeight = textWeight === "normal" ? "600" : "900";

  return (
    <Pressable {...pressableProps} disabled={isLoading}>
      <Box
        bgColor={backgroundColor}
        style={{
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderWidth: variant === "outlined" ? 2 : 0,
          borderColor:
            color === "white"
              ? "black"
              : theme.colors[color as keyof typeof theme.colors],
          ...(style as object),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Typography
            color={textColor}
            style={{
              textAlign: "center",
              fontSize: 16,
              fontFamily: "TTChocolates-Medium",
              fontWeight,
            }}
          >
            {text}
          </Typography>
        )}
        {rightIcon && <Icon name={rightIcon} size={18} color={textColor} />}
      </Box>
    </Pressable>
  );
}
