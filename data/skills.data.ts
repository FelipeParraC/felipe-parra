import type { SkillCategory } from "@/interfaces/types"

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "Java", level: 70 },
    ],
  },
  {
    title: "Data Science / ML",
    skills: [
      { name: "Data Visualization", level: 80 },
      { name: "Pandas", level: 75 },
      { name: "NumPy", level: 60 },
    ],
  },
  {
    title: "Tools & Databases",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Docker", level: 70 },
    ],
  },
]
