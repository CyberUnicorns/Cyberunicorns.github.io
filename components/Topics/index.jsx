import { Box, Heading, Container, SimpleGrid, UnorderedList, ListItem } from '@chakra-ui/react'
import Data from './data.json'
import { ScrollReveal } from '../ScrollReveal'

const categoryColors = {
  Web: 'blue.700',
  Cryptography: 'green.700',
  'Reverse Engineering': 'purple.700',
  Forensics: 'orange.700',
  'Binary Exploitation': 'red.700',
  'General Skills': 'teal.700',
  'Cloud & Identity': 'cyan.700',
  Tools: 'yellow.700',
}

const ABBREVIATION_REPLACEMENTS = [
  ['utf-8', 'UTF-8'],
  ['jwts', 'JWTs'],
  ['jwt', 'JWT'],
  ['oauth', 'OAuth'],
  ['ssrf', 'SSRF'],
  ['sql', 'SQL'],
  ['api', 'API'],
  ['php', 'PHP'],
  ['ascii', 'ASCII'],
  ['osint', 'OSINT'],
  ['pcaps', 'PCAPs'],
  ['pcap', 'PCAP'],
  ['gdb', 'GDB'],
  ['ssh', 'SSH'],
  ['tcp', 'TCP'],
  ['udp', 'UDP'],
  ['iam', 'IAM'],
  ['rot', 'ROT'],
  ['qr', 'QR'],
  ['hex', 'HEX'],
]

function capitalizeAbbreviations(text) {
  let result = text
  ABBREVIATION_REPLACEMENTS.forEach(([pattern, replacement]) => {
    result = result.replace(new RegExp(`\\b${pattern}\\b`, 'gi'), replacement)
  })
  return result
}

function formatTopicName(text) {
  if (!text) return text
  const formatted = capitalizeAbbreviations(text)
  return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}

export function Topics() {
  const uniqueCategories = [...new Set(Data.map((item) => item.category))]

  return (
    <Box id="topics" as="section" p={5} color="gray.800" py={{ base: 8, md: 10 }}>
      <Container maxW="container.xl">
        <ScrollReveal>
          <Heading
            as="h1"
            fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
            color="blue.700"
            fontWeight="bolder"
            textAlign="center"
            mb="8"
          >
            Topics We Cover
          </Heading>
        </ScrollReveal>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {uniqueCategories.map((category, index) => {
            const categoryItems = Data.filter((item) => item.category === category)

            return (
              <ScrollReveal key={category} delay={index * 80}>
                <Box
                  bg="white"
                  p={5}
                  rounded="lg"
                  className="interactive-card"
                  h="100%"
                >
                  <Heading
                    as="h2"
                    size="md"
                    color={categoryColors[category] || 'blue.700'}
                    fontWeight="bold"
                    mb={4}
                    textAlign="center"
                  >
                    {category}
                  </Heading>

                  <UnorderedList spacing={2} color="gray.700" stylePosition="inside">
                    {categoryItems.map((item) => (
                      <ListItem key={item.name} lineHeight="1.6">
                        {formatTopicName(item.name)}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </ScrollReveal>
            )
          })}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
