import { PageLayout } from '../components/PageLayout'
import { Contact } from '../components/Contact'

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact"
      description="Get in touch with Cybercorns — Discord, Instagram, and founder emails."
    >
      <Contact />
    </PageLayout>
  )
}
