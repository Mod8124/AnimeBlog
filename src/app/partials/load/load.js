const logo = document.querySelector('.logo__logo');
const active = localStorage.getItem('active');
const fetchGetQuotes = require('../../helpers/fetchGetQuotes');

export const moon = document.querySelector('.moon');
const logoDarkPath = '/images/logoBlack.svg';
const logoPath = '/images/logo.svg';

export function handleDark() {
  document.body.classList.toggle('active');

  localStorage.setItem('active', true);

  if (document.body.classList.contains('active')) {
    logo.src = logoDarkPath;
  } else {
    logo.src = logoPath;
    localStorage.setItem('active', false);
  }
}

export async function handleLoad() {
  if (JSON.parse(active)) {
    document.body.classList.add('active');
    logo.src = logoDarkPath;
  } else {
    document.body.classList.remove('active');
    logo.src = logoPath;
  }

  await fetchGetQuotes();
}
