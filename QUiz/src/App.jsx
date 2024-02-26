import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

import BoasVindas from './components/BoasVindas.jsx'
import Question from './components/Question.jsx'

import Perdeu from './components/Perdeu.jsx'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)
  useEffect(() => {
    dispatch({ type: 'REODER_QUESTION' })
  }, [])
  return (
    <main className="flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold my-4 text-branquin">
        Quiz de Programação
      </h1>
      {quizState.gameStage === 'Start' && <BoasVindas />}
      {quizState.gameStage === 'Playing' && <Question />}
      {quizState.gameStage === 'End' && <Perdeu />}
    </main>
  )
}

export default App
