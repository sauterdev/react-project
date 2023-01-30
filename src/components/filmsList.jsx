import { Component } from "react";
import "./filmsListStyle.css"

class FilmsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [],
        }
        
        this.getFilms = this.getFilms.bind(this);
    }

    getFilms() {
        let fetchFilms = fetch(`https://studioghibliapi-d6fc8.web.app/films`);
        
        fetchFilms
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                list: data
            })
            
        })
        .catch((err) => console.log(err));
    }

    //Lifecycle method 2
    componentDidMount() {
        this.getFilms()
    }

    //Lifecycle method 1
    render() {
        //if the list is not empty, show the films. otherwise show "loading"
        return (
            <div>
                <h1 class="text-center">Studio Ghibli Films</h1>
        <ul className="tiles">
            {this.state.list.map((ele) => {
                return <li key={ele.id}>
                    <h2>{ele.title}</h2>
                    <img src= {`${ele.image}`} alt="Film Poster"/>
                </li>
            })}
        </ul>
        </div>
    )}
}


export default FilmsList