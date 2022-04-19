// json placeholder photos api loading
const loadingBtn = () => {
fetch ('https://jsonplaceholder.typicode.com/photos') 
.then (res => res.json ()) 
.then (data => display (data)) 
const display = (data) => {
    const display = document.getElementById ('dispaly')
    console.log (data)
   const data10 = data.slice (0 ,10)
    data10.forEach(element => {
       const div = document.createElement ('div') ;
       div.classList.add ('col') ;
        div.innerHTML = `<div>
        <h1> ID: ${element.albumId}  </h1>
        <img src = '${element.url}'> 
         <h2> TITLE: ${element.title} </h2>
        </div>`
        display.appendChild (div) ;
        console.log (    )
    });
} ;
}
