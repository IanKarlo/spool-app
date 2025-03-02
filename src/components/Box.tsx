import { View } from "react-native"
import styled from "styled-components/native"

interface BoxProps {
  width: number
  height: number
  backgroundColor: string
  children: React.ReactNode
}

export function Box({ width, height, backgroundColor, children }: BoxProps) {
  return (
    <StyledBox width={width} height={height} backgroundColor={backgroundColor}>
      {children}
    </StyledBox>
  )
}

const StyledBox = styled.View`
    width: ${({ width }: BoxProps) => width}px;
    height: ${({ height }: BoxProps) => height}px;
    background-color: ${({ backgroundColor }: BoxProps) => backgroundColor};
`