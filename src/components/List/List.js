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
  addItem(input) {
    let items = this.state.listItems;
    items.push(input);
    this.setState({ listItems: items, input: "" });
    console.log(items);
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
          <button onClick={() => this.addItem(this.state.listItems)}>
            Add
          </button>
        </div>
      </div>
    );
  }
}
