import { useState, useEffect } from "react";
import {
  filterFilmsByDirector,
  getListOf,
  getFilmStats,
} from "../helpers/film.helpers";
import { Link } from "react-router-dom";

export function FilmsPage(props) {
  const [list, setList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    let fetchFilms = fetch(`https://studioghibliapi-d6fc8.web.app/films`);

    fetchFilms
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      })
      .catch((err) => console.log(err));
  }

  // Hook used to make fetch and get movie info
  useEffect(() => {
    getFilms();
  }, []);

  //
  const filmsByDirector = filterFilmsByDirector(list, searchDirector);
  const directors = getListOf(list, "director");

  const { avg_score, total, latest } = getFilmStats(filmsByDirector);

  return (
    <div>
      <div className="film-header-section">
        <h1 className="text-center">Studio Ghibli Films</h1>
        <form>
          <div className="form-group">
            <label htmlFor="selectDirector">Director</label>
            <select
              name="selectDirector"
              id="selectDirector"
              value={searchDirector}
              onChange={(ev) => {
                setSearchDirector(ev.target.value);
              }}
            >
              <option value="">All</option>
              {directors.map((element, index) => {
                return (
                  <option key={element + index} value={element}>
                    {element}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </div>
      <div className="director-data">
        <div>
          <span>Number of Films: </span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating: </span>
          <span>{avg_score.toFixed(2)}</span>
        </div>
        <div>
          <span>Latest Film: </span>
          <span>{latest}</span>
        </div>
      </div>

      <ul className="tiles">
        {filmsByDirector.length != 0 &&
          filmsByDirector.map((ele) => {
            return (
              <li key={ele.id}>
                <Link to={`/film/${ele.id}`}>
                  <h2>{ele.title}</h2>
                </Link>
                <img src={`${ele.image}`} alt="Film Poster" />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
