import { PageLayout } from '../components/PageLayout'
import { Landing } from '../components/Landing'

export default function WelcomePage() {
  return (
    <PageLayout
      title="Welcome"
      description="Cybercorns is recruiting new members for NCSSM Durham's cybersecurity club."
    >
      <Landing />
    </PageLayout>
  )
}
