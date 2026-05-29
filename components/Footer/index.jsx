import { Box, Text } from '@chakra-ui/react'

export function Footer() {
  return (
    <Box bg="gray.100" as="footer" py={5} px={4}>
      <Text textAlign="center" color="gray.800" fontSize="sm" fontStyle="italic">
        Made with{' '}
        <Text as="span" color="blue.500" fontWeight="bold" aria-hidden="true">
          ♥
        </Text>{' '}
        Cybercorns &apos;27
      </Text>
    </Box>
  )
}
