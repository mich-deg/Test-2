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

  return (
    <div
      className={`${classes.answer} ${
        isCorrectAnswer && classes["correct-answer"]
      } ${isWrongAnswer && classes["wrong-answer"]} ${
        currentAnswer && classes["disabled-answer"]
      }`}
      onClick={() => onSelectAnswer(answerText)}
    >
      <div className={classes.answerTxt}>{answerText}</div>
    </div>
  );
};

export default Response;
