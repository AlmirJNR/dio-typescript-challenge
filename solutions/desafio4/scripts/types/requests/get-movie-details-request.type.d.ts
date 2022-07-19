type GetMovieDetailsRequest = {
    apiKey: string,
    movieId: string,
    language?: string = 'en-US',
}

export default GetMovieDetailsRequest;
