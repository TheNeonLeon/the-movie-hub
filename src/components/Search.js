import React from 'react';
import { useState, useEffect } from 'react';
import './Search.css';
import { Badge } from '@mui/material';
const SearchShows = () => {
    const [getData, setData] = useState([]);
    const [input, setInput] = useState('');
    const [display, setDisplay] = useState(false);

    const toggleDisplay = () => {
        display ? setDisplay(false) : setDisplay(true);
    }

    useEffect(() => {

    //Fetch data from api to the state

    const getMovie = async (input) => {
        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${input || 'a'}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
            setData(data.results)
            
            console.log('search results:', data)
        })
        .catch(err => console.log(err))
    }

    
     getMovie(input);    

    }, [input])



  return (
    <div className="App">

        {/* Track the value of input elements with onChange event */}
        <input placeholder="search..." type="text"  onClick={toggleDisplay} onChange={(e) => setInput(e.target.value)}></input>
        <ul>
        {getData.map(movie => (
            <li key={movie.id}>
                <Badge badgeContent={movie.vote_average} color="primary"
            sx={{
              fontSize: 1.25,
            }}
            >
              </Badge>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>

            </li>
                ))}
        </ul>
    </div>
  );
}

export default SearchShows;
