import { useContext } from "react";
import { QuizContext } from "../context/quiz";


import './Perdeu.css'


const Perdeu = () => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div>
      <h2 id="perdeu">Fim de Jogo</h2>
      <p>Pontuação:{quizState.score} </p>
      <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
      <button onClick={()=> dispatch({type:'GAME'})}>Reiniciar</button>
    </div>
  );
};

export default Perdeu;
