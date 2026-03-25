"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram, Send, CheckCircle2, AlertCircle } from "lucide-react"
import { contactEmail, contactLocation, contactPhone, contactPhoneHref, contactWhatsappHref, socialLinks } from '@/data'
import { ContactCard, SectionTitle, SocialIcons } from '@/elements'
import { Button, Input, Textarea } from './ui'



const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: contactPhone,
    href: `tel:${contactPhoneHref}`,
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Location",
    value: contactLocation,
  },
]

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin className="w-5 h-5" />,
  github: <Github className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
  phone: <Phone className="w-5 h-5" />,
}

const socialLinksWithIcons = socialLinks
  .filter((link) => ["linkedin", "github", "twitter", "instagram"].includes(link.iconType))
  .map((link) => ({
    icon: iconMap[link.iconType],
    href: link.href,
    label: link.name,
  }))

export function Contact() {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error"
    message: string
  }>({
    type: "idle",
    message: "",
  })

  function validateForm(name: string, email: string, message: string) {
    const nextErrors = {
      name: name.trim() ? "" : "Please enter your name.",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ? "" : "Please enter a valid email address.",
      message: message.trim().length >= 10 ? "" : "Please enter at least 10 characters.",
    }

    setErrors(nextErrors)
    return !Object.values(nextErrors).some(Boolean)
  }

  function clearFieldError(field: "name" | "email" | "message") {
    setErrors((current) => {
      if (!current[field]) return current

      return {
        ...current,
        [field]: "",
      }
    })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const name = String(formData.get("name") ?? "")
    const email = String(formData.get("email") ?? "")
    const message = String(formData.get("message") ?? "")

    if (!validateForm(name, email, message)) {
      setStatus({
        type: "error",
        message: "Please review the highlighted fields before continuing.",
      })
      return
    }

    const whatsappMessage = `
¡Hola, Pipe!
Te escribo desde tu página web.

Mi nombre es ${name}.
Mi correo es ${email}.

Quería comentarte lo siguiente:
${message}
`.trim()

    const url = `${ contactWhatsappHref }?text=${encodeURIComponent(
      whatsappMessage
    )}`

    const openedWindow = window.open(url, "_blank", "noopener,noreferrer")

    if (openedWindow) {
      setStatus({
        type: "success",
        message: "WhatsApp opened with your message ready to send.",
      })
      e.currentTarget.reset()
      setErrors({
        name: "",
        email: "",
        message: "",
      })
      return
    }

    setStatus({
      type: "error",
      message: "WhatsApp could not be opened. Please allow pop-ups or contact me by email.",
    })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/80">
      <div className="max-w-6xl mx-auto">
        <SectionTitle preText="Contact" highlightText="Me" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Let&apos;s connect</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-justify">
              Feel free to reach out by email, phone, or social media. I&apos;m always open to discussing new projects,
              collaborations, and professional opportunities.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <ContactCard key={info.label} icon={info.icon} label={info.label} value={info.value} href={info.href} />
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Find me online</h4>
              <SocialIcons links={socialLinksWithIcons} />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-6 md:p-8 rounded-xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">Send a message via WhatsApp</h3>
            <p className="mb-6 text-sm leading-6 text-muted-foreground">
              Fill out the form and a WhatsApp message with your details will open automatically.
            </p>
            {status.type !== "idle" && (
              <div
                className={`mb-5 flex items-start gap-3 rounded-lg border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-primary/30 bg-primary/10 text-foreground"
                    : "border-destructive/40 bg-destructive/10 text-foreground"
                }`}
                role="status"
                aria-live="polite"
              >
                {status.type === "success" ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                ) : (
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                )}
                <span>{status.message}</span>
              </div>
            )}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="bg-secondary border-border focus:border-primary"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    onChange={() => clearFieldError("name")}
                  />
                  {errors.name && <p id="name-error" className="mt-2 text-sm text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="bg-secondary border-border focus:border-primary"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    onChange={() => clearFieldError("email")}
                  />
                  {errors.email && <p id="email-error" className="mt-2 text-sm text-destructive">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="bg-secondary border-border focus:border-primary resize-none h-60"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  onChange={() => clearFieldError("message")}
                />
                {errors.message && <p id="message-error" className="mt-2 text-sm text-destructive">{errors.message}</p>}
              </div>
              <Button type="submit" className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Open WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
