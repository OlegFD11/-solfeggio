import React, { Component } from "react";
import "./Menu.scss";
import { NavLink } from "react-router-dom";

export default class Menu extends Component {
  renderLinks() {
    const links = this.props.links;
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink to={link.to} exact={link.exact} activeClassName={"active"}>
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <div className={`Menu`}>
        <div className="Menu-list">
          <React.Fragment>
            <nav className="Main-menu">
              <ul>{this.renderLinks()}</ul>
            </nav>
          </React.Fragment>
        </div>
      </div>
    );
  }
}
