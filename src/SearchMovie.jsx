import { useState } from "react";
import Movie from "./Movie";

export default function SearchMovies(){

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovie = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=7092aa45ca0fadbd5c68a939f0543272&language=en-US&query=${query}&page=1&include_adult=false`

        try {
            const res = await fetch(url);
            const data = await res.json()
            console.log(data)
            setMovies(data.results)
        } catch(err) {
            console.error(err);
        }
    }


    return (
        <>
        <form className="form" onSubmit={searchMovie}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="RRR" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className="button" type="submit">Search</button>
        </form>
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map( movie => (
                
                  <Movie movie={movie} key={movie.id} />

            ))}

        </div>


        </>
    )
}
