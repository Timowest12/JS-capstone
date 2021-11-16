    const body = document.querySelector("body");
const popUpCont = document.createElement("section");

body.appendChild(popUpCont);

const userComment = movie.comments

document.querySelector('.work').innerHTML
    += `
    <div id="modal-pop-up-${index}" class="modal-pop-up">
        <div class="cont-pop-up">
            <button class="close-button">×</button>
            <img class="modal-pop-img" src="${movie.image}">
            <h2 class="movie-title">${movie.title}</h2>
            <div class="movie-info">
                <div class="movie-info1">
                    <p>Fuel: ${movie.fuel}</p>
                    <p>Weight: ${movie.weight}</p>
                </div>
                <div class="movie-info2">
                    <p>Length: ${movie.fuel}</p>
                    <p>Power: ${movie.weight}</p>
                </div>
            </div>
            <h4>Comments (${userComment.length})</h4>
            <ul class="comment-list"></ul>
            <form class="comment-form">
                <h4>Add comment</h4>
                <input type="text" id="username" placeholder="Your name"><br>
                <textarea type="text" id="insight" placeholder="Your insight"></textarea>
                <button type="submit" id="addnew">Comment</button>
            </form>
        </div>
    </div>`;


    const postUrl = 'https://www.notion.so/Involvement-API-869e60b5ad104603aa6db59e08150270#:~:text=https%3A//us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6osTugMui25VcqKgDEZF/comments';
    const getUrl = 'https://www.notion.so/Involvement-API-869e60b5ad104603aa6db59e08150270#:~:text=https%3A//us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6osTugMui25VcqKgDEZF/comments?item_id=item1';

const postComment = async () => {
  const newComment = {
    item_id: "item1",
    user: document.getElementById('username').value,
    score: document.getElementById('insight').value,
  };

  (await fetch(postUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newComment),
  })).json();
};

const addCommentToList = (userComment) => {
    const list = document.querySelector('.comment-list');
  
    const listItem = document.createElement('li');
  
    listItem.innerHTML = `
          <p>${userComment.creation_date} ${userComment.username} ${userComment.Comments}</p>
          `;
  
    list.appendChild(listItem);
  };

const displayComments = (comments) => {
  comments.forEach((comment) => addCommentToList(comment));
};

const getComments = async () => {
  const request = await fetch(getUrl);
  const comments = await request.json();
  let index = 0;
  comments.forEach(() => index++);
  displayComments(comments);
};

export { getComments, postComment };