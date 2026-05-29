import { Box, Heading, Container, Grid, GridItem, Text, Button, Stack } from '@chakra-ui/react'
import { LightboxImage } from '../Lightbox'
import { ScrollReveal } from '../ScrollReveal'
import { TypewriterText } from '../TypewriterText'
import { GlitchText } from '../GlitchText'

const joinLinks = {
  discord: 'https://discord.gg/R67SaG78Ad',
  instagram: 'https://instagram.com/ncssm_cybercorns',
  interestForm:
    'https://docs.google.com/forms/d/e/1FAIpQLSezdZrJK939zlVGsvFhBark3VsP5kXc4KrLT-2yJc2T9PveQg/viewform?usp=sharing&ouid=118136963325335320825',
}

const tagline =
  "NCSSM Durham's official cybersecurity club open to all Durham, Morganton, and Online students."

export function Landing() {
  return (
    <Box
      id="welcome"
      as="section"
      className="hero-section hero-section--fullscreen"
      w="100%"
      p={4}
      color="gray.800"
      mt="0"
    >
      <Container
        maxW="container.xl"
        py={{ base: 6, md: 10 }}
        px={4}
        className="hero-content"
        flex="1"
        display="flex"
        alignItems="center"
      >
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          align="center"
          gap={8}
          w="100%"
        >
          <GridItem colSpan={1} my="auto">
            <ScrollReveal>
              <Heading as="h1" fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }} color="gray.600">
                Join the
              </Heading>
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                color="blue.800"
                d="inline"
                className="hero-title-inline"
              >
                Cyber
              </Heading>
              <GlitchText
                text="corns"
                className="hero-title-inline hero-title-glitch"
                fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                fontWeight="bold"
                lineHeight="1.2"
                color="blue.500"
              />
            </ScrollReveal>
          </GridItem>

          <GridItem colSpan={1}>
            <ScrollReveal delay={150}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
              >
                <div className="fx-hero-glow fx-tilt">
                  <LightboxImage
                    src="/logo.png"
                    alt="Cybercorns unicorn logo"
                    className="landing-logo"
                  />
                </div>

                <TypewriterText
                  text={tagline}
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="gray.700"
                  mt={5}
                  maxW="420px"
                  lineHeight="1.6"
                  minH={{ base: '4.5rem', md: '3.5rem' }}
                />

                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  spacing={4}
                  mt={6}
                  justify="center"
                  align="center"
                  flexWrap="wrap"
                >
                  <Button
                    as="a"
                    href={joinLinks.discord}
                    colorScheme="blue"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-interactive fx-shimmer"
                  >
                    Discord
                  </Button>
                  <Button
                    as="a"
                    href={joinLinks.instagram}
                    variant="outline"
                    colorScheme="pink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-interactive fx-shimmer"
                  >
                    Instagram
                  </Button>
                  <Button
                    as="a"
                    href={joinLinks.interestForm}
                    variant="outline"
                    colorScheme="blue"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-interactive fx-shimmer"
                  >
                    Interest Form
                  </Button>
                </Stack>
              </Box>
            </ScrollReveal>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}
