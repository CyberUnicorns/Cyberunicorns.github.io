import {
  Box,
  Heading,
  Container,
  SimpleGrid,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import { CompetitionsCard } from './CompetitionsCard'
import { ScrollReveal } from '../ScrollReveal'

const whatWeDo = [
  'Bi-weekly optional meetings with fun little activities (there will be food)',
  'Learn through solo/group hands-on projects',
  'Participate in lots of different competitions (and win)',
  'And many other different opportunities that can be found on this page',
]

const pathways = [
  {
    title: 'Nonprofit',
    text: "We're planning on developing a course dedicated to teaching surface-level cybersecurity principles while also partnering with larger NPOs.",
  },
  {
    title: 'Coast Guard',
    text: 'As mentioned previously, there is a direct opportunity to work with the National Coast Guard and potentially other organizations that want student initiative.',
  },
  {
    title: 'NCSSM CTF',
    text: "There are also thoughts about hosting our own capture-the-flag competition, which we're currently discussing with NCSSM's IT department.",
  },
]

export function Benefits() {
  return (
    <Box
      id="what-we-do"
      as="section"
      p={4}
      color="gray.800"
      pt={{ base: 8, md: 10 }}
      pb={{ base: 8, md: 10 }}
    >
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
            What We Do
          </Heading>
        </ScrollReveal>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <ScrollReveal delay={0}>
            <Box
              maxW="700px"
              mx="auto"
              p={5}
              bg="white"
              rounded="lg"
              className="interactive-card"
            >
              <Text fontSize="lg" fontWeight="bold" color="blue.700">
                Hi! Want to learn more about Cybercorns?
              </Text>
              <Text mt={4}>
                Again, Cybercorns is NCSSM Durham&apos;s official cybersecurity club, but is also
                open to people in NCSSM&apos;s other programs.
              </Text>

              <Text fontWeight="bold" mt={4}>
                What we do:
              </Text>

              <UnorderedList spacing={2} mt={2}>
                {whatWeDo.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </UnorderedList>

              <Text fontWeight="bold" mt={4}>
                Looking for leadership!
              </Text>
              <Text mt={2}>
                If you show initiative, you&apos;re welcome even if you&apos;re new to
                cybersecurity :)
              </Text>
            </Box>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Box
              maxW="700px"
              mx="auto"
              p={5}
              bg="white"
              rounded="lg"
              className="interactive-card"
            >
              <Heading as="h2" size="lg" color="blue.700">
                Attention!
              </Heading>
              <Text mt={4}>
                We have a direct opportunity to work with the National Coast Guard and other
                organizations and companies, so hopefully things won&apos;t be boring...
              </Text>

              <Text fontWeight="bold" mt={4}>
                How to join the club:
              </Text>
              <Text mt={2}>
                Follow our Instagram, fill out the interest form, and join our Discord server. After
                completing the form, you&apos;ll be added to the Cybercorns g-chat which contains
                important info/announcements!
              </Text>
            </Box>
          </ScrollReveal>
        </SimpleGrid>

        <ScrollReveal>
          <Heading
            as="h1"
            fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
            color="blue.700"
            fontWeight="bolder"
            textAlign="center"
            mt="12"
            mb="6"
          >
            Club Opportunities
          </Heading>
        </ScrollReveal>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="30px" mt="4">
          {pathways.map((pathway, index) => (
            <ScrollReveal key={pathway.title} delay={index * 120}>
              <Box bg="white" p={5} rounded="lg" className="interactive-card" h="100%">
                <Text fontSize="2xl" fontWeight="bold" color="blue.700" align="center">
                  {pathway.title}
                </Text>
                <Text lineHeight="1.6rem" color="gray.700" mt={4}>
                  {pathway.text}
                </Text>
              </Box>
            </ScrollReveal>
          ))}
        </SimpleGrid>

        <ScrollReveal>
          <Heading
            as="h1"
            fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
            color="blue.700"
            fontWeight="bolder"
            textAlign="center"
            mt="12"
            mb="6"
          >
            Competitions
          </Heading>
        </ScrollReveal>

        <ScrollReveal delay={0}>
          <CompetitionsCard />
        </ScrollReveal>
      </Container>
    </Box>
  )
}
