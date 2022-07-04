import { handleDark, handleLoad, moon } from "../partials/load/load.js";
import { checkEmail } from "../helpers/checkEmail.js";
import { fetchPost, form, validEmail } from "../helpers/fetchPostUser.js";

validEmail.addEventListener('input', checkEmail)
form.addEventListener('submit', (e)=> fetchPost(e, 'signup'))

moon.addEventListener('click', handleDark)
window.addEventListener('load', handleLoad) 