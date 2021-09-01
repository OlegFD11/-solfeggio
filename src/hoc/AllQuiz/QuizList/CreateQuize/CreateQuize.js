import React, { Component } from "react";
import Titles from "./Titles/Titles";
import Button from "../../../Button/Button";
import { submitHandler } from "../../../../form/form";
export default class CreateQuize extends Component {
  render() {
    return (
      <div>
        <h1>Создание теста</h1>
        <form onSubmit={submitHandler}>
          <Titles onChangeChild={this.props.handlerOnChange} />
          <Button type="success" onClick={this.props.createQuiz}>
            Создать тест
          </Button>
        </form>
      </div>
    );
  }
}
