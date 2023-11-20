
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './BoasVindas.css'
import Questionario from '../img/questionario.png'

const BoasVindas = () => {
  const [quizState, dispatch]= useContext(QuizContext)
  return (
    <div id='boasvindas'>
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar</p>
      <button onClick={()=> dispatch({type: "CHANGE_STAGE"})}>Iniciar</button>
      <img src={Questionario} alt="Quiz inicio" />
      
    </div>
  );
};

export default BoasVindas;
