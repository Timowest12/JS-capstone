import './style.css';
import {
  getmovielist, getfromid, openModal, updatelikes, postlike,
} from './MoviesAPI.js';
import { getComments, postComment, getmovie } from './popup.js';

getmovielist();
getmovie();
