import { useState, useEffect, useRef } from 'react';

const BASE_URL = 'http://localhost:3001/api'; // development url
// const BASE_URL = 'https://video-game-central-api.herokuapp.com/api';

function Search(props) {

    const [ query, setQuery ] = useState('');

    const focusSearch = useRef(null);

    // useEffect(() => {
    //     focusSearch.current.focus()
    // }, [])

    async function searchGames(query) {
        const results = await fetch(`${BASE_URL}&search=${query}`)
    }


    return (
        <div className="container">
            <h3 className="heading">Search</h3>
            <label className="search-label" htmlFor="search-input">
                <input
                    type="text"
                    value=""
                    id="search-input"
                    placeholder="Search..."
                    
                />
                <button>Search</button>
            </label>
        </div>
    )
}

export default Search;