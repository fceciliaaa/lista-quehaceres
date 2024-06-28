import { useState } from "react";

const Lista = ({ toDoList, setToDoList }) => {

  const [nuevaTarea, setNuevaTarea] = useState(''); //para agregar una nueva tarea

  const actualizarLista = (index) => {
    const nuevaLista = [...toDoList]
    //hago una copia de la lista original para realizar cambios 
    //el index para identificar cual es el input que se esta cambiando
    nuevaLista[index].completado = !nuevaLista[index].completado;
    //aca invierto el valor de completado de la tarea en el índice especificado.
    //originalmente el valor es falso, al hacer clic, llamo a la función y actualizo su estado
    // es decir que ahora el nuevo valor sera true 
    setToDoList(nuevaLista)
  }


  const eliminarTarea = (e, index) => { //el evento y el index llegan al momento en que el usuario hace clic
    e.preventDefault();
    const listaEliminado = [...toDoList]
    //hago una copia del array original para no modificar sus valores directamente
    listaEliminado.splice(index, 1) //index es la posicion del elemento que deseo eliminar y 1 es la cantidad de elementos que quiero eliminar a partir del index dado
    setToDoList(listaEliminado) //se actualiza el estado de toDoList con la nueva lista que contiene el elemento eliminado
  }


  const agregarTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea !== '') { //si el input no esta vacio ser ejecuta la sgte linea
      const nuevaLista = [...toDoList, { tarea: nuevaTarea, completado: false }];
      setToDoList(nuevaLista);
      setNuevaTarea('') //actualiza de vuelta el estado dejando vacio el input al cargar una nueva tarea
    }
  }

  return (
    <>
      <form onSubmit={agregarTarea}>
        <div className="contenedorInput">
          <input
            className="contenidoInput"
            placeholder="Agregar nueva tarea"
            type="text"
            value={nuevaTarea}
            onChange={e => setNuevaTarea(e.target.value)} />
          <button className="btnAgregar" type="submit">Añadir</button>
        </div>

        {
          toDoList.map((item, index) =>
            <div >
              <label htmlFor="quehacer" className="listaTarea" style={{ textDecoration: item.completado ? 'line-through' : 'none' }}>
                {/* si el valor de item.completado es verdado ser tachara, si es falso no pasara nada */}
                {item.tarea}
                <input name="quehacer"
                  type="checkbox"
                  key={index}
                  onChange={(e) => actualizarLista(index)}
                // para actualizar el estado del checkbox considerando su index
                />
                <button className="btnEliminar" onClick={e => eliminarTarea(e, index)} >Eliminar</button>
              </label>
            </div>
          )
        }

      </form>
    </>

  )
}

export default Lista;

/* Para usar filter en la funcion de eliminar
const eliminarTarea = (e, index) => {
  e.preventDefault();
  const listaEliminado = toDoList.filter((item, i) => i !== index);
  setToDoList(listaEliminado);
};

crea una nueva lista listaEliminado que incluye todas las tareas excepto la que esta en el indice especificado 
luego actualiza el estado con esta nueva lista

*/