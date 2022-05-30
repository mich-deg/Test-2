import React, { Fragment, useContext } from "react";
import { QuizContext } from "../context/quiz";
import Card from "../ui/Card";
import Response from "./Response";

import classes from "./Question.module.css";
import Button from "../ui/Button";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIdx];
  return (
    <Fragment>
      <div>
        <ul className={classes.questionInfo}>
          <li>Question {quizState.currentQuestionIdx + 1}</li>
          <li id={classes.qType}>{currentQuestion.questionType}</li>
          <li>Score {quizState.scoreCount}</li>
          <li>Timer {0}</li>
        </ul>
      </div>
      <Card>
        <div>
          <p className={classes.question}>{currentQuestion.question}</p>
          <hr></hr>
        </div>
        <div>
          <ul className={classes.answers}>
            <li className={classes.answer}>
              {quizState.answers.map((answer, index) => (
                <Response
                  answerText={answer}
                  index={index}
                  key={index}
                  currentAnswer={quizState.currentAnswer}
                  correctAnswer={currentQuestion.correctAnswer}
                  onSelectAnswer={(answerText) =>
                    dispatch({ type: "SELECT_ANSWER", payload: answerText })
                  }
                />
              ))}
            </li>
          </ul>
        </div>
        <div className={classes.skipBtn}>
          <Button onClick={() => dispatch({ type: "SKIP" })}>Skip</Button>
        </div>
      </Card>
    </Fragment>
  );
};

export default Question;
