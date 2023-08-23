import { StaticImageData } from 'next/image'

export interface Projects {
  name: string,
  techStack: string[],
  description: string,
  img: StaticImageData,
  repoURL: string
}