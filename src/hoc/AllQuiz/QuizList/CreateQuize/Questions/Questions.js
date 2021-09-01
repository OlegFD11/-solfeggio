import React, { Component } from "react";
import "./Questions.scss";
import { createFormControls } from "./util/index";
import Input from "../../../../Input/Input";
import Button from "../../../../Button/Button";

export default class Questions extends Component {
  state = {
    rightAnswerId: 1,
    formControls: createFormControls(),
    quiz: [],
  };

  addQuestionHandler = (event) => {
    event.preventDefault();
    const quiz = this.state.quiz;
    const index = quiz.length + 1;
    const { question, option1, option2, option3, option4 } =
      this.state.formControls;

    const questionItem = {
      question: question.value,
      id: index,
      answers: [
        { text: option1.value, id: option1.id },
        { text: option2.value, id: option2.id },
        { text: option3.value, id: option3.id },
        { text: option4.value, id: option4.id },
      ],
    };

    quiz.push(questionItem);
    this.setState({
      quiz,
      rightAnswerId: 1,
      formControls: createFormControls(),
    });
  };

  changeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };
    control.value = value;
    formControls[controlName] = control;
    this.setState({
      formControls,
    });
  };

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <Input
          key={controlName + index}
          label={control.label}
          value={control.value}
          errorMessage={control.errorMessage}
          onChange={(event) =>
            this.changeHandler(event.target.value, controlName)
          }
        />
      );
    });
  }

  render() {
    return (
      <div className="Questions">
        {this.renderControls()}{" "}
        <Button type="success" onClick={this.props.createQuestions}>
          Добавить вопрос
        </Button>
      </div>
    );
  }
}
