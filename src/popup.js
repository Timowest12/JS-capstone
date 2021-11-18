import commentCounter from './commentCounter';

const moviesurl = 'https://api.tvmaze.com/schedule/web?date=2020-05-29';
const body = document.querySelector('body');
const popUpCont = document.createElement('section');

body.appendChild(popUpCont);
popUpCont.classList.add('pop-up');

const addCommentToList = (userComment, id) => {
  const list = document.querySelector(`.comment-list-${id}`);

  const listItem = document.createElement('li');
  listItem.classList.add(`list-item-${id}`);

  listItem.innerHTML = `
          <p>${userComment.creation_date} ${userComment.username} ${userComment.comment}</p>
          `;

  list.appendChild(listItem);
};

const getComments = async (id) => {
  const request = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6osTugMui25VcqKgDEZF/comments?item_id=${id}`);
  const comments = await request.json();
  comments.forEach((comment) => {
    addCommentToList(comment, id);
  });
  commentCounter(id);
};

const postComment = async (id) => {
  const newComment = {
    item_id: id,
    username: document.getElementById(`username-${id}`).value,
    comment: document.getElementById(`insight-${id}`).value,
  };
  (await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6osTugMui25VcqKgDEZF/comments', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(newComment),
  })).json();
  getComments(id);
};

const postComments = () => {
  document.querySelectorAll('.addnew-btn').forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      postComment(elem.dataset.id);
      document.getElementById(`username-${elem.dataset.id}`).value = '';
      document.getElementById(`insight-${elem.dataset.id}`).value = '';
      document.querySelector(`.comment-list-${elem.dataset.id}`).innerHTML = '';
    });
  });
};

const closeModal = () => {
  document.querySelectorAll('.close-button').forEach((elem) => {
    elem.addEventListener('click', () => {
      document.querySelector(`#modal-pop-up-${elem.dataset.id}`).classList.remove('active');
      document.querySelector(`.comment-list-${elem.dataset.id}`).innerHTML = '';
    });
  });
};

const getmovie = () => {
  fetch(moviesurl)
    .then((response) => response.json())
    .then((movies) => movies.forEach((movie) => {
      if (movie.image != null && movie.rating.average != null) {
        popUpCont.innerHTML
    += `
    <div id="modal-pop-up-${movie.id}" class="modal-pop-up">
        <div class="cont-pop-up">
            <button data-id='${movie.id}' class="close-button">&times;</button>
            <img class="modal-pop-img" src="${movie.image.original}">
            <h2 class="movie-title">${movie.name}</h2>
            <div class="movie-info">
                <div class="movie-info1">
                    <p>Rating: ${movie.rating.average}</p>
                    <p>Type: ${movie.type}</p>
                </div>
                <div class="movie-info2">
                    <p>Runtime: ${movie.runtime}</p>
                    <p>Season: ${movie.season}</p>
                </div>
            </div>
            <h4 class="comment-${movie.id}"></h4>
            <ul class="comment-list-${movie.id} comment-list"></ul>
            <form class="comment-form">
                <h4>Add comment</h4>
                <input type="text" id="username-${movie.id}" class="username" placeholder="Your name"><br>
                <textarea type="text" id="insight-${movie.id}" class="insight" placeholder="Your insight"></textarea><br>
                <button type="submit" id="addnew" data-id='${movie.id}' class="addnew-btn">Comment</button>
            </form>
        </div>
    </div>`;
      }
    }))
    .then(() => {
      postComments();
      closeModal();
    });
};

export { getComments, postComment, getmovie };