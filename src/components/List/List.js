import { Component } from "react";

let ListItem = [
  { id: 1, task: "Send invitations" },
  { id: 2, task: "Book the clown" },
  { id: 3, task: "Order cupkes" },
];

export class List extends Component {
  render() {
    return (
      <div>
        <h1>Create new task</h1>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add</button>
        </div>
      </div>
    );
  }
}
