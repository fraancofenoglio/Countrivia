import { useState } from 'react'
import './App.css'
import ArgentinaTrivia from './utils/ArgentinaTrivia.js'

function App() {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [checkAnswer, setCheckAnswer] = useState("")
  console.log(questionIndex)
  
  return (
    <>
      <div>
        <label htmlFor="Seleccione país">¡Elegí el país!</label>
        <select name="Seleccione país" id="">
          <option value="ARG">Argentina</option>
          <option value="BRA">Brasil</option>
        </select>
      </div>

      <>  
        {
          <h2>{questionIndex+1 + ". " + ArgentinaTrivia[questionIndex].question}</h2>
        }
          <div>
            {ArgentinaTrivia[questionIndex].answers.map((ans, i) => (
              <button disabled={checkAnswer === "" ? false : true} onClick={() => {
                
                if(ans === ArgentinaTrivia[questionIndex].correct){
                  setCheckAnswer("¡Correcto!")
                } else {
                  setCheckAnswer("¡Incorrecto!")
                }
                // setCheckAnswer("")
                // setQuestionIndex(questionIndex+1)
              }} key={i}>{ans}</button>
            ))}
            <h3>
               {checkAnswer}
            </h3>
            {
              checkAnswer !== "" ? <button onClick={() => {
                setCheckAnswer("");
                setQuestionIndex(questionIndex+1);
              }}>Continuar</button> : ""
            }
          </div>
      </>


    </>
  )
}

export default App
