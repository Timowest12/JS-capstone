const commentCounter = () => {
  document.body.innerHTML = `
  <h4 class="comment"></h4>
  <ul class="comment-list">
  </ul>`;

  const commentList = document.querySelector('.comment-list');
  const listItem = document.createElement('li');
  const listItem2 = document.createElement('li');
  listItem.textContent = 'one';
  listItem2.textContent = 'two';
  commentList.appendChild(listItem);
  commentList.appendChild(listItem2);
  const commentArr = Array.from(document.querySelectorAll('.comment-list li'));
  if (commentArr) {
    const commenttext = `Comments (${commentArr.length})`;
    return commenttext;
  }
  return 'Comments (0)';
};

export default commentCounter;