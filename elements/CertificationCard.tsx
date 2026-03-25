import type { Certification } from "@/interfaces/types"
import { ShowcaseCertificationCard } from "./ShowcaseCertificationCard"

interface CertificationCardProps {
  certification: Certification
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return <ShowcaseCertificationCard certification={certification} theme="default" compactMobileHeight />
}
