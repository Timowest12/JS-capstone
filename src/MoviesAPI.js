const moviesurl = 'https://api.tvmaze.com/schedule/web?date=2020-05-29';
const moviesoutput = document.querySelector('.showslist');
const getmovielist = () => {
    //moviesoutput.innerHTML = 'hello';
    fetch(moviesurl)
  .then(response => response.json())
  .then(data => data.forEach((row) => {
      if (row.image != null) {
          console.log(row)
          moviesoutput.innerHTML += `<div class='moviecard' data-id='${row.id}'><div class='imgblock'><img class='movieimage' src=${row.image.medium}></div><div class='infoblock'><div class='likesandname'><h3 class='movietitle'>${row.name}</h3><div>6 likes</div></div><div class='commentsandreservations'><button type='button'>comments</button><button type='button'>reservations</button></div></div></div>`;
      }
  }));
}
const getfromid = (id) => {

}
export { getmovielist, getfromid };