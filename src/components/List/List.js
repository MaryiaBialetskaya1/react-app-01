import { Component } from "react";
import s from "./List.module.css";

export class List extends Component {
  state = {
    input: "",
    listItems: [
      "Orger cupcakes",
      "Send invitations",
      "Book the clown",
      "Rent a place for a party",
    ],
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
      items.unshift(input);
      this.setState({ listItems: items, input: "" });
      console.log(items);
    }
  }
  markedWord(e) {
    const item = e.target;
    item.classList.toggle(s.marked);
    console.log(item);
  }
  deleteItems() {
    let items = this.state.listItems;
    items = [];
    this.setState({ listItems: items });
  }

  render() {
    return (
      <div>
        <form className={s.myPostBlock} onSubmit={this.onFormSubmit}>
          <h1 className={s.headerText}>Create new task</h1>
          <div className={s.textareaBlock}>
            <textarea
              className={s.textarea}
              placeholder="add task"
              onChange={(e) => {
                this.onChangeEvent(e.target.value);
              }}
              value={this.state.input}
            ></textarea>
          </div>
          <div className={s.buttonBlock}>
            <button
              className={s.buttonPublish}
              onClick={() => this.addItem(this.state.input)}
            >
              Add Task
            </button>
          </div>
          <div className={s.posts}>
            <ul className={s.myPostBlock}>
              {this.state.listItems.map((item, index) => (
                <li
                  className={s.postItemBlock}
                  onClick={this.markedWord}
                  key={index}
                >
                  {item}
                  {/* <button className={s.addedButton}>Added</button> */}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button onClick={() => this.deleteItems()}>Delete</button>
          </div>
        </form>
      </div>
    );
  }
}
