import { fetchGetQuotes } from "../../helpers/fetchGetQuotes.js"
import {fetchPostImage, form} from '../../helpers/fetchPostImage.js'
import { handleDark, handleLoad, moon } from "../../partials/load/load.js"

fetchGetQuotes()

moon.addEventListener('click', handleDark)
window.addEventListener('load', handleLoad)

form.addEventListener('submit', fetchPostImage)

