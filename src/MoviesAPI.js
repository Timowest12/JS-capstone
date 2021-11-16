const moviesurl = 'https://api.tvmaze.com/schedule/web?date=2020-05-29';
const moviesoutput = document.querySelector('.showslist');
const openModal = () =>{
  document.querySelectorAll('.comments').forEach((elem) => {
    elem.addEventListener('click',() => {
      console.log(elem.dataset.id)
      document.querySelector('.modalidoutput').innerHTML = elem.dataset.id;
      document.querySelector('.modal').style.visibility = 'visible';
    })
  })
}
const getmovielist = () => {
    //moviesoutput.innerHTML = 'hello';
    fetch(moviesurl)
  .then(response => response.json())
  .then(data => data.forEach((row) => {
      if (row.image != null) {
          console.log(row)
          moviesoutput.innerHTML += `<div class='moviecard' data-id='${row.id}'><div class='imgblock'><img class='movieimage' src=${row.image.medium}></div><div class='infoblock'><div class='likesandname'><h3 class='movietitle'>${row.name}</h3><div> <span class="material-icons">favorite</span>
          
          </span>6 likes</div></div><div class='commentsandreservations'><button data-id='${row.id}' class='comments' type='button'>comments</button><button type='button'>reservations</button></div></div></div>`;
      }
  }))
  .then(() => {
    openModal();
  })
}
const getfromid = (id) => {

}
export { getmovielist, getfromid, openModal };