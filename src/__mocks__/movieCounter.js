const movieCounter = () => {
    document.body.innerHTML = `
    <span>movies(<span class='counter'></span>)</span>
        <div class="container">
        <div class="showslist"></div>`;
  
    const movieList = document.querySelector('.showslist');
    const movie = document.createElement('div');
    const movie2 = document.createElement('div');
    movie.textContent = 'one';
    movie2.textContent = 'two';
    movieList.appendChild(movie);
    movieList.appendChild(movie2);
    const movieArr = Array.from(document.querySelectorAll('.showslist div'));
    if (movieArr) {
      const movietext = `(${movieArr.length})`;
      return movietext;
    } else {
      return '(0)';
    }
  };
  
  export default movieCounter;