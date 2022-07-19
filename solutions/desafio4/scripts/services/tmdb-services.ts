import SearchMoviesResponse from "../types/responses/search-movies-response.type";
import GetMovieDetailsResponse from "../types/responses/get-movie-details-response.type";
import GetListDetailsResponse from "../types/responses/get-list-details-response.type";
import CreateRequestTokenResponse from "../types/responses/create-request-token-response.type";
import LoginResponse from "../types/responses/login-response.type";
import CreateSessionResponse from "../types/responses/create-session-response.type";
import CreateListResponse from "../types/responses/create-list-response.type";
import AddMovieToListResponse from "../types/responses/add-movie-to-list-response.type";
import CreateRequestTokenRequest from "../types/requests/create-request-token-request.type";
import LoginRequest from "../types/requests/login-request.type";
import SearchMoviesRequest from "../types/requests/search-movies-request.type";
import GetMovieDetailsRequest from "../types/requests/get-movie-details-request.type";
import CreateSessionRequest from "../types/requests/create-session-request.type";
import CreateListRequest from "../types/requests/create-list-request.type";
import AddMovieToListRequest from "../types/requests/add-movie-to-list-request.type";
import GetListDetailsRequest from "../types/requests/get-list-details-request.type";
import HttpClient from "../utils/httpclient";

async function createRequestToken(param: CreateRequestTokenRequest): Promise<CreateRequestTokenResponse> {
    const response = await HttpClient.get({
        url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${param.apiKey}`,
        method: 'GET',
    });

    return response as CreateRequestTokenResponse;
}

async function validateWithLogin(param: LoginRequest): Promise<LoginResponse> {
    const response = await HttpClient.get({
        url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${param.apiKey}`,
        method: 'POST',
        body: {
            username: param.username,
            password: param.password,
            request_token: param.requestToken,
        },
    });

    return response as LoginResponse;
}

async function searchMovie(param: SearchMoviesRequest): Promise<SearchMoviesResponse> {
    const response = await HttpClient.get({
        url: `https://api.themoviedb.org/3/search/movie?api_key=${param.apiKey}&query=${encodeURI(param.query)}`,
        method: 'GET',
    });

    return response as SearchMoviesResponse;
}

async function getMovieDetails(param: GetMovieDetailsRequest): Promise<GetMovieDetailsResponse> {
    const response = await HttpClient.get({
        url: `https://api.themoviedb.org/3/movie/${param.movieId}?api_key=${param.apiKey}&language=${param.language}`,
        method: 'GET',
    });

    return response as GetMovieDetailsResponse;
}

async function createSession(param: CreateSessionRequest): Promise<CreateSessionResponse> {
    const response = await HttpClient.get({
        url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${param.apiKey}`,
        method: 'POST',
        body: {
            request_token: param.requestToken,
        },
    });

    return response as CreateSessionResponse;
}

async function createList(param: CreateListRequest): Promise<CreateListResponse> {
    const response = await HttpClient.get({
        url: `https://api.themoviedb.org/3/list?api_key=${param.apiKey}&session_id=${param.sessionId}`,
        method: 'POST',
        body: {
            name: param.listName,
            description: param.description,
            language: param.language,
        },
    });

    return response as CreateListResponse;
}

async function addMovieToList(param: AddMovieToListRequest): Promise<AddMovieToListResponse> {
    const response = await HttpClient.get({
        url: `https://api.themoviedb.org/3/list/${param.listId}/add_item?api_key=${param.apiKey}&session_id=${param.sessionId}`,
        method: 'POST',
        body: {
            media_id: param.movieId,
        },
    });

    return response as AddMovieToListResponse;
}

async function getListDetails(param: GetListDetailsRequest): Promise<GetListDetailsResponse> {
    const response = await HttpClient.get({
        url: `https://api.themoviedb.org/3/list/${param.listId}?api_key=${param.apiKey}`,
        method: 'GET',
    });

    return response as GetListDetailsResponse;
}

export {
    createRequestToken,
    validateWithLogin,
    searchMovie,
    getMovieDetails,
    createSession,
    createList,
    addMovieToList,
    getListDetails,
};
