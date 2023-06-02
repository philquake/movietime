import {useEffect, useState} from "react";

import MovieCard from './component/MovieCard.js'
import './App.css';
import SearchIcon from "./search.svg";
//db763ea3

const API_URL = "http://www.omdbapi.com?apikey=db763ea3"


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    /**
     * When the user types in the search box, the searchMovies function is called, which fetches the
     * data from the API and sets the movies state to the data that is returned.
     * @param title - The title of the movie you want to search for.
     */
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        
        setMovies(data.Search);
    }

    // useEffect(() => {
    //     searchMovies('Pacific Rim')
    // }, []);

    return (
        <div className="app">
            <h1>BlockGuster</h1>

           {/* This is the search bar. When the user clicks on the search icon, the searchMovies function is
           called, which fetches the data from the API and sets the movies state to the data that is
           returned. */}
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

           {/*Checking if the movies array is empty or not. If it is empty, it will display the "No
           Movies Found" message. If it is not empty, it will display the movies. */}
            {movies?.length > 0 
                ? (
                    <div className="containter">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ):(
                    <div class="empty">
                        <h2> No Movies Found</h2>
                    </div>
            )}
        </div>
    );
}

export default App;