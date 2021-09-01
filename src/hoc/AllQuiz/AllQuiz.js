import React, { Component } from "react";
import "./AllQuiz.scss";
import QuizList from "../AllQuiz/QuizList/QuizList";

export default class AllQuiz extends Component {
  render() {
    return (
      <div className="AllQuiz">
        <div className="AllQuiz-wrap">
          <div className="AllQuiz-list">
            <QuizList onChangeInputTitles={this.onChangeInputTitles} />
          </div>
        </div>
      </div>
    );
  }
}
