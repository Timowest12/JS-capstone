const movieCounter = () => {
  const movie = document.querySelectorAll('.moviecard');
  const counts = document.querySelector('.counter');
  if (movie) {
    counts.innerHTML = `${movie.length}`;
  } else {
    counts.innerHTML = '0';
  }
};

export default movieCounter;