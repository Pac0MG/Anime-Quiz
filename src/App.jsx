// App.jsx

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/Question";
import qBank from "./Components/QuestionBank";
import Score from "./Components/Score";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: qBank,
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
    };
  }

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.checkAnswer();
    this.handleNextQuestion();
  };

  checkAnswer = () => {
    const { questionBank, currentQuestion, selectedOption } = this.state;
    if (selectedOption === questionBank[currentQuestion].answer) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    }
  };

  handleNextQuestion = () => {
    const { questionBank, currentQuestion } = this.state;
    if (currentQuestion + 1 < questionBank.length) {
      this.setState({
        currentQuestion: currentQuestion + 1,
        selectedOption: "",
      });
    } else {
      this.setState({ quizEnd: true });
    }
  };

  resetQuiz = () => {
    this.setState({
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
    });
  };

  render() {
    const { questionBank, currentQuestion, selectedOption, score, quizEnd } =
      this.state;

    return (
      <div className="App">
        <h1 className="app-title">ANIME QUIZ</h1>
        {!quizEnd ? (
          <Question
            question={questionBank[currentQuestion]}
            selectedOption={selectedOption}
            onOptionChange={this.handleOptionChange}
            onSubmit={this.handleFormSubmit}
          />
        ) : (
          <Score
            score={score}
            onResetQuiz={this.resetQuiz} 
            className="score"
          />
        )}
      </div>
    );
  }
}
export default App;
