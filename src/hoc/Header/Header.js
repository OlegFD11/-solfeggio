import React, { Component } from "react";
import "./Header.scss";
import Menu from "../Menu/Menu";

export default class Header extends Component {
  state = {
    modalActive: false,
    links: [
      { to: "/AllQuiz", label: "Панель управления", exact: true },
      { to: "/auth", label: "Авторизация", exact: false },
    ],
  };

  render() {
    return (
      <header className="Header">
        <h1>Сольфеджио</h1>
        <Menu links={this.state.links} />
      </header>
    );
  }
}
