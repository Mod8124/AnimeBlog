const titleError = document.querySelector('.titleError')
const bodyError = document.querySelector(".bodyError")
const imageError = document.querySelector('.imageError')
export const form = document.querySelector('form')

export async function fetchPostImage (e){
    e.preventDefault();

    const formData = new FormData(this)
    try {
        const data = await fetch('/blogs',{
            method:"POST",
            body:formData
        })
        const result = await data.json()

       if(result.errors) {
        titleError.innerHTML = result.errors.title
        bodyError.innerHTML = result.errors.body
        imageError.innerHTML = result.errors.img
       }

       if(result.location)
       window.location.href = result.location
    }
    catch(err) {
        console.log(err)
    }

}