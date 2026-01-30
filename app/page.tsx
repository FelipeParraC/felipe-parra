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


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="lg:ml-72">
        <Hero />
        <About />
        <Studies />
        <Experience />
        <Skills />
        <section id="certifications">
          <AwsCertifications />
          <Certifications />
        </section>
        <Portfolio />
        <Contact />
      </main>
    </div>
  )
}
