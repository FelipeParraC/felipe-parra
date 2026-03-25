import { About } from '@/components/About';
import { AwsCertifications } from '@/components/AwsCertifications';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Hero } from '@/components/Hero';
import { Portfolio } from '@/components/Portfolio';
import { Sidebar } from '@/components/Sidebar';
import { Skills } from '@/components/Skills';
import { Studies } from '@/components/Studies';
import { contactEmail, contactLocation, contactPhone, heroDescription, heroName, profileImage, profileRole, socialLinks } from '@/data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://felipe-parra.vercel.app"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: heroName,
  description: heroDescription,
  image: `${siteUrl}${profileImage}`,
  jobTitle: profileRole,
  email: contactEmail,
  telephone: contactPhone,
  address: {
    "@type": "PostalAddress",
    addressLocality: contactLocation,
  },
  sameAs: socialLinks
    .filter((link) => link.href.startsWith("http"))
    .map((link) => link.href),
  url: siteUrl,
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Sidebar />
      <main className="lg:ml-72">
        <Hero />
        <About />
        <Studies />
        <Experience />
        <Skills />
        <div id="certifications">
          <AwsCertifications />
          <Certifications />
        </div>
        <Portfolio />
        <Contact />
      </main>
    </div>
  )
}
