import axios from "axios";

const key = '48423afbcec9794853490a43db2c146c';
const baseUrl = 'https://api.themoviedb.org/3';
export const movieService = {

    getAllMoviesByPage: (page) =>
        axios.get(baseUrl + '/search/movie?api_key=' + key + '&language=en-US&query=man&page=' + page + '&include_adult=false')
    ,
    getByGenre: (genre, page) =>
        axios.get(baseUrl + '/discover/movie?api_key=' + key + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=' + page + '&with_genres=' + genre + '&with_watch_monetization_types=flatrate'),
    getById: (id) =>
        axios.get(baseUrl + '/movie/' + id + '?api_key=' + key + '&language=en-US'),
    getByWord: (word, page) =>
        axios.get(baseUrl + '/search/movie?api_key=' + key + '&query=' + word + '&page=' + page),
    getUpcoming: (page) =>
        axios.get(baseUrl + '/movie/upcoming?api_key=' + key + '&language=en-US&page=' + page)


};