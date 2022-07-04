export const fetchGetQuotes = async () => {
    try {
        const data = await fetch('https://animechan.vercel.app/api/random')
        const result = await data.json()
            document.querySelector('p').innerHTML = "\"" +result.quote + "\"";
            document.querySelector('h4').innerHTML = "~" + result.character
        return result
    }
    catch(err) {
        console.log(err)
    }
   
}
