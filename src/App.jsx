import { useState } from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom"
import { HomePage, FilmsPage, SingleFilmPage } from "./pages";
import "./App.css";
import "./components/filmsListStyle.css"

export default function App() {

  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="films">Films</NavLink></li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="films" element={<FilmsPage />}></Route>
        <Route path="film/:id" element={<SingleFilmPage />}></Route>
      </Routes>
    </BrowserRouter>
  )

}
