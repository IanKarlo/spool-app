import type { Colors } from "@/themes";
import type { PressableProps } from "react-native";
import { Pressable } from "react-native";
import { Box } from "./Box";
import { Typography } from "./Typography";
import { useTheme } from "styled-components/native";

interface ButtonProps extends Omit<PressableProps, "style"> {
  variant?: "filled" | "outlined";
  color?: Colors;
  text: string;
}

export function Button({
  variant = "filled",
  color = "pink",
  text,
  ...pressableProps
}: ButtonProps) {
  const theme = useTheme();
  const backgroundColor = variant === "filled" ? color : "white";
  const textColor = variant === "filled" ? "white" : color;

  return (
    <Pressable {...pressableProps}>
      <Box
        bgColor={backgroundColor}
        style={{
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderWidth: variant === "outlined" ? 2 : 0,
          borderColor:
            color === "white" ? "black" : theme.colors[color as Colors],
        }}
      >
        <Typography
          color={textColor}
          style={{
            textAlign: "center",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Pressable>
  );
}
