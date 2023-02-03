import { Component } from "react";

export class List extends Component {
  state = {
    input: "",
    listItems: [],
  };
  onChangeEvent(e) {
    this.setState({ input: e });
    console.log(e);
  }
  render() {
    return (
      <div>
        <h1>Create new task</h1>
        <div>
          <textarea
            placeholder="add task"
            onChange={(e) => {
              this.onChangeEvent(e.target.value);
            }}
            value={this.state.input}
          ></textarea>
        </div>
        <div>
          <button>Add</button>
        </div>
      </div>
    );
  }
}
