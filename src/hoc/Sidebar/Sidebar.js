import React, { Component } from "react";
import "./Sidebar.scss";
import Navigation from "../Navigation/Navigation";

export default class Sidebar extends Component {
  state = {
    links: [
      { to: "/AllQuiz", label: "Список тестов", exact: true },
      { to: "/StatisticsQuiz", label: "Статистика", exact: false },
    ],
  };

  render() {
    return (
      <div className="Sidebar">
        <h2 className="Sidebar-title">Dashboard</h2>
        <Navigation type="vertical" links={this.state.links} />
      </div>
    );
  }
}
