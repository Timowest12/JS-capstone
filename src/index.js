import './style.css';
import {
  getmovielist, openModal, updatelikes, postlike,// eslint-disable-line
} from './MoviesAPI.js';
import { getComments, postComment, getmovie } from './popup.js';// eslint-disable-line

getmovielist();
getmovie();
