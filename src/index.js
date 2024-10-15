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
      })
//diplay total votes
    const totalVotesSpan = document.querySelector('#vote-count')
    const totalVotes = item.votes + votes.votesCast
    totalVotesSpan.textContent = parseInt(item.votes)
    voteCount(item)
    }))
}
showCharacterNames()

function voteCount(item) {
    const enterVotes = document.querySelector('#votes-form')
    enterVotes.addEventListener('submit', (e)=>{
        const votes = {
          "votesCast": parseInt(e.target.name.value)
        }
        console.log(votes.votesCast)
    
    updateVotes(item)

    })
}


function updateVotes (item){
  fetch (`${baseUrl}/characters/${item.id}`, {
  method : 'PATCH',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(item)
  })
  .then(res =>res.json)
  .then(data => console.log(data))
}

//final








