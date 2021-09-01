import React, { Component } from "react";
import "./QuizList.scss";
import { NavLink } from "react-router-dom";
import axios from "../../../axios/axios-quiz";
import CreateQuize from "./CreateQuize/CreateQuize";
import Popup from "../../Popup/Popup";
import Button from "../../Button/Button";

export default class QuizList extends Component {
  state = {
    modalActive: false,
    title: "",
    category: "",
    quizes: [],
    questions: [
      {
        question: "Вопрос 1 ",
        id: 1,
        rightAnswerId: 1,
        answers: [
          { text: "Ответ 1", id: 1 },
          { text: "Ответ 2", id: 2 },
          { text: "Ответ 3", id: 3 },
        ],
      },
      {
        question: "Вопрос 2",
        id: 2,
        rightAnswerId: 2,
        answers: [
          { text: "Ответ 1", id: 1 },
          { text: "Ответ 2", id: 2 },
          { text: "Ответ 3", id: 3 },
        ],
      },
    ],
  };

  setModalActive = (flag) => {
    this.setState({ modalActive: flag });
  };

  onChangeInputTitles = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  createQuiz = async (event) => {
    event.preventDefault();
    const data = {
      quizName: this.state.title,
      quizCategory: this.state.category,
      questions: this.state.questions,
    };
    try {
      await axios.post("/quizes.json", data);
      this.setState({
        modalActive: false,
        updateListQuiz: true,
      });
      this.getQuiz();
    } catch (e) {}
  };

  renderQuizes() {
    return this.state.quizes.map((quiz) => {
      return (
        <li key={quiz.id}>
          <NavLink to={"/quiz/" + quiz.id}>{quiz.name}</NavLink>
        </li>
      );
    });
  }

  renderQuestion() {
    console.log(this.state.quizes);
    return this.state.quizes.map((quiz) => {
      return (
        <li key={quiz.id}>
          <NavLink to={"/quiz/" + quiz.id}>{quiz.name}</NavLink>
        </li>
      );
    });
  }

  getQuiz = async () => {
    try {
      const response = await axios.get("/quizes.json");
      const quizes = [];
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: key,
        });
      });

      this.setState({
        quizes,
      });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.getQuiz();
  }

  render() {
    console.log(this.state);
    return (
      <div className="QuizList">
        <div className="QuizList-toolbar">
          <div className="QuizList-navbar-buttons">
            <Button
              id="createTest"
              type="primary"
              onClick={(e) => this.setModalActive(e)}
            >
              Добавить тест
            </Button>
          </div>
          <div className="QuizList-navbar-filters"></div>
        </div>

        <div className="QuizList-content">
          <div className="Quizes-title">
            <ul>{this.renderQuizes()}</ul>
          </div>
          <div className="Quizes-question">
            <ul>{this.renderQuestion()}</ul>
          </div>
        </div>
        <Popup active={this.state.modalActive} setActive={this.setModalActive}>
          <CreateQuize
            titles={this.state.title}
            createQuiz={this.createQuiz}
            handlerOnChange={this.onChangeInputTitles}
          />
        </Popup>
      </div>
    );
  }
}
