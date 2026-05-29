import { useState } from 'react'
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
} from '@chakra-ui/react'

const UNLOCK_PORTS = new Set([1337, 31337, 9001])

function normalizeCommand(text) {
  return text.trim().replace(/\s+/g, ' ').toLowerCase()
}

function isListenerCommand(command) {
  if (!/^(nc|netcat|ncat)\s+/i.test(command)) return false
  if (!/(^|\s)-l/i.test(command) && !/(^|\s)-lp/i.test(command)) return false

  const portFromLp = command.match(/-lp\s*(\d{1,5})/i)
  if (portFromLp) {
    return UNLOCK_PORTS.has(Number.parseInt(portFromLp[1], 10))
  }

  const portFromFlag = command.match(/-p\s+(\d{1,5})/i)
  if (portFromFlag) {
    return UNLOCK_PORTS.has(Number.parseInt(portFromFlag[1], 10))
  }

  return false
}

function isConnectCommand(command) {
  const match = command.match(/^(nc|netcat|ncat)(\s+-\w+)*\s+([\w.-]+)\s+(\d{1,5})$/i)
  if (!match) return false
  const port = Number.parseInt(match[4], 10)
  return UNLOCK_PORTS.has(port)
}

function isValidNetcatAttempt(username, password) {
  const attempts = [
    normalizeCommand(username),
    normalizeCommand(password),
    normalizeCommand(`${username} ${password}`),
  ].filter(Boolean)

  return attempts.some((command) => isConnectCommand(command) || isListenerCommand(command))
}

export function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isValidNetcatAttempt(username, password)) {
      setIsUnlocked(true)
      setError('')
      return
    }
    setError('Access denied. Invalid credentials.')
  }

  if (isUnlocked) {
    return (
      <Box
        bg="green.50"
        border="2px solid"
        borderColor="green.400"
        p={{ base: 6, md: 8 }}
        rounded="lg"
        className="interactive-card admin-panel"
        mt={6}
        textAlign="center"
      >
        <Text fontFamily="mono" fontSize="sm" color="green.700" mb={3}>
          connection established...
        </Text>
        <Heading as="h2" size="lg" color="green.800">
          wow you broke into the admin panel
        </Heading>
      </Box>
    )
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      bg="white"
      p={{ base: 6, md: 8 }}
      rounded="lg"
      className="interactive-card admin-login"
      mt={6}
    >
      <Heading as="h2" size="md" color="red.600" textAlign="center" mb={5}>
        Admin Login (reg ppl no touchy!!!)
      </Heading>

      <Stack spacing={4}>
        <FormControl>
          <FormLabel fontSize="sm" color="gray.600">
            Username
          </FormLabel>
          <Input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            fontFamily="mono"
            placeholder="user@host"
            autoComplete="off"
          />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="sm" color="gray.600">
            Password
          </FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            fontFamily="mono"
            placeholder="••••••••"
            autoComplete="off"
          />
        </FormControl>

        {error ? (
          <Text color="red.500" fontSize="sm" fontFamily="mono">
            {error}
          </Text>
        ) : null}

        <Button
          type="submit"
          variant="outline"
          colorScheme="blue"
          width="full"
          className="btn-interactive fx-shimmer"
        >
          Login
        </Button>
      </Stack>
    </Box>
  )
}
