// Score.jsx

import React, { Component } from 'react';
import '../App.css';

class Score extends Component {

    getMessage(score) {
        switch (score) {
            case 0:
                return "You don't like ANIME.";
            case 1:
                return "You were lucky.";
            case 2:
                return "You were very lucky.";
            case 3:
                return "You know ANIME.";
            case 4:
                return "You like ANIME.";
            case 5:
                return "You are an ANIME fan.";
            default:
                return "";
        }
    }

    render() {
        const { score, onResetQuiz } = this.props;
        const message = this.getMessage(score);

        return (
            <div className="score text-center">
                <h2>Results</h2>
                <h4>Your Score: {score}</h4>
                <p>{message}</p>
                <button className="btn custom-btn" onClick={onResetQuiz}>
                    Try Again
                </button>
            </div>
        );
    }
}

export default Score;




