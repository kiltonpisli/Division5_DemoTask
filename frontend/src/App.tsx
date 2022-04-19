import React, {useEffect} from 'react';
import Home from './screens/Home';
import { Route, Routes } from 'react-router-dom';
import { useGetTrendingQuery, useGetCategoriesQuery, useGetMoviesByCategoryQuery, useGetMoviesDetailsQuery, useGetMoviesBySearchQuery } from './redux/services/api';

function App() {
  const { data: trendingData, isSuccess: s5} = useGetTrendingQuery();
  const { data: catData, isSuccess: s1} = useGetCategoriesQuery();
  const { data: moviesData, isSuccess: s2} = useGetMoviesByCategoryQuery(27);
  const { data: movieDetailsData, isSuccess: s3} = useGetMoviesDetailsQuery(550);
  const { data: moviesSearchData, isSuccess: s4} = useGetMoviesBySearchQuery("spider man no way");

  useEffect(() => {
    if(s1 && s2 && s3 && s4 && s5){
      console.log("trending", trendingData);
      console.log("categories", catData);
      console.log("movies", moviesData);
      console.log("Movie Details", movieDetailsData);
      console.log("Movies Search", moviesSearchData);
    }
  }, [trendingData, catData, moviesData, movieDetailsData, moviesSearchData])

  return (
    <Routes>
      <Route index element={            
            <Home />
      } />
      <Route
        path="category/:id"
        element={
            <></>
        }
      />
      <Route
        path="movie/:id"
        element={
            <></>
        }
      />
    </Routes>
  );
}

export default App;
