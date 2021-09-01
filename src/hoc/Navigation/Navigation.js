import React, { Component } from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
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
      <div className={`Navigation`}>
        <div className="Navigation-list">
          <React.Fragment>
            <nav className="Navigation-menu">
              <ul>{this.renderLinks()}</ul>
            </nav>
          </React.Fragment>
        </div>
      </div>
    );
  }
}
