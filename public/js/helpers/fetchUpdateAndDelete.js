export const formEdit = document.querySelector('.editDetail form')
const modalDelete = document.querySelector('.modalDelete')

export async function fetchUpdateAndDelete (e) {

    e.preventDefault();

    const formData = new FormData(this)
    const {id} = e.target.dataset

   if(e.submitter.classList.contains('btnEdit')) {

            try {
                        const data = await fetch(`/blogs/update/${id}`, {
                          method:"PUT",
                          body:formData
                       })
                          const result = await data.json()
                          if(result.location) {
                              window.location.href = result.location
                          }      
                }

            catch(err) {
                console.log(err)
            }

   } else {
            try {

             modalDelete.style.display = "flex";
             modalDelete.addEventListener('click', async (e)=> {

               if(e.target.localName !== 'button') return

                if(e.target.innerHTML === 'Cancel') {

                     modalDelete.style.display = 'none'

                } else {

                    modalDelete.style.display = 'none'
                    const data = await fetch(`/blogs/${id}`, {
                      method:"DELETE",
                    })

                      const result = await data.json();

                      if(result.location) {
                         window.location.href = result.location;
                      }   
                }
             })
               
            } 
            catch(err) {
                console.log(err)
            }
    }
}