// src/App.js

import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage"
import AddMovie from "./pages/AddMovies"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/movies/add"> Add a movie </Link>
      </nav>

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/movies/add" element={ <AddMovie /> } />
      </Routes>
    </div>
  );
}

export default App;
