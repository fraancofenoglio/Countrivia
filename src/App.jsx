import { useState } from 'react'
import './App.css'
import ArgentinaTrivia from './utils/ArgentinaTrivia.js'

function App() {

  const [questionIndex, setQuestionIndex] = useState(0);
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
              <button onClick={() => {
                setQuestionIndex(questionIndex+1)
              }} key={i}>{ans}</button>
            ))}
          </div>
      </>


    </>
  )
}

export default App
