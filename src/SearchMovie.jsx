import React from "react";

export default function SearchMovies(){

    const searchMovie = async (e) => {
        e.preventDefault();

        const query = "Bahuballi";

        const url = `https://api.themoviedb.org/3/search/movie?api_key=7092aa45ca0fadbd5c68a939f0543272&language=en-US&query=${query}&page=1&include_adult=false`

        try {
            const res = await fetch(url);
            const data = await res.json()
            console.log(data)
        } catch(err) {
            console.error(err);
        }
    }


    return (
        <form className="form" onSubmit={searchMovie}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}