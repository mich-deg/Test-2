import React, {
  Fragment,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { QuizContext } from "../context/quiz";
import Card from "../ui/Card";
import Response from "./Response";

import classes from "./Question.module.css";
import Button from "../ui/Button";

const Question = () => {
  const intervalRef = useRef(null);
  const [timer, setTimer] = useState("00:00:00");

  const [quizState, dispatch] = useContext(QuizContext);
  let currentQuestion = quizState.questions[quizState.currentQuestionIdx];

  const getTimeRemaining = (endtime) => {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    // const minutes = Math.floor((total / 1000 / 60) % 60);
    // const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    // const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      // days,
      // hours,
      // minutes,
      seconds,
    };
  };

  const startTimer = (deadline) => {
    let { total, seconds } = getTimeRemaining(deadline);
    if (total >= 0) {
      setTimer(
        // (hours > 9 ? hours : "0" + hours) +
        //   ":" +
        //   (minutes > 9 ? minutes : "0" + minutes) +
        //   ":" +
        seconds > 9 ? seconds : "0" + seconds
      );
    } else {
      clearInterval(intervalRef.current);
    }
  };

  const clearTimer = (endtime) => {
    setTimer("10");
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000);
    intervalRef.current = id;
  };

  const getDeadlineTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadlineTime());

    // if (quizState.currentQuestionIdx + 1 <= quizState.questions.length) {
    //   setTimeout(() => {
    //     dispatch({ type: "SKIP" });
    //   }, 10000);
    // }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const skipHandler = () => {
    dispatch({ type: "SKIP" });

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    clearTimer(getDeadlineTime());
  };

  const onSelectAnswerHandler = (answerText) => {
    if (quizState.currentQuestionIdx + 1 <= quizState.questions.length) {
      setTimeout(() => {
        dispatch({ type: "SKIP" });
      }, 2000);
    }
    dispatch({ type: "SELECT_ANSWER", payload: answerText });
    clearTimer(getDeadlineTime());
  };

  return (
    <Fragment>
      <div>
        <ul className={classes.questionInfo}>
          <li>Question {quizState.currentQuestionIdx + 1}</li>
          <li id={classes.qType}>{currentQuestion.questionType}</li>
          <li>Score {quizState.scoreCount}</li>
          <li>Timer {timer}</li>
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
                  onSelectAnswer={onSelectAnswerHandler}
                />
              ))}
            </li>
          </ul>
        </div>
        <div className={classes.skipBtn}>
          <Button onClick={skipHandler}>Skip</Button>
        </div>
      </Card>
    </Fragment>
  );
};

export default Question;
