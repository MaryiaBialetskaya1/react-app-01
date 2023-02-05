import { Component } from "react";
import s from "./Header.module.css";

export class Header extends Component {
  render() {
    return (
      <div className={s.container}>
        <div>
          <h2>Organaze Maryia's Birthday</h2>
        </div>
        <div>
          <h3>Type: personal</h3>
          <h3>Due Fri 11 Aug 2023</h3>
        </div>
      </div>
    );
  }
}
