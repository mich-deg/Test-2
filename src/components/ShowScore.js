import React, { Fragment, useContext } from "react";
import { QuizContext } from "../context/quiz";
import Button from "../ui/Button";
import Card from "../ui/Card";

import classes from "./ShowScore.module.css";

const ShowScore = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <Fragment>
      <p className={classes.congrats}>Congratulations</p>
      <Card
        className={classes.score}
        // style={{ background: quizState.scoreCount >= 1 ? "green" : "black" }}
      >
        <ul className={classes.scoreText}>
          <li>You scored</li>
          <li className={classes.scoreCnt}>{quizState.scoreCount}</li>
        </ul>
        <div className={classes.scoreBtn}>
          <Button onClick={() => dispatch({ type: "RESTART" })}>Restart</Button>
        </div>
      </Card>
    </Fragment>
  );
};

export default ShowScore;
