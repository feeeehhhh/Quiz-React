import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const Perdeu = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className="space-y-4">
      <h2 className="my-16 text-xl font-semibold ">Fim de Jogo</h2>
      <p className="text-branquin">
        Pontuação: {''}
        {quizState.score}
      </p>
      <p className="text-purple-600">
        Você acertou {quizState.score} de {quizState.questions.length}{' '}
        perguntas.
      </p>
      <button onClick={() => dispatch({ type: 'GAME' })}>Reiniciar</button>
    </div>
  )
}

export default Perdeu
