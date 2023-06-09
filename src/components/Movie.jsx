import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({id, title, year, summary , poster, genres }){
  return (
    <div>
        <Link to={{
          pathname: '/movie-detail',
          state: { year, title, summary, poster, genres },
          }}
        >
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
            <h3 style={{backgroundColor:'red'}} className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
              {genres.map((genre,index) => {
                return (
                <li key={index} className="movie__genre">{genre}</li>
                );
              })}
            </ul>
            <p className="movie__summary">{summary.slice(0,180)}...</p>        
        </div>
      </Link>
    </div>
    
    );
}

export default Movie;