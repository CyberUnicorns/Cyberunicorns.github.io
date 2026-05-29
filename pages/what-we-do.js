import { Box } from '@chakra-ui/react'
import { PageLayout } from '../components/PageLayout'
import { Benefits } from '../components/Benefits'

export default function WhatWeDoPage() {
  return (
    <PageLayout description="Learn what Cybercorns does — meetings, projects, competitions, and club pathways.">
      <Benefits />
    </PageLayout>
  )
}
