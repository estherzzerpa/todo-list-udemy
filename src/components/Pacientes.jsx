
const Pacientes = ({paciente, setPaciente, eliminarCita}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente



  return (
    <div className="mx-5 my-10 bg-white shadow-md py-10 px-5 rounded-md">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:
        <span className="normal-case font-normal"> {nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:
        <span className="normal-case font-normal"> {propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email:
        <span className="normal-case font-normal"> {email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta:
        <span className="normal-case font-normal"> {fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:
        <span className="normal-case font-normal"> {sintomas}</span>
        </p>
        <div className="flex justify-between">
          <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-md " 
          onClick={()=> setPaciente(paciente)}
          >Editar</button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-md "
          onClick={()=>eliminarCita(id)}
        >borrar</button>

        </div>
  </div>

  )
}

export default Pacientes