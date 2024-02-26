import React, { useContext } from 'react'

import { QuizContext } from '../context/quiz'

const Opcoes = ({ option, selecionarOpcao, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className="m-4 ">
      <div
        className={`hover:bg-indigo-900 hover:opacity-90 rounded-md ${
          quizState.esconderContinuar && option === answer ? 'bg-green-600' : ''
        }${quizState.esconderContinuar && option !== answer ? 'bg-red-600' : ''}`}
        onClick={() => selecionarOpcao()}
      >
        <p>{option}</p>
      </div>
    </div>
  )
}

export default Opcoes
