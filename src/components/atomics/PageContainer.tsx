import { Box } from "@/components/atomics/Box";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  type ViewStyle,
} from "react-native";
import type { DefaultTheme } from "styled-components";
import styled from "styled-components/native";
/**
 * Container for the page.
 * @param children - The children of the container.
 * @param style - The style of the container.
 * @returns The container for the page.
 */
export function PageContainer({
  children,
  style,
  isLoading,
  error,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
  isLoading?: boolean;
  error?: Error | null;
}) {
  if (isLoading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="black" />
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <LoadingContainer>
        <Text>{`Erro ao carregar dados: ${error}`}</Text>
      </LoadingContainer>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <PageContainerStyled style={{ ...style }}>{children}</PageContainerStyled>
    </ScrollView>
  );
}

export const PageContainerStyled = styled.View`
  width: 100%;
  padding: ${({ theme, style }: { theme: DefaultTheme; style: ViewStyle }) =>
    `${style.paddingVertical ?? 16}px ${style.paddingHorizontal ?? 20}px`};
  gap: ${({ theme }: { theme: DefaultTheme }) => theme.spacing[16]}px;
  ${({ style }: { style: ViewStyle }) => style};
`;

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
