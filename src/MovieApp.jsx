import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./components/Movie";
import './App.css';

function MovieApp(){

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const { // 구조분해 할당
          data : {
            data : {movies},
          },
        } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating)');
       
        //console.log(movies);
        setMovies(movies); 
        setIsLoading(false);
      }

 
    useEffect(() =>{
        getMovies();
        console.log("movie loading finished")
    }, []);

    return (
        <section className="container">
            {isLoading ? 
            (
            <div className="loader">
                <span className="loader__text">Loading중...</span>
            </div>
            )
            : 
            (
            <div className="movies">
                { movies.map(movie => (
                <Movie 
                key = {movie.id}
                id = {movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres} />
                ))}
            </div>   
            )}
        </section>
    );
}

export default MovieApp;