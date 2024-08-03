import { Color } from '@typings/color'
import { LangLevel } from '@typings/lang_level'

interface Badge {
  text: string
  color: Color
}

interface Experience {
  title: string
  period: string
  description: string[]
}

interface Project {
  title: string
  description: string[]
  link: string
  image_uri: string
}

export interface Definition {
  avatar_uri: string
  name: string
  intro: string
  _about_me: string
  about_me: string
  _experience: string
  badges: Badge[]
  experience: Experience[]
  _project: string
  project: Project[]
  _contact: string
  _phone: string
  phone: string[]
  _email: string
  email: string
  _wechat: string
  wechat: string
  github: string
  _langlever: {
    basic: string
    intermediate: string
    advanced: string
    native: string
  }
}

interface Education {
  institution: string
  period: string
  degree: string
  comment?: string
  themeColor?: Color
}

interface Work {
  company: string
  department: string
  role: string
  period: string
  description: string[]
  comment?: string
  themeColor?: Color
}

interface TechStack {
  title: string
  description: string
  comment?: string
  themeColor?: Color
}

interface Language {
  lang: string
  level: LangLevel
  comment?: string
  themeColor?: Color
}

export interface ResumeDefinition {
  _education: string
  education: Education[]
  education_keywords?: Badge[]
  _work: string
  work: Work[]
  work_keywords?: Badge[]
  _tech_stack: string
  tech_stack: TechStack[]
  _language: string
  language: Language[]
  language_keywords?: Badge[]
}

interface RProject {
  name: string
  period: string
  description: string[]
  media_uri: string
  comment?: string
  keywords?: Badge[]
}

export interface ProjectDefinition {
  _project: string
  project: RProject[]
}

interface NavigatorItem {
  name: string
  path: string
}

export interface NavbarDefinition {
  site_icon_uri: string
  navigator_items: NavigatorItem[]
}
