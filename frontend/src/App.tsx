import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/Home';
import Category from './screens/Category';
import Movie from './screens/Movie';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={            
          <Home />
        } />
        <Route
          path="category/:id"
          element={
            <Category />
          }
        />
        <Route
          path="movie/:id"
          element={
            <Movie />
          }
        />
      </Routes>
    </>
  );
}

export default App;
