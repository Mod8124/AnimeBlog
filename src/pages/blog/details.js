import { handleDark, handleLoad, moon } from "../../partials/load/load.js"

moon.addEventListener('click', handleDark)
window.addEventListener('load', handleLoad)

import { fetchPostComment, formComment } from "../../helpers/fetchPostComment.js";
import { fetchUpdateAndDelete, formEdit } from "../../helpers/fetchUpdateAndDelete.js";
import { fetchGetQuotes } from "../../helpers/fetchGetQuotes.js"

fetchGetQuotes()

formComment.addEventListener('submit', fetchPostComment)
formEdit.addEventListener('submit', fetchUpdateAndDelete)
