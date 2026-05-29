import { Box, Heading, Container, Text, Link, UnorderedList, ListItem } from '@chakra-ui/react'
import { ScrollReveal } from '../ScrollReveal'
import { AdminLogin } from './AdminLogin'

const discordLink = 'https://discord.gg/R67SaG78Ad'
const instagramLink = 'https://instagram.com/ncssm_cybercorns'

export function Contact() {
  return (
    <Box
      id="contact"
      as="section"
      p={4}
      color="gray.800"
      className="page-section--fullscreen"
    >
      <Container
        maxW="container.md"
        px={4}
        py={{ base: 8, md: 10 }}
        flex="1"
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Box w="100%">
          <ScrollReveal>
            <Heading
              as="h1"
              fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
              color="blue.700"
              fontWeight="bolder"
              textAlign="center"
              mb="6"
            >
              Contact
            </Heading>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Box
              bg="white"
              p={{ base: 6, md: 8 }}
              rounded="lg"
              className="interactive-card"
              textAlign="left"
            >
              <Text
                color="gray.800"
                fontSize={{ base: 'lg', md: 'xl' }}
                fontWeight="semibold"
                mb={4}
                textAlign="center"
              >
                Have questions or want to get involved?
              </Text>

              <UnorderedList
                spacing={3}
                color="gray.700"
                fontSize={{ base: 'md', md: 'lg' }}
                lineHeight="1.8"
                stylePosition="inside"
                pl={2}
              >
                <ListItem>
                  Feel free to message our Instagram account{' '}
                  <Link
                    href={instagramLink}
                    color="blue.500"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-interactive"
                  >
                    @ncssm_cybercorns
                  </Link>
                </ListItem>
                <ListItem>
                  Ask in the Cybercorns{' '}
                  <Link
                    href={discordLink}
                    color="blue.500"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-interactive"
                  >
                    Discord server
                  </Link>
                </ListItem>
                <ListItem>
                  Email/g-chat the founders at{' '}
                  <Link href="mailto:cai27a1@ncssm.edu" color="blue.500" className="link-interactive">
                    cai27a1@ncssm.edu
                  </Link>{' '}
                  or{' '}
                  <Link href="mailto:kumar27p@ncssm.edu" color="blue.500" className="link-interactive">
                    kumar27p@ncssm.edu
                  </Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <AdminLogin />
          </ScrollReveal>
        </Box>
      </Container>
    </Box>
  )
}
