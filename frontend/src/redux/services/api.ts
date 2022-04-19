import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Category } from '../../models/category.model'
import { Movie } from '../../models/movie.model';

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "c446dcddc40919bea1c8e8580a9a40b7";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getTrending: builder.query<Movie[], void>({
            query: () => `trending/movie/week?api_key=${API_KEY}`,
        }),
        getCategories: builder.query<Category[], void>({
            query: () => `genre/movie/list?api_key=${API_KEY}`,
        }),
        getMoviesByCategory: builder.query<Movie[], number>({
            query: (categoryId) => `list/${categoryId}?api_key=${API_KEY}`,
        }),
        getMoviesDetails: builder.query<Movie, number>({
            query: (movieId) => `movie/${movieId}?api_key=${API_KEY}`,
        }),
        getMoviesBySearch: builder.query<Movie[], string>({
            query: (search) => `search/movie?api_key=${API_KEY}&query=${search}`,
        }),
    }),
})

export const { useGetTrendingQuery, useGetCategoriesQuery, useGetMoviesByCategoryQuery, useGetMoviesDetailsQuery, useGetMoviesBySearchQuery } = api;
