
import React, { useState } from 'react'
import uniqid from 'uniqid'

const Listadonombres = () => {

    const [nombre, setNombre] = useState("")
    const [listanombres, setlistanombres] = useState([])
    const [modoEdicion, setModoEdicion] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)

    const addNombre = (e) => {
        e.preventDefault()
        // setlistanombres(nombre)
        if (!nombre.trim()) {

            // console.log("El campo nombre esta vacio")
            setError('El campo nombre esta vacio')
            return
        }
        const nuevonombre = {
            id: uniqid(),
            tituloNombre: nombre
        }
        setlistanombres([...listanombres, nuevonombre])
        setNombre('')
        setError(null)

    }

    const deleteNombre = (id) => {

        const nuevaArray = listanombres.filter(item => item.id !== id)

        setlistanombres(nuevaArray)

    }

    const editar = (item) => {


        setModoEdicion(true)
        setNombre(item.tituloNombre)
        setId(item.id)
    }

    const editarNombre = (e) => {
        e.preventDefault()

        const nuevoArray = listanombres
            .map(item => item.id === id ? { id: id, tituloNombre: nombre } : item)

        setlistanombres(nuevoArray)
        setModoEdicion(false)
        setNombre(' ')


    }

    return (
        <div className="container">
            <h2>Aplicacion de crud basica</h2>
            <div class="col">
                <div className="row">
                    <div className="col">
                        <h2>Listado nombres</h2>
                        <ul className="list-group">

                            {/* <li className="list-group-item"> Item 1</li> */}
                            {

                                listanombres.map(item =>
                                    <li key="item.id" className="list-group-item">
                                        {item.tituloNombre}

                                        <button className="btn btn-danger float-end"
                                            onClick={() => { deleteNombre(item.id) }}
                                        >
                                            Borrar
                                        </button>

                                        <button className="btn btn-info float-end"
                                            onClick={() => { editar(item) }}
                                        >
                                            Editar
                                        </button>
                                    </li>

                                )
                            }
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Formulario para añadir nombres</h2>
                        {/* <form onSubmit={(e) => addNombre(e)} className="form-group"> */}
                        <form onSubmit={modoEdicion ? editarNombre : addNombre} className="form-group">
                            <input
                                onChange={(e) => { setNombre(e.target.value) }}
                                className="form-control mb-3" type="text"
                                placeholder="Introduce le nombre"
                                value={nombre}
                            />
                            <input
                                className="btn btn-info btn-block mb-3"
                                type="submit"
                                value={modoEdicion ? 'Editar nombre' : 'Registrar nombre'} />
                        </form>
                        {
                            error != null ? (
                                <div className="alert alert-danger">
                                    {error}
                                </div>

                            ) :
                                (
                                    <div></div>
                                )

                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listadonombres;
