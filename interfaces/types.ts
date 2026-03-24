export interface NavItem {
  id: string
  label: string
  icon: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface Experience {
  role: string
  company: string
  companyUrl?: string
  startDate: string
  endDate: string
  description: string
  technologies: string[]
}

export interface Education {
  degree: string
  institution: string
  year: string
  description?: string
}

export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface Certification {
  name: string
  institution: string
  date: string
  image: string
  url?: string
}

export type AwsCertificationLevel =
  | 'foundational'
  | 'associate'
  | 'professional'
  | 'specialty'

export interface AwsCertification {
  name: string
  image: string
  url: string
  level: AwsCertificationLevel
}

export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export interface PersonalInfo {
  name: string
  email: string
  phone: string
  location: string
  role: string
}

export interface Language {
  name: string
  level: string
  proficiency: number // percentage for visual representation
}
