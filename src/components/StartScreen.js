import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>Добре дошли!</h2>
      <h3>{numQuestions} въпроса, които ще проверят знанията ви по история</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Да започваме
      </button>
    </div>
  );
}

export default StartScreen;
