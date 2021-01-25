const BASE_URL = 'http://localhost:3001/api';

function getVideoGames() {
    return fetch(BASE_URL).then(res => res.json());
};

export {
    getVideoGames
};