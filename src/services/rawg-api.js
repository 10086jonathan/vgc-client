// const BASE_URL = 'http://localhost:3001/api'; development url
const BASE_URL = 'https://video-game-central-api.herokuapp.com/api';

function getVideoGames() {
    return fetch(BASE_URL).then(res => res.json());
};

export {
    getVideoGames
};