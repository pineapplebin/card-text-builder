import type { DomainConstructorSettings } from './types'
import { resize } from './utils'

export const DEFAULT_SETTINGS: DomainConstructorSettings = {
  debug: false,
  width: resize(1500),
  height: resize(2100),
}
