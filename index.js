
// function myFunction(){
//  fetch('https://www.omdbapi.com/?i=tt3896198&apikey=a66d1b5d')
//   .then((response) => response.json())
//   .then(data=>
//     console.log(data)
//     const Div=document.getElementById('movie');
//     const h3=document.createElement('h3')
//     h3.innerHTML=`Movie Title ${data.title}`
//     Div.appendChild
//   )}

function myFunction(){
  fetch("https://www.omdbapi.com/?i=tt3896198&apikey=a66d1b5d")
  .then((res)=>{
   return res.json()
  }).then((data)=>{
    console.log(data)
    const Div=document.getElementById("movie")
    const Image=document.createElement("img")
    Image.setAttribute("src","https://img.omdbapi.com/?i=tt3896198&apikey=a66d1b5d")
    Div.appendChild(Image)
    const h1=document.createElement("h1")
    h1.innerText=`Movie Title ${data.Title}`
    Div.appendChild(h1)
    const p=document.createElement("p")
    p.innerText=`Year ${data.Year}`
    Div.appendChild(p)
    const h2=document.createElement("h2")
    h2.innerText=`IMDB rating ${data.imdbRating}`
    Div.appendChild(h2)
    const h3=document.createElement("h3")
    h3.innerText=`Actor ${data.Actors}`
    Div.appendChild(h3)
    const p1=document.createElement("p")
    p1.innerText=`Awards ${data.Awards}`
    Div.appendChild(p1)
  })
}