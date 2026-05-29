import { Box, Heading, Container, Button, Stack } from '@chakra-ui/react'
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
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          w="100%"
          gap={6}
        >
          <ScrollReveal>
            <Box>
              <Heading as="h1" fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }} color="gray.600">
                Join the
              </Heading>
              <Heading
                as="span"
                fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                color="blue.800"
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
            </Box>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="fx-hero-glow fx-tilt">
              <LightboxImage
                src="/logo.png"
                alt="Cybercorns unicorn logo"
                className="landing-logo"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <TypewriterText
              text={tagline}
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.700"
              maxW="420px"
              lineHeight="1.6"
              minH={{ base: '4.5rem', md: '3.5rem' }}
            />
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
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
          </ScrollReveal>
        </Box>
      </Container>
    </Box>
  )
}
