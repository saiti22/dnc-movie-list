import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService";

const Home = () => {
    const [movies, setMovies] = useState([])

    async function getMovies(){
        const {data: {results}} = await MovieService.getMovies();
        
        setMovies(results);
    }

    useEffect(() => {      
        getMovies();
    },[])

    useEffect(() => {
        console.log(movies);
    })    

  return (
    <section className="Home">
        {
            movies.map(({id, title, vote_average}) => (
                <div key={id}>
                    <h1>{title}</h1>
                    <h2>{vote_average}</h2>
                </div>
            ))
        }
    </section>
  )
}

export default Home