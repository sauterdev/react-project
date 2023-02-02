import { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf }   from "../helpers/film.helpers";

export function FilmsPage(props) {
    const [list, setList] = useState([])
    const [searchDirector, setSearchDirector] = useState("");

    function getFilms() {
        let fetchFilms = fetch(`https://studioghibliapi-d6fc8.web.app/films`);
        
        fetchFilms
        .then((res) => res.json())
        .then((data) => {
            setList(data)   
        })
        .catch((err) => console.log(err));
    }
  
    useEffect(() => {
        getFilms();
    }, []) 
 
    const filmsByDirector = filterFilmsByDirector(list, searchDirector);
    const directors = getListOf(list, "director");

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
                            setSearchDirector(ev.target.value)
                        }} >
                            <option value="">All</option>
                            {directors.map((element, index) => {
                                return <option key={element+index} value={element}>{element}</option>

                            })}
                        </select>
                    </div>
                </form> 
                </div>
                
        <ul className="tiles">
            {filmsByDirector.length != 0 &&
            filmsByDirector.map((ele) => {
                return <li key={ele.id}>
                    <h2>{ele.title}</h2>
                    <img src= {`${ele.image}`} alt="Film Poster"/>
                </li>
            })}
        </ul>
        </div>
    )
}