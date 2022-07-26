import React from "react"
import { nanoid } from 'nanoid'

export default function Quiz(props){

    const suggestionButtons= props.suggestions.map( suggestion => {

        let nameOfClass = "suggestion-button"

        if(props.runCheck){
            if( suggestion === props.selectedAnswer && suggestion === props.trueValue){
                nameOfClass += " true"
            } else if(suggestion === props.selectedAnswer){
                nameOfClass += " false"
            }else if(suggestion === props.trueValue){
                nameOfClass += " true"
            }
        } else {
            if( suggestion === props.selectedAnswer){
                nameOfClass += " clicked"
            }
        }

        return (
            <button key={nanoid()}
                    onClick={() => {props.handleSelectedAnswer(props.id, suggestion)}} 
                    className={nameOfClass}
                    disabled={props.runCheck}>{suggestion}</button>
        )
    })
    

   
    return(
        <div className="quiz-container">
            <h1>{props.title}</h1>
            <div className="quiz-suggestions">
                {suggestionButtons}
            </div>
            
        </div>
    )
}