const toggleSwitchRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const storedThemeKeyRef = localStorage.getItem('theme-color');

toggleSwitchRef.addEventListener('change', toggleSwitchChange);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

toggleSwitchRef.checked = storedThemeKeyRef === Theme.DARK ? true : false;

storedThemeKeyRef
  ? bodyRef.classList.add(storedThemeKeyRef)
  : bodyRef.classList.add(Theme.LIGHT);

function toggleSwitchChange(e) {
  const theme = toggleSwitchRef.checked ? Theme.DARK : Theme.LIGHT;
  localStorage.setItem('theme-color', theme);

  if (bodyRef.classList.contains(Theme.DARK)) {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
  } else if (bodyRef.classList.contains(Theme.LIGHT)) {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
  }
}
