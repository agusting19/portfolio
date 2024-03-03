export type Locales = "en-US" | "es-ES"

export interface Dictionary {
  component: Component
  page: Page
}

export interface Component {
  presentation: Presentation
  experience: Experience
  projects: Projects
}

export interface Presentation {
  title: string
  subTitle: string
  downloadCv: string
  altPhoto: string
}

export interface Experience {
  experience: string
  jobExperiences: JobExperience[]
  education: string
  educationDetails: EducationDetail[]
  certifications: string
  certificationsDetails: CertificationsDetail[]
}

export interface JobExperience {
  jobTitle: string
  company: string
  period: string
  techs: string[]
}

export interface EducationDetail {
  title: string
  institution: string
  period: string
}

export interface CertificationsDetail {
  title: string
  institution: string
  period: string
}

export interface Projects {
  title: string
  projectsList: ProjectsList[]
}

export interface ProjectsList {
  title: string
  description: string
  techs: string[]
}

export interface Page {}
