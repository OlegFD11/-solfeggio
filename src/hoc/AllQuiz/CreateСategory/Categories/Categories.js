import React, { Component } from "react";
import "./Categories.scss";
import Input from "../../../../components/Input/Input";

export default class Titles extends Component {
  state = {
    validate: true,
  };

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
