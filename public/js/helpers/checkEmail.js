export function checkEmail(e) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(e.target.value.match(regexEmail)) {
      e.target.classList.add('check')
  } else {
      e.target.classList.remove('check')
  }
}