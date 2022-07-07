import { handleDark, handleLoad, moon } from "../partials/load/load.js";

moon.addEventListener('click', handleDark)
window.addEventListener('load', handleLoad)

import { checkEmail } from "../helpers/checkEmail.js";
import { fetchPost, form, validEmail } from "../helpers/fetchPostUser.js";

validEmail.addEventListener('input', checkEmail)
form.addEventListener('submit', (e)=> fetchPost(e, 'login'))
