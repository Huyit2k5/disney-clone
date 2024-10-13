import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "626ad67ed0ef268681e9831126432f6f";
const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=626ad67ed0ef268681e9831126432f6f'
// https://api.themoviedb.org/3/trending/all/day?api_key=626ad67ed0ef268681e9831126432f6f
const getTrendingVideo = axios.get(movieBaseUrl+"/trending/all/day?api_key=" + api_key);
const getMovieByGenreId = (id) => axios.get(movieByGenreBaseURL + "&with_genres=" + id);
export default {
    getTrendingVideo,
    getMovieByGenreId
}