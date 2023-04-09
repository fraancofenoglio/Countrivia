import React, { createContext, useState } from 'react'

//esto se agrega en el useContext
export const AppContext = createContext()

//este componente envuelve toda la app gracias a que ya contiene el .Provider, se agrego al archivo main.jsx
const AppContextProvider = ({children}) => {

    const [pais, setPais] = useState();
    const [iniciar, setIniciar] = useState(false);


  return (
    <AppContext.Provider value={{pais, setPais, iniciar, setIniciar}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider