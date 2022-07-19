type SearchMoviesRequest = {
    apiKey: string,
    query: string,
    language?: string = 'en-US',
    page?: number = 1,
    includeAdult?: boolean = false,
    region?: string,
    year?: number,
    primary_release_year?: number,
}

export default SearchMoviesRequest;
