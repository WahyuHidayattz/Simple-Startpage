//  ┌┬┐┬ ┬┌─┐┌┬┐┌─┐
//  │ ├─┤├┤ │││├┤
//  ┴ ┴ ┴└─┘┴ ┴└─┘
// Set theme based on Configurations and Preferences

let darkTheme = localStorage.getItem('darkTheme');
const themeToggle = document.querySelector('#themeButton');

const enableDark = () => {
  document.body.classList.add('dark');
  localStorage.setItem('darkTheme', 'enabled');
};

const disableDark = () => {
  document.body.classList.remove('dark');
  localStorage.setItem('darkTheme', null);
};

if (darkTheme === 'enabled') {
  document.body.classList.add('notransition');
  enableDark();
  document.body.classList.remove('notransition');
} else {
  disableDark();
}

themeToggle.addEventListener('click', () => {
  darkTheme = localStorage.getItem('darkTheme');
  if (darkTheme !== 'enabled') {
    enableDark();
  } else {
    disableDark();
  }
});
