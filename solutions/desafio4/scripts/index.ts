import {
    createRequestToken,
    validateWithLogin,
    searchMovie,
    getMovieDetails,
    createSession,
    createList,
    addMovieToList,
    getListDetails,
} from './services/tmdb-services.js';
import SearchMoviesResponse from './types/responses/search-movies-response.type.js';
import UserData from './utils/user-data.js';

let search: string;
let searchResponse: SearchMoviesResponse;
const USER = new UserData();

let loginButtonHTML = document.getElementById('login-button') as HTMLInputElement | null;
let searchContainerHTML = document.getElementById('search-container') as HTMLDivElement | null;
let searchButtonHTML = document.getElementById('search-button') as HTMLButtonElement | null;

let usernameInputHTML = document.getElementById('login') as HTMLInputElement | null;
let passwordInputHTML = document.getElementById('senha') as HTMLInputElement | null;
let apiKeyInputHTML = document.getElementById('api-key') as HTMLInputElement | null;
let searchInputHTML = document.getElementById('search') as HTMLInputElement | null;

let mainHTML = document.getElementsByTagName('main')[0];

if (!loginButtonHTML) throw new Error('');
if (!searchButtonHTML) throw new Error('');
if (!usernameInputHTML) throw new Error('');
if (!passwordInputHTML) throw new Error('');
if (!apiKeyInputHTML) throw new Error('');
if (!searchInputHTML) throw new Error('');
if (!searchContainerHTML) throw new Error('');

function validateButtons() {
    if (!loginButtonHTML) return;
    if (!searchButtonHTML) return;

    if (!USER.password || !USER.username || !USER.apiKey) {
        loginButtonHTML.disabled = true;
    } else {
        loginButtonHTML.disabled = false;
    }

    if (!USER.apiKey || !search) {
        searchButtonHTML.disabled = true;
    } else {
        searchButtonHTML.disabled = false;
    }
}

usernameInputHTML.oninput = (event: Event) => {
    const eventTarget = event.target as HTMLInputElement;
    USER.username = eventTarget.value;
    validateButtons();
}

passwordInputHTML.oninput = (event: Event) => {
    const eventTarget = event.target as HTMLInputElement;
    USER.password = eventTarget.value;
    validateButtons();
}

apiKeyInputHTML.oninput = (event: Event) => {
    const eventTarget = event.target as HTMLInputElement;
    USER.apiKey = eventTarget.value;
    validateButtons();
}

searchInputHTML.oninput = (event: Event) => {
    const eventTarget = event.target as HTMLInputElement;
    search = eventTarget.value;
    validateButtons();
}

loginButtonHTML.addEventListener('click', async () => {
    USER.requestToken = (await createRequestToken({ apiKey: USER.apiKey! })).request_token;
    USER.requestToken = (await validateWithLogin({ apiKey: USER.apiKey!, username: USER.username!, password: USER.password!, requestToken: USER.requestToken! })).request_token;
    USER.sessionId = (await createSession({ apiKey: USER.apiKey!, requestToken: USER.requestToken! })).session_id;
});

searchButtonHTML.addEventListener('click', async () => {
    const previouslyResult = document.getElementById('list-container');

    if (previouslyResult) {
        mainHTML.removeChild(previouslyResult);
    }

    searchResponse = await searchMovie({ apiKey: USER.apiKey!, query: search, });

    const ul = document.createElement('ul');
    ul.id = 'list-container';

    for (const movie of searchResponse.results) {
        let li = document.createElement('li');

        li.appendChild(document.createTextNode(movie.original_title));
        ul.appendChild(li);
    }

    mainHTML.appendChild(ul);
});
