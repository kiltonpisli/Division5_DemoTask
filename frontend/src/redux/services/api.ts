import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Categories, MovieList, Movie } from '../../models/response.model'

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "c446dcddc40919bea1c8e8580a9a40b7";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getCategories: builder.query<Categories, void>({
            query: () => `genre/movie/list?api_key=${API_KEY}`,
        }),
        getMoviesByCategory: builder.query<MovieList, string>({
            query: (categoryId) => `list/${categoryId}?api_key=${API_KEY}`,
        }),
        getMoviesDetails: builder.query<Movie, string>({
            query: (movieId) => `movie/${movieId}?api_key=${API_KEY}`,
        }),
        getMoviesBySearch: builder.query<Movie[], string>({
            query: (search) => `search/movie?api_key=${API_KEY}&query=${search}`,
        }),
    }),
})

export const { useGetCategoriesQuery, useGetMoviesByCategoryQuery, useGetMoviesDetailsQuery, useGetMoviesBySearchQuery } = api;
