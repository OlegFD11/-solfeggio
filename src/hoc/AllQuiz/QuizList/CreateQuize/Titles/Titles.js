import React, { Component } from "react";
import "./Titles.scss";
import Input from "../../../../../components/Input/Input";

export default class Titles extends Component {
  render() {
    const onChangeChildFree = this.props.onChangeChild;

    return (
      <div>
        <Input
          onChange={(e) => {
            onChangeChildFree(e);
          }}
          label="Введите название теста"
          name="title"
        />
        <Input
          onChange={(e) => {
            onChangeChildFree(e);
          }}
          label="Введите название категории"
          name="category"
        />
      </div>
    );
  }
}
