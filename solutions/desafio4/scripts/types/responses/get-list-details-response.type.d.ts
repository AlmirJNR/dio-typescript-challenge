type GetListDetailsResponse = {
    created_by: string,
    description: string,
    favorite_count: number,
    id: string,
    items: Items[],
    item_count: number,
    iso_639_1: string,
    name: string,
    poster_path: string,
}

type Items = {
    poster_path: string | null,
    adult: boolean,
    overview: string,
    release_date: string,
    genre_ids: number[],
    id: number,
    original_title: string,
    original_language: string,
    title: string,
    backdrop_path: string | null,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number,
}

export default GetListDetailsResponse;
