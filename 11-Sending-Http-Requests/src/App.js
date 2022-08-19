import React,{useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const movieHandler = useCallback(async () => {
   setIsLoading(true);
   setError(null);

   try{
    const response = await fetch('https://swapi.dev/api/films');
    if(!response.ok){
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    const getMovieDetails = data.results.map(movieData => {
         return {
           id: movieData.episode_id,
           title: movieData.title,
           openingText: movieData.opening_crawl,
           releaseDate: movieData.release_date
         }
       })
       setMovies(getMovieDetails);
    
   }catch(error){
        setError(error.message);
   }
  
   setIsLoading(false);
  },[]);

  useEffect(()=>{
    movieHandler();
  },[movieHandler])

  let content =  <p>No Movies Found</p>;

  if(isLoading){
    content =  <><p>Loading...</p> <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"/></>;
  }

  if(error){
    content =  <p>{error}</p>;
  }

  if(movies.length>0){
    content =  <MoviesList movies={movies} />;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={movieHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
