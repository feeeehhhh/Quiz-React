import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Opcoes from "./Opcoes";

import "./Question.css";

const Question = () => {
  const onContinuar = (option) => {
    dispatch({
      type: "CHECAR_OPCAO",
      payload: {answer: currentQuestion.answer, option },
    });
  };

  const [quizState, dispatch] = useContext(QuizContext);

  const currentQuestion = quizState.questions[quizState.currentQuestion];

  console.log(quizState);
  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div className="options-container">
        {currentQuestion.options.map((option) => (
          <Opcoes
            option={option}
            key={option}
            answer={currentQuestion.answer} selecionarOpcao={() => onContinuar(option)}
          />
        ))}
      </div>
      {quizState.esconderContinuar && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default Question;
