interface NavigatorItem {
  name: string
  path: string
}

export interface NavbarDefinition {
  site_icon_uri: string
  navigator_items: NavigatorItem[]
}
