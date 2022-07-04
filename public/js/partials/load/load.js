const logo = document.querySelector('.logo__logo') || null
let active = localStorage.getItem('active')

export const moon = document.querySelector('.moon')

export function handleDark () {
    document.body.classList.toggle('active')

    localStorage.setItem('active', true)

    if(document.body.classList.contains('active')) {
      
        if(logo) {
            logo.src = '/images/logoBlack.svg'
        }

    } else {
        
        if(logo) {
            logo.src = '/images/logo.svg';
        }

        localStorage.setItem('active', false)
    }
}

export function handleLoad() {

    if(JSON.parse(active)) {
        document.body.classList.add('active')
        if(logo) {
            logo.src = '/images/logoBlack.svg'
        }
    } else {
        document.body.classList.remove('active')
        
        if(logo) {
            logo.src = '/images/logo.svg';
        }
    }
}


