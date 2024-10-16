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
        const charactersName = document.querySelector('#name')
        charactersName.textContent=item.name
        voteCount(item)
      })
//diplay total votes
    
    
    }))
}
showCharacterNames()

function voteCount(item) {
    const enterVotes = document.querySelector('#votes-form')
    enterVotes.addEventListener('submit', (e)=>{
        e.preventDefault()
        const votes = {
          "votesCast": parseInt(e.target.votes.value) + parseInt(item.votes)
        }
        const totalVotesSpan = document.querySelector('#vote-count')
        let totalVotes = votes.votesCast
        console.log(totalVotes)
        totalVotesSpan.textContent = votes.votesCast
    
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








