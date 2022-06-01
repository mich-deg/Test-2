import React, { Fragment, useContext } from "react";
import { QuizContext } from "../context/quiz";
import Button from "../ui/Button";
import Card from "../ui/Card";

import classes from "./ShowScore.module.css";

const ShowScore = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  let myScore = quizState.scoreCount >= 1;
  return (
    <Fragment>
      <div className={classes.container_score}>
        <div className={classes.congrats}>
          {myScore && <p>Congratulations</p>}
        </div>
        <Card className={`${myScore && classes.cardColor}`}>
          <div className={classes.score}>
            <div className={classes.scoreText}>
              <p>You scored</p>
              <p className={classes.scoreCnt}>{quizState.scoreCount}</p>
            </div>

            <div className={classes.scoreBtn}>
              <Button onClick={() => dispatch({ type: "RESTART" })}>
                Restart
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default ShowScore;
