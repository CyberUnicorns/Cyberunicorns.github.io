import { Text } from '@chakra-ui/react'

export function GlitchText({ text, className = '', ...props }) {
  return (
    <Text
      as="span"
      display="inline"
      className={`fx-glitch-text ${className}`.trim()}
      data-text={text}
      {...props}
    >
      {text}
    </Text>
  )
}
