import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Opcoes.css";

const Opcoes = ({ option, selecionarOpcao, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div
      className={`opcoes ${
        quizState.esconderContinuar && option === answer ? "correta" : ""
      }${quizState.esconderContinuar && option !== answer ? "errada" : ""}`}
      onClick={() => selecionarOpcao()}
    >
      <p>{option}</p>
    </div>
  );
};

export default Opcoes;
