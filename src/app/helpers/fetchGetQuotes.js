const URL = 'https://animechan.xyz/api/random';

export const fetchGetQuotes = async () => {
  try {
    const data = await fetch(URL);
    const result = await data.json();

    const { quote, character } = result;
    document.querySelector('p').innerHTML = '"' + quote + '"';
    document.querySelector('h4').innerHTML = '~' + character;
    return result;
  } catch (err) {
    return err;
  }
};
