import { createContext, useReducer } from "react";
import questions from '../data/questions.js';


const STAGES = ['Start', 'Playing', 'End']

const initialState={
    gameStage: STAGES[0],
    questions,
    currentQuestion:0,
    score:0,
    esconderContinuar: false,
}

const quizReducer = (state, action)=>{
    switch(action.type){
        case "CHANGE_STAGE":
            return {
                ...state,
                gameStage: STAGES[1],
            };
        case "REODER_QUESTION":
            const reoderQuestion = questions.sort(()=>{
                return Math.random() - 0.5;
            });

            return{
                ...state,
                questions: reoderQuestion,
            };
        case "CHANGE_QUESTION":
            const proximaQuestion = state.currentQuestion + 1;
            let perdeu = false;

            if(!questions[proximaQuestion]){
                perdeu = true
            }

            return{
                ...state,
                currentQuestion: proximaQuestion, 
                
                gameStage : perdeu ? STAGES[2]: state.gameStage,
                esconderContinuar: false,
            }
        case "GAME":
            return initialState;
        
        case "CHECAR_OPCAO":
            if(state.esconderContinuar) return state;
            const answer = action.payload.answer;
            const option = action.payload.option;
            let currentResposta = 0;

            if(answer === option) currentResposta = 1;

            return{
                ...state,
                score: state.score + currentResposta,
                esconderContinuar:option,
            };


        default:
            return state
    }
}


export const QuizContext = createContext();

export const QuizProvider= ({children}) =>{
    const value =useReducer(quizReducer, initialState)
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};