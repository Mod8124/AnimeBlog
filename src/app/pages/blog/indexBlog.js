import { handleDark, handleLoad, moon } from '../../partials/load/load.js';
import { fetchPostImage, form } from '../../helpers/fetchPostImage.js';

moon.addEventListener('click', handleDark);

form.addEventListener('submit', fetchPostImage);

window.addEventListener('load', handleLoad);
