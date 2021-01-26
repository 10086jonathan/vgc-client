import { setToken, getUserFromToken, removeToken } from './tokenService';

// variable
// const BASE_URL = 'http://localhost:3001/api/users'; development url
const BASE_URL = 'https://video-game-central-api.herokuapp.com/api/users';

// function for making ajax requests
function signup(user) {
    return fetch(BASE_URL + '/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        console.log(response);
        if(response.ok) return response.json();
        // error handling
        throw new Error('email already taken');
    }).then(data => setToken(data.token))
}

function login(credentials) {
    return fetch(BASE_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => {
        if(response.ok) return response.json();
        // error handling
        throw new Error('bad credentials');
    }).then(data => setToken(data.token))
}

function logout() {
    removeToken();
}

function getUser() {
    return getUserFromToken();

}

export {
    signup,
    login,
    logout,
    getUser
};