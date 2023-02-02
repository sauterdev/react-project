import{ useState } from "react";

export function HomePage(props) {
  
  const [list, setList] = useState(["ready", "set", "GO"]);
  const [text, setText] = useState("");
  
function onSubmit(event) {
    event.preventDefault();
      setList([...list, text])
    }
 
    return (
      <div>
        <h1>
          Hello World!
        </h1>
        <ul>
          <form onSubmit={onSubmit}>
          <input type="text" name="textInput" id="textInput" 
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
          <button type="submit">Add</button>
          </form>
          {list.map((ele, index) => {
            return <li key={index}>{ele}</li>
          })}
        </ul>
      </div>
    )
  
}

