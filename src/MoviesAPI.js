const moviesurl = 'https://api.tvmaze.com/schedule/web?date=2020-05-29';
const moviesoutput = document.querySelector('.showslist');
import { getComments, postComment, getmovie } from './popup.js'

const openModal = () =>{
  document.querySelectorAll('.comments').forEach((elem) => {
    elem.addEventListener('click',() => {
      document.querySelector(`#modal-pop-up-${elem.dataset.id}`).classList.add('active');
    getComments(elem.dataset.id);
    })
  })
}
const getmovielist = () => {
    //moviesoutput.innerHTML = 'hello';
    fetch(moviesurl)
  .then(response => response.json())
  .then(data => data.forEach((row) => {
      if (row.image != null && row.rating.average != null) {
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