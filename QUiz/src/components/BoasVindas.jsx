import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import Questionario from '../img/questionario.png'

const BoasVindas = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  return (
    <div className="my-8 space-y-4 text">
      <h2 className="text-2xl text-branquin">Seja bem-vindo</h2>
      <p className="font-semibold">Clique no botão abaixo para começar</p>
      <button onClick={() => dispatch({ type: 'CHANGE_STAGE' })}>
        Iniciar
      </button>
      <img className="max-w-sm -" src={Questionario} alt="Quiz inicio" />
    </div>
  )
}

export default BoasVindas
