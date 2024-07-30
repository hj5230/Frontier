import { Color } from '@typings/color'

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
  description: string
  link: string
  image_uri: string
}

export interface HomeDefinition {
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
  github_repo: string
}
