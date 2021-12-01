import React from 'react';
import { useState, useEffect } from 'react';
import Badge from '@mui/material/Badge';
import './Trending.css';
const Trending = () => {
  const [getData, setData] = useState([]);

  useEffect(() => {

  const fetchData = async () => {
   await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`)
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
      <h1>Trending movies</h1>
      <ul>
        {getData.map(movie => (
          <li className="trending-list" key={movie.id}>
            <Badge badgeContent={movie.vote_average} color="primary"
            sx={{
              fontSize: 1.25,
            }}
            >
              </Badge>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p>{movie.video ? `${movie.video}` : 'There is no video available'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trending;
