import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState, useEffect } from "react"

const pacientesLocal = JSON.parse(localStorage.getItem('pacientes'));

function App() {


  const [pacientes, setPacientes] = useState(pacientesLocal || [])
  const [paciente, setPaciente] = useState({})


  // useEffect(()=>{

  //       setPacientes(pacientesLocal);
  //       console.log(pacientesLocal)
    
  //   console.log("hola")

  // }, [])  


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))

  }, [pacientes]);  
  
  const eliminarCita = (id)=>{

    const filtradoArr = pacientes.filter( iterado =>{
        return iterado.id !== id
    })

    setPacientes(filtradoArr)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="md:flex mt-16">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
          paciente={paciente}
        />
        {/* // si le pasa un prop al componete, ir al componente y pasarselo como parametro */}
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente = {setPaciente}
          eliminarCita={eliminarCita}
        />
      </div>
    
    </div>
  )
}

export default App

