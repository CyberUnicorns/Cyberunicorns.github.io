import { Box, Text } from '@chakra-ui/react'
import { LightboxImage } from '../Lightbox'

export function Card({ title = '', logo = '', children = '' }) {
  return (
    <Box
      bg="white"
      p={5}
      color="gray.800"
      rounded={true}
      borderRadius="5px"
      className="interactive-card"
    >
      <Text fontSize="2xl" fontWeight="bold" align="center" color="blue.700">
        {title}
      </Text>
      {logo ? (
        <Box textAlign="center" my={4}>
          <LightboxImage
            src={logo}
            alt={`${title} logo`}
            style={{ maxHeight: '100px', margin: '0 auto' }}
          />
        </Box>
      ) : null}
      <Text lineHeight="1.5rem" color="gray.700">
        {children}
      </Text>
    </Box>
  )
}
