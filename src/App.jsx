import { Component } from "react";
import FilmsList from "./components/filmsList";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["ready", "set", "GO"],
      text:  ""
    }

    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.text]
    })
  }

  render() {
    return (
      <div>
        <h1>
          Hello World!
        </h1>
        <ul>
          <form onSubmit={this.onSubmit}>
          <input type="text" name="textInput" id="textInput" 
          value={this.state.text}
          onChange={(event) => this.setState({
            text: event.target.value
          })
        }/>
          <button type="submit">Add</button>
          </form>
          {this.state.list.map((ele, index) => {
            return <li key={index}>{ele}</li>
          })}
        </ul>
        <FilmsList />
      </div>
    )
  }
}

export default App;
