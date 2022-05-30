import React from "react";

import classes from "./Response.module.css";

const Response = ({
  onSelectAnswer,
  answerText,
  currentAnswer,
  correctAnswer,
}) => {
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
  const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
  const disabledClass = currentAnswer ? "disabled-answer" : "";
  return (
    <div
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      <div className={classes.answerTxt}>{answerText}</div>
    </div>
  );
};

export default Response;
