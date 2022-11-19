
import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState("")
  const [propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [sintomas, setSintomas] = useState("")

  const [error, setError] = useState(false)
  
// hacer el render 
  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
     setNombre(paciente.nombre)
     setPropietario(paciente.propietario)
     setEmail(paciente.email)
     setFecha(paciente.fecha)
     setSintomas(paciente.sintomas)
    }
  }, [paciente])

  // GENERAR ID UNICO

  const generarId = ()=>{
    const fecha = Date.now().toString(36)
    const random = Math.random().toString(36).substr(2)

    console.log(random)

    return fecha + random
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    if([nombre, propietario, email, fecha, sintomas].includes("")){
      console.log("todos los campos son obligatorios")
      setError(true)
      return;
    }
    setError(false)

    // obj de pacientes
    const objPacientes = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }
 
    if(paciente.id){

      objPacientes.id = paciente.id

      const updateArr = pacientes.map( ( pacienteState)=>{
        return pacienteState.id === paciente.id  ? objPacientes : pacienteState
      })



      setPacientes(updateArr)
      setPaciente({})

    }else{
      objPacientes.id =  generarId()
      setPacientes([...pacientes, objPacientes])

    }
    console.log(paciente.id)

    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")
  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-2xl text-center">Segimiento de Pacientes</h2>

        <p className="text-center  mt-5 text-lg">
          Añade pacientes y {" "}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md mt-5 rounded-lg mx-6 py-10 px-5 mb-10"
        >
          {
             error && <Error >
                        <p>Todos los campos son obligatorios</p>
                      </Error>
          }
       
            <div className="mb-5">
              <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
              <input 
              id="mascota"
               type="text"
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange = {(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario:</label>
              <input 
              id="propietario"
              type="text"
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange = {(e) => setPropietario(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email:</label>
              <input 
              id="email"
              type="text"
              placeholder="Email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange = {(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta:</label>
              <input 
              id="alta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fecha}
              onChange = {(e) => setFecha(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Sintomas:</label>
              <textarea
                id="sintomas"
                className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
                placeholder="Describe los sintomas"
                value={sintomas}
                onChange = {(e) => setSintomas(e.target.value)}
              />
                <input type="submit"
                className="bg-indigo-600 w-full p-3 rounded-sm text-white font-bold uppercase hover:bg-indigo-800 transition-all cursor-pointer"
                value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
                />
              
            </div>
            
        </form>
    </div>

  )
}

export default Formulario

