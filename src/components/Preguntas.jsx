import { useState } from "react";

const Preguntas = ({pais, setIniciar}) => {

    const [indiceRes, setIndiceRes] = useState(0);
    const [checkRespuesta, setCheckRespuesta] = useState("");
    const [correctas, setCorrectas] = useState(0);
    const [indiceSeleccionado, setIndiceSeleccionado] = useState();

    if (!pais) {
        return <h2>Elegi un país para comenzar</h2>
    }

  return (
    <div>
        {
          indiceRes >= 10 ?
           <>
            <h2>Respuestas correctas: {correctas}</h2>
            <button onClick={() => setIniciar(false)}>Volver</button>
          </>
           : 
           <>
              <h2 className='pregunta'>{indiceRes+1}- {pais[indiceRes].question}`</h2>
              <div>{

                pais[indiceRes].answers.map((ans, i) => (
                  <div className='respuestas' key={i}>
                    <button style={indiceSeleccionado === i ? {border:"3px solid #fff"}:{border: ""}} className='btn-respuesta' disabled={checkRespuesta === "" ? false : true} onClick={() => {
                      setIndiceSeleccionado(i)
                      if(ans === pais[indiceRes].correct){
                        setCheckRespuesta("¡Correcto!")
                        setCorrectas(correctas+1)
                      } else {
                        setCheckRespuesta("¡Incorrecto!")
                      }
                    }}>{ans}</button>
                  </div>
                ))
              }</div>
              <div className="continuar-flex">
                <p className={checkRespuesta === "" ? "" : checkRespuesta === "¡Correcto!" ? 'correcto' : 'falso'}>{checkRespuesta}</p>
                <button className='btn-continuar' onClick={() => {
                  if (checkRespuesta !== "") {
                    
                    setIndiceRes(indiceRes+1);
                    setCheckRespuesta("")
                    setIndiceSeleccionado(null)
                  }
                }}>Continuar</button>
              </div>

          </>
        }
    </div>
  )
}

export default Preguntas