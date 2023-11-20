import { useContext, useEffect } from "react"
import { QuizContext } from "./context/quiz"

import BoasVindas from "./components/BoasVindas.jsx"
import Question from "./components/Question.jsx"
import Perdeu from "./components/Perdeu.jsx"

import './App.css'





function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  useEffect(()=>{
    dispatch({type: "REODER_QUESTION"})
  },[])
  return (
   
      <div className="App">
        <h1>Quiz de Programação</h1>
        {quizState.gameStage === 'Start' && <BoasVindas/>}
        {quizState.gameStage === 'Playing' && <Question/>}
        {quizState.gameStage === 'End' && <Perdeu/>}
      </div>

  )
}

export default App
