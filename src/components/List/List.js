import { Component } from "react";

export class List extends Component {
  state = {
    input: "",
    listItems: [],
  };
  onFormSubmit(e) {
    e.preventDefault();
  }
  onChangeEvent(e) {
    this.setState({ input: e });
    console.log(e);
  }
  addItem(input) {
    if (input === "") {
      alert("Enter an item. No empty strings.");
    } else {
      let items = this.state.listItems;
      items.push(input);
      this.setState({ listItems: items, input: "" });
      console.log(items);
    }
  }

  markedWord(e) {
    const item = e.target;
    item.classList.toggle("marked");
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
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
            <button onClick={() => this.addItem(this.state.input)}>Add</button>
          </div>
          <div>
            <ul>
              {this.state.listItems.map((item, index) => (
                <li onClick={this.markedWord} key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    );
  }
}
