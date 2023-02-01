import { useState, useEffect } from "react";
import "./filmsListStyle.css"

export function FilmsPage(props) {
    const [list, setList] = useState([])

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
 
        return (
            <div>
                <h1 className="text-center">Studio Ghibli Films</h1>
        <ul className="tiles">
            {list.map((ele) => {
                return <li key={ele.id}>
                    <h2>{ele.title}</h2>
                    <img src= {`${ele.image}`} alt="Film Poster"/>
                </li>
            })}
        </ul>
        </div>
    )
}
