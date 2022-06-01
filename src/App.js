import React, { useContext } from "react";
import { QuizContext } from "./context/quiz";
import Question from "./components/Question";
// import CreateUser from "./components/CreateUser";
// import Instructions from "./components/Instructions";
import ShowScore from "./components/ShowScore";

const App = () => {
  const [quizState] = useContext(QuizContext);
  console.log("quizState", quizState);

  return (
    <div>
      {/* <div>
        <CreateUser />
        <div>
          <Instructions />
        </div>
      </div> */}
      {!quizState.showScore && (
        <div>
          <Question />
          {/* {quizState.currentAnswer && (
            <div onClick={() => dispatch({ type: "SKIP" })}>Skip</div>
          )} */}
        </div>
      )}
      {quizState.showScore && <ShowScore />}
    </div>
  );
};

export default App;
