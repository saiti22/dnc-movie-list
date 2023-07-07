import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService";
import MovieCard from "../../components/MovieCard/MovieCard";

const Home = ({searchValueProp}) => {
    const [movies, setMovies] = useState([])

    async function getMovies(){
        const {data: {results}} = await MovieService.getMovies();
        
        setMovies(results);
    }

    async function getMovieSearch(movieName){
        const {data: {results}} = await MovieService.searchMovies(movieName);

        setMovies(results);
    }

    useEffect(() => {      
        getMovies();
    },[])

    useEffect(() => {
        if(searchValueProp){
            getMovieSearch(searchValueProp);
        }else{
            getMovies();
        }
    },[searchValueProp])    

  return (
    <section className="Home">
        {
            movies.map((movie) => (
                <div key={movie.id}>
                    <MovieCard movieProp={movie}/>
                </div>
            ))
        }
    </section>
  )
}

export default Home