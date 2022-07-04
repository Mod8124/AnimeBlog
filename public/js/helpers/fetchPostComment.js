export const formComment = document.querySelector('#commentForm');

export const fetchPostComment = async (e)=> {

    e.preventDefault()

    const comments = formComment.comments.value;
    const {email, id} = e.target.dataset

    try {
       if(comments) {
        const data = await fetch(`/blogs/comments/${id}`, {
           method:"PUT",
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify({comments}),
       })
       const result = await data.json();
          document.querySelector('.modifyComment').innerHTML = `${comments}`
          document.querySelector('.modifyEmail').innerHTML = `${email} :`
       }
    }
    catch(err) {
        console.log(err)
    }
}