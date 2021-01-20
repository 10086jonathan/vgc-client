const BASE_URL = 'https://api.rawg.io/api/';
const API_KEY = 'ff9015363eee4b99a8e3062ea9df8607';


// games?key=YOUR_API_KEY

export function getVideoGames() {
    return fetch(BASE_URL + 'games?key=' + API_KEY + '&dates=2020-01-01,2020-12-31').then(res => res.json());
}