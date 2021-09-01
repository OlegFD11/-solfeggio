import React, { Component } from "react";
import Titles from "./Categories/Categories";
import Button from "../../Button/Button";
export default class CreateQuize extends Component {
  render() {
    return (
      <div>
        <h1>Создание теста</h1>
        <Titles onChangeChild={this.props.handlerOnChange} />
        <Button type="success" onClick={this.props.createQuiz}>
          Создать тест
        </Button>
      </div>
    );
  }
}
