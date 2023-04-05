import { useState } from 'react'
import './App.css'
import ArgentinaTrivia from './utils/ArgentinaTrivia.js';
import BrasilTrivia from './utils/BrasilTrivia.js'
import Header from './components/Header';
import Preguntas from './components/Preguntas';

function App() {

  const [pais, setPais] = useState(ArgentinaTrivia);
  console.log("preguntas: ", pais)
  console.log(ArgentinaTrivia)

  return (
    <>
      <Header/>
      <div className='elegir'>
        <label htmlFor="Seleccione país">¡Elegí el país!</label>
        <select name="Seleccione país" id="" onChange={(e) => {
          setPais(JSON.parse(e.target.value))
          console.log(e.target.value)
        }}>
          <option disabled>-- Seleccione --</option>
          <option value={JSON.stringify(ArgentinaTrivia)}>Argentina</option>
          <option value={JSON.stringify(BrasilTrivia)}>Brasil</option>
        </select>
      </div>

      <Preguntas pais={pais}/>


      {/* <>  
        {
          <h2 className='pregunta'>{questionIndex+1 + ". " + ArgentinaTrivia[questionIndex].question}</h2>
        }
          <div className='respuestas'>
            {ArgentinaTrivia[questionIndex].answers.map((ans, i) => (
              
              <button className='btn-respuesta' disabled={checkAnswer === "" ? false : true} onClick={() => {
                
                if(ans === ArgentinaTrivia[questionIndex].correct){
                  setCheckAnswer("¡Correcto!")
                } else {
                  setCheckAnswer("¡Incorrecto!")
                }
  
              }} key={i}>{ans}</button>
            ))}
            <h3>
               {checkAnswer}
            </h3>
            {
              checkAnswer !== "" ? <button className='btn-continuar' onClick={() => {
                setCheckAnswer("");
                if (questionIndex === 9) {
                  setMessage("Listo!")
                }
                setQuestionIndex(questionIndex+1);
              }}>Continuar</button> : ""
            }
          </div>

          <h4>{message}</h4>
      </> */}


    </>
  )
}

export default App
