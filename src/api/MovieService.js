import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "99ad62f26c36e1e3e4fc2912a27b25e5";

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
    static getMovies(){
        return axios(withBaseUrl("movie/popular"));
    }

    static getMovieDetails(id){
        return axios(withBaseUrl(`movie/${id}`));
    }

    static searchMovies(movieName){
        return axios(withBaseUrl("search/movie")+`&query=${movieName}`);
    }
}