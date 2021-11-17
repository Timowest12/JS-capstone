import './style.css';
import { getmovielist, getfromid,openModal } from './MoviesAPI.js'
import { getComments, postComment, getmovie } from './popup.js'

getmovielist();
getmovie();
