// Your code here
//show characters names 

const baseUrl = "http://localhost:3000"

function showCharacterNames() {
    const characterDiv = document.getElementById("character-bar")
    fetch (`${baseUrl}/characters`)
    .then((response) => response.json())
    .then(data => data.forEach((item)=>{
      const span = document.createElement('span')
      span.textContent = item.name
      characterDiv.appendChild(span)
//display character image
      span.addEventListener("click", ()=>{
        const image = document.querySelector('img')
        image.src = item.image
        console.log(image.src)
      })
    }))
}
showCharacterNames()








