import { useState } from "react"

function App(){
  
  const [message, setMessage] = useState("Pomba")

  return (
    <div>
      <h1>{message}</h1>
      <button 
        onClick={() =>{
          setMessage("Olá Cliquei Aqui")
        }}
      >
        Mudar Mesagem
      </button>
    </div>
  
  
  
  )
}
export default App