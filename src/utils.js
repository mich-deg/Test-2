export const shuffleAnswers = (question) => {
  if (!question) {
    return [];
  }
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];
  return unshuffledAnswers
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

// export const shuffleAnswers = (question) => {
//   const getRandomInt = (max) => {
//     return Math.floor(Math.random() * Math.floor(max));
//   };
//   if (!question) {
//     return [];
//   }
//   let unshuffledAnswers = [...question.incorrectAnswers];
//   unshuffledAnswers.splice(
//     getRandomInt(question.incorrectAnswers.length),
//     0,
//     question.correctAnswer
//   );
// };
