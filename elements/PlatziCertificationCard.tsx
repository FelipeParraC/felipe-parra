import type { PlatziCertification } from "@/interfaces/types"
import { ShowcaseCertificationCard } from "./ShowcaseCertificationCard"

interface PlatziCertificationCardProps {
  certification: PlatziCertification
}

const PLATZI_IMAGE_POSITION = "50% 28%"

export function PlatziCertificationCard({ certification }: PlatziCertificationCardProps) {
  return (
    <ShowcaseCertificationCard
      certification={certification}
      theme="platzi"
      imagePosition={PLATZI_IMAGE_POSITION}
    />
  )
}
