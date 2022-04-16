import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index element={            
            <></>
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
