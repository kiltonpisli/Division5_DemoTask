interface Movie_BelongsToCollection{
    backdrop_path: string
    id: number
    name: string
    poster_path: string
}
export interface Category{
    "id": string,
    "name": string
}
export interface Categories {
    genres: Category[]
}

export interface Movie{
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    media_type: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: false,
    vote_average: number,
    vote_count: number,
    genres: Category[],
    runtime: number,
    belongs_to_collection: Movie_BelongsToCollection,
    tagline: string
}
export interface MovieList{
    item_count: number,
    items: Movie[],
    poster_path: string,
}
export interface SearchResponse{
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number,
}