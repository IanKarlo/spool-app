import type { TextInputProps, TextProps } from 'react-native'
import styled from 'styled-components/native'
import { Box } from './Box'
import { Typography } from './Typography'
import type { DefaultTheme } from 'styled-components'

interface TextFieldProps extends Omit<TextInputProps, 'placeholderTextColor'> {
  label?: string
  labelProps?: TextProps
  error?: string
  multiline?: boolean
}

export function TextField({
  label,
  error,
  labelProps,
  multiline = false,
  ...inputProps
}: TextFieldProps) {
  return (
    <Box
      bgColor="white"
      style={{ gap: 12 }}
    >
      {label && (
        <Typography color='black' {...labelProps}>
          {label}
        </Typography>
      )}

      <StyledInput
        hasError={!!error}
        multiline={multiline}
        numberOfLines={multiline ? 6 : 1}
        textAlignVertical={multiline ? 'top' : 'center'}
        placeholderTextColor={'gray'}
        {...inputProps}
      />

      {error && (
        <Typography
          color="black"
          style={{ fontSize: 12 }}
        >
          {error}
        </Typography>
      )}
    </Box>
  )
}

const StyledInput = styled.TextInput<TextFieldProps>`
  font-family: 'TTChocolates-Regular';
  font-size: 16px;
  padding: 12px 16px;
  border-radius: ${({ theme }: { theme: DefaultTheme }) => theme.radius.default}px;
  border-width: ${({ hasError }: { hasError: boolean }) => hasError ? 2 : 1}px;
  border-color: ${({ theme, hasError }: { theme: DefaultTheme, hasError: boolean }) =>
    hasError ? theme.colors.black : theme.colors.darkGray};
  min-height: ${({ multiline }: { multiline: boolean }) => multiline ? '120px' : '48px'};
`