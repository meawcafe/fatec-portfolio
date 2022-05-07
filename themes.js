let themes = [
  'white-mode',
  'dark-mode',
  'high-contrast'
]

let actual_theme = 1

function toggleTheme(el) {
  actual_theme = actual_theme+1 > themes.length ? 1 : actual_theme+1

  document.documentElement.classList = ''

  document.documentElement.classList.add(`${themes[actual_theme-1]}`)

  el.innerHTML = themes[actual_theme-1].replace('-', ' ')

  if (themes[actual_theme-1] == 'high-contrast') {
    document.getElementById('sidebar-social').classList.add('high-contrast-image')
  } else {
    document.getElementById('sidebar-social').classList.remove('high-contrast-image')
  }
}