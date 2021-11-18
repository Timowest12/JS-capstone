import movieCounter from './movieCounter.js';
import { getComments, postComment, getmovie } from './popup.js';// eslint-disable-line

const moviesurl = 'https://api.tvmaze.com/schedule/web?date=2020-05-29';
const moviesoutput = document.querySelector('.showslist');

const openModal = () => {
  document.querySelectorAll('.comments').forEach((elem) => {
    elem.addEventListener('click', () => {
      document.querySelector(`#modal-pop-up-${elem.dataset.id}`).classList.add('active');
      getComments(elem.dataset.id);
    });
  });
};
const updatelikes = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6osTugMui25VcqKgDEZF/likes?item_id=${id}`);
  const data = await response.json();
  data.shift();
  document.querySelectorAll('.likesoutput').forEach((elem) => {
    const found = data.find((element) => element.item_id === elem.dataset.id);
    if (found !== undefined) {
      elem.innerHTML = found.likes;
    } else {
      elem.innerHTML = 0;
    }
  });
};
const getmovielist = () => {
  // moviesoutput.innerHTML = 'hello';
  fetch(moviesurl)
    .then((response) => response.json())
    .then((data) => data.forEach((row) => {
      if (row.image != null && row.rating.average != null) {
        moviesoutput.innerHTML += `<div class='moviecard' data-id='${row.id}'><div class='imgblock'><img class='movieimage' src=${row.image.medium}></div><div class='infoblock'><div class='likesandname'><h3 class='movietitle'>${row.name}</h3><div> <span data-id=${row.id} class="material-icons heart">favorite</span>
          
          <span><span data-id='${row.id}' class='likesoutput'>0</span> likes</span></div></div><div class='commentsandreservations'><button data-id='${row.id}' class='comments' type='button'>comments</button><button type='button'>reservations</button></div></div></div>`;
      }
    }))
    .then(() => {
      openModal();

      document.querySelectorAll('.heart').forEach((elem) => {
        elem.addEventListener('click', () => { postlike(elem.dataset.id); });// eslint-disable-line
      });
      updatelikes();
      movieCounter();
    });
};

const postlike = (id) => {
  const data = { item_id: id };

  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6osTugMui25VcqKgDEZF/likes', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .then(getmovielist());
};

export {
  getmovielist, openModal, updatelikes, postlike,
};