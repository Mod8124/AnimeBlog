import { handleDark, handleLoad, moon } from '../../partials/load/load.js';

import { fetchPostComment, formComment } from '../../helpers/fetchPostComment.js';
import { fetchUpdateAndDelete, formEdit } from '../../helpers/fetchUpdateAndDelete.js';

moon.addEventListener('click', handleDark);

formComment.addEventListener('submit', fetchPostComment);
formEdit.addEventListener('submit', fetchUpdateAndDelete);

window.addEventListener('load', handleLoad);
