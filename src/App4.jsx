import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import './App.css';

//클래스 컴포넌트를 함수형 컴포넌트로 변경하는 방법
//https://nimblewebdeveloper.com/blog/convert-react-class-to-function-component
function App4(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data : {
      data : {movies},
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating)');
   
    setIsLoading(false);
    setMovies(movies);
    console.log(movies);
  }

  useEffect(() =>{
    getMovies();
    console.log("movie loading finished")
  }, []);

  return (
    <section className="container">
        {isLoading ? 
        (<div className="loader">
            <span className="loader__text">Loading중...</span>
        </div>)
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

export default App4;
