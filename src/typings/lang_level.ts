import { z } from 'zod'

export enum LangLevel {
  BASIC = 1,
  INTERMEDIATE = 2,
  ADVANCED = 3,
  NATIVE = 4,
}

export const LangLevelSchema = z.nativeEnum(LangLevel)
