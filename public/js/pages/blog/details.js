import { fetchPostComment, formComment } from "../../helpers/fetchPostComment.js";
import { fetchUpdateAndDelete, formEdit } from "../../helpers/fetchUpdateAndDelete.js";
import { handleDark, handleLoad, moon } from "../../partials/load/load.js"
import { fetchGetQuotes } from "../../helpers/fetchGetQuotes.js"

fetchGetQuotes()

moon.addEventListener('click', handleDark)
window.addEventListener('load', handleLoad)

formComment.addEventListener('submit', fetchPostComment)
formEdit.addEventListener('submit', fetchUpdateAndDelete)
