import React from "react";
import { fetchAllDogs } from "./RestClient";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
    };
    this.fetchDisplayData = this.fetchDisplayData.bind(this);
  }
  async fetchDisplayData() {
    let data = await fetchAllDogs();
    this.setState({ dogs: data });
  }

  render() {
    return (
      <div>
        <div id="title">Petstore🐶🦤🐍</div>
        <button id="fetchButton" onClick={this.fetchDisplayData}>
          Look at all the dogs!
        </button>
        <div className="data">
          {this.state.dogs.map((dog, key) => (
            <div key={key}>{dog.name}</div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
