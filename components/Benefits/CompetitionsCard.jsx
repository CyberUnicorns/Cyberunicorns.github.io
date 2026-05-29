import { Box, Flex, Text } from '@chakra-ui/react'

const competitionLogos = [
  { src: '/competitions/picoctf.png', alt: 'picoCTF logo' },
  { src: '/competitions/pico-mascot.png', alt: 'picoCTF mascot' },
  { src: '/competitions/csaw.jpg', alt: 'CSAW CTF logo' },
  { src: '/competitions/ncc.svg', alt: 'National Cyber Cup logo' },
  { src: '/competitions/cyberpatriot.svg', alt: 'CyberPatriot logo' },
  { src: '/competitions/hsctf.svg', alt: 'HSCTF logo' },
]

export function CompetitionsCard() {
  return (
    <Box
      bg="white"
      p={{ base: 5, md: 6 }}
      rounded="lg"
      className="interactive-card competitions-card"
      display="flex"
      flexDirection="column"
      h="100%"
    >
      <Flex
        className="competitions-card__logos"
        align="center"
        justify="center"
        wrap="wrap"
        gap={{ base: 4, md: 6 }}
        flex="1"
        py={{ base: 4, md: 6 }}
      >
        {competitionLogos.map((logo) => (
          <Box key={logo.alt} className="competitions-card__logo" flexShrink={0}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo.src} alt={logo.alt} />
          </Box>
        ))}
      </Flex>

      <Text
        lineHeight="1.7"
        color="gray.700"
        fontSize={{ base: 'md', md: 'lg' }}
        textAlign="center"
        mt="auto"
        pt={4}
      >
        Here are some of the competitions that we plan on doing next year, most are team-based but
        we&apos;ll also find solo ones if that matches your style more!
      </Text>
    </Box>
  )
}
