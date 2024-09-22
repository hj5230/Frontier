import UAParser from 'ua-parser-js'

import { useState, useEffect } from 'preact/hooks'

import { VisitorInfo } from '@typings/visitor_info'

export function useVisitorInfo() {
  const [visitorInfo, setVisitorInfo] = useState<
    VisitorInfo | undefined
  >(undefined)

  useEffect(() => {
    const parser = new UAParser()
    const result = parser.getResult()

    setVisitorInfo({
      userAgent: {
        browser: {
          name: result.browser.name,
          version: result.browser.version,
        },
        cpu_arch: result.cpu.architecture,
        device: {
          type: result.device.type,
          vendor: result.device.vendor,
          model: result.device.model,
        },
        engine: {
          name: result.engine.name,
          version: result.engine.version,
        },
        os: {
          name: result.os.name,
          version: result.os.version,
        },
      },
      window: {
        screenResolution: {
          width: window.screen.width,
          height: window.screen.height,
        },
        colorDepth: window.screen.colorDepth,
        pixelRatio: window.devicePixelRatio,
        touchSupport: 'ontouchstart' in window,
        timezone:
          Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      navigator: {
        language: navigator.language,
        cpuCores: navigator.hardwareConcurrency || 0,
      },
    })
  }, [])

  return visitorInfo
}
