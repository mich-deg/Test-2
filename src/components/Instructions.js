import React, { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Card from "../ui/Card";

const Instructions = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <Card>
      <div>
        <h1>Welcome to the Quiz {quizState.yourName}</h1>
        <h2>Here are the rules...</h2>
        <ul>
          <li>You have 10 seconds to answer each questions.</li>
          <li>You can skip difficult questions.</li>
          <li>
            When you select an answer, the quiz will go to the next question
            after two seconds.
          </li>
          <li>
            If you're correct, your answer's background will turn to green and
            if you're not, the selected answer's background will turn red in
            those three seconds.
          </li>
          <li>You will see your score at the end. Good luck!</li>
        </ul>
        <button onClick={() => dispatch({ type: "START" })}>Start</button>
        {/* <div>
        {quizState.showQuestion && (
          <div>
            <div>Question {quizState.currentQuestionIdx + 1}</div>
            <Question />
            <button onClick={() => dispatch({ type: "SKIP" })}>Skip</button>
            <div></div>
          </div>
        )}
      </div> */}
      </div>
    </Card>
  );
};

export default Instructions;
