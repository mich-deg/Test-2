import { createContext, useReducer } from "react";
import questions from "../data";
import { shuffleAnswers } from "../utils";

const initialState = {
  questions,
  currentQuestionIdx: 0,
  showScore: false,
  scoreCount: 0,
  answers: shuffleAnswers(questions[0]),
  currentAnswer: "",
  yourName: "Mr XI",
  // name: { value: "Mr XI" },
  showQuestion: false,
};
const reducer = (state, action) => {
  console.log("reducer", state, action);
  // if (action.type === "GO") {
  //   return {
  //     ...state,
  //     name.value = payload.newValue
  //   };
  // }
  if (action.type === "START") {
    const showQuestion = !state.showQuestion;
    return {
      ...state,
      showQuestion,
    };
  }
  if (action.type === "SELECT_ANSWER") {
    const scoreCount =
      action.payload === state.questions[state.currentQuestionIdx].correctAnswer
        ? state.scoreCount + 1
        : state.scoreCount;
    return {
      ...state,
      currentAnswer: action.payload,
      scoreCount,
    };
  }
  if (action.type === "SKIP") {
    const showScore = state.currentQuestionIdx === state.questions.length - 1;
    const currentQuestionIdx = showScore
      ? state.currentQuestionIdx
      : state.currentQuestionIdx + 1;
    const answers = showScore
      ? []
      : shuffleAnswers(state.questions[currentQuestionIdx]);
    return {
      ...state,
      currentQuestionIdx,
      showScore,
      answers,
      currentAnswer: "",
    };
  }
  if (action.type === "RESTART") {
    return initialState;
  }

  return state;
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
