export function getSystemTheme() {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const theme = isDark ? 'dark' : 'light'
  return theme
}
