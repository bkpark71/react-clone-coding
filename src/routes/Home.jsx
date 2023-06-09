import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
    state={
        isLoading:true,
        movies : [],
      }
    
    getMovies = async () => {
    const {
        data : {
        data : {movies},
        },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating)');
    
    //console.log(movies);
    this.setState({movies, isLoading:false}); // movies: movies 같을때는 축약 가능
    }
    
    componentDidMount(){ // 데이터 가져온 후 상태값 변경
    this.getMovies();
    }
    
    render() {
    const { isLoading, movies } = this.state;
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
}

export default Home;