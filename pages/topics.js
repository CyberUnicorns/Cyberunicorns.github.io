import { Box } from '@chakra-ui/react'
import { PageLayout } from '../components/PageLayout'
import { Topics } from '../components/Topics'

export default function TopicsPage() {
  return (
    <PageLayout description="Cybersecurity topics Cybercorns covers — web, crypto, forensics, reversing, and more.">
      <Topics />
    </PageLayout>
  )
}
