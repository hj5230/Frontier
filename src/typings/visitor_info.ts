interface UserAgentInfo {
  browser: {
    name: string
    version: string
  }
  cpu_arch: string
  device: {
    type: string
    vendor: string
    model: string
  }
  engine: {
    name: string
    version: string
  }
  os: {
    name: string
    version: string
  }
}

interface WindowInfo {
  screenResolution: {
    width: number
    height: number
  }
  colorDepth: number
  pixelRatio: number
  touchSupport: boolean
  timezone: string
}

interface NavigatorInfo {
  // networkType: string
  language: string
  // memory: string
  cpuCores: number
}

export interface VisitorInfo {
  userAgent: UserAgentInfo
  window: WindowInfo
  navigator: NavigatorInfo
}
