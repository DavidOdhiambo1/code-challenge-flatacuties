// Your code here
//show characters names here

const baseUrl = "http://localhost:3000"

function showCharacterNames() {
    fetch ( `${baseUrl}/characters`)
    .then((response) => response.json())
    .then(data => {characterDetails = data})

}
showCharacterNames()

let characterDetails
const characterDiv = document.getElementById("character-bar")

fetch ( `${baseUrl}/characters`, {
    method : "GET"
})
.then((response) => response.json())
.then(data => {characterDetails = data})


.then(()=>console.log(characterDetails[0]))




