const app_definition = {
  path: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Resume',
      path: '/resume',
    },
    {
      name: 'Projects',
      path: '/projects',
    },
    {
      name: 'Experience',
      path: '/experience',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ],
  defaultThemeColor: 'indigo',
  defaultAppearance: 'light',
  $error_title: 'Oops! Something went wrong',
  $error_description:
    'If the problem persists: Please check your internet connection, avoid using network proxies if possible, and ensure your system time is accurate. Access may be denied for certain regions or blacklisted IP addresses.',
  $error_redirect: 'Redirecting to homepage in $ seconds',
}

export default app_definition
