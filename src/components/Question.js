import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";
import OptionalText from "./OptionalText";
import OptionalImage from "./OptionalImage";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);

  return (
    <div>
      <h4>{question.question}</h4>
        {question.optionalImage && <OptionalImage url={question.optionalImage} /> }
        {question.optionalText && <OptionalText text={question.optionalText} /> }
      <Options question={question} />
    </div>
  );
}

export default Question;
