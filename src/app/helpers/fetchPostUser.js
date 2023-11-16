const emailError = document.querySelector('.email')
const passwordError = document.querySelector('.password')
const modal = document.querySelector('.modal') || null
const btn = modal ? modal.querySelector('button') : null

export const validEmail = document.querySelector('input[name=email]')
export const form = document.querySelector('form')

export async function fetchPost(e, url) {

    e.preventDefault(e);
    const email = e.target.email.value;
    const password = e.target.password.value;

    emailError.textContent = ''
    passwordError.textContent = ''

    try {
        const data = await fetch(`/${url}`, {
            method:"POST",
            body:JSON.stringify({email,password}),
            headers:{"Content-Type":"application/json"}
        })

        const result = await data.json();

        if(result.errors) {
            emailError.textContent = result.errors.email;
            passwordError.textContent = result.errors.password;
        }

        if(result.user && url === 'login') {
          window.location.href = result.redirect
        }

        if(result.user && url === 'signup') {

           if(modal && btn) {
            modal.style.display = 'flex'
            btn.addEventListener('click', ()=> {
                modal.style.display = 'none',
                window.location.href = '/login'
            })
           }
            email.value = ''
            password.value = ''
            
        }

    }

    catch(err) {
        console.log(err)
    }
}