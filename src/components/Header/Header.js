import { Component } from "react";
import s from "./Header.module.css";

export class Header extends Component {
  render() {
    return (
      <div className={s.container}>
        <div>
          <h1>Organaze Maryia's Birthday</h1>
        </div>
        <div>
          <h2>Type: personal</h2>
          <h2>Due Fri 11 Aug 2023</h2>
        </div>
      </div>
    );
  }
}
