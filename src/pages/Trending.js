import React from 'react';
import { useState, useEffect } from 'react';

const Trending = () => {
  const [getData, setData] = useState([]);

  useEffect(() => {

  const fetchData = async () => {
   await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => { 
          setData(data.results);
          console.log(data)
        })
      .catch(error => console.log(error));
    };

    fetchData();
    
  }, []);

  return (
    <div className="App">
      <ul>
        {getData.map(movie => (
          <li key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trending;
