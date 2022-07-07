import { handleDark, handleLoad, moon } from "../../partials/load/load.js"
moon.addEventListener('click', handleDark)
window.addEventListener('load', handleLoad)
import { fetchGetQuotes } from "../../helpers/fetchGetQuotes.js"
import {fetchPostImage, form} from '../../helpers/fetchPostImage.js'

fetchGetQuotes()

form.addEventListener('submit', fetchPostImage)

