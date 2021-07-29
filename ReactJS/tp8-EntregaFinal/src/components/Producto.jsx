import { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../config/firebase';


export default function Producto(props) {

    const { datos } = props;
    const { nombre, precio, descripcion, imagen, id } = datos;
    const [producto, setProducto] = useState({ nombre:'', descripcion:'', precio:'', imagen:'', id:null })
    // const modificar = (props.modificar === true ? true : false);

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      console.log(producto)
      setProducto({...producto, [name]:value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("HandleSubmit", producto)
        try {
          let productoNuevo = null;
          if(producto.id === null) {
            productoNuevo = await firebase.db.collection("productos")
            .add(producto)
            console.log(productoNuevo)
          } else {
            productoNuevo = await firebase.db.doc(`productos/${producto.id}`)
            .set(producto)
          }
        } catch(error) {
            console.log("Error", error)
        }
    }

    const handleClickModificar = (producto) => {
      console.log(producto)
      setProducto(producto)
      console.log(producto.id)
    }

    const buyProduct = (producto) => {
      const cursoElegido = producto;
      localStorage.setItem('cursoElegido', JSON.stringify(cursoElegido));
    }
    
    return (
        <>
        <li key={props.id} className="producto mx-5">
            <p><img src={imagen} alt="imagen"/></p>
            <p><strong>{nombre}</strong></p>
            <p>Descripción: {descripcion}</p>
            <Link to={`./${id}`} onClick={(e) => buyProduct(datos)}><p>Precio: <strong>${precio}</strong></p></Link>
            <button onClick={(e) => handleClickModificar(datos)} type="button" className='btn btn-dark' style={{margin: 0, position: 'absolute', bottom: 50, left: 0, right: 0, width: '100%', borderRadius: 0}} data-bs-toggle="modal" data-bs-target={`#exampleModal${producto.id}`}>Modificar</button>
        </li>

        <form onSubmit={handleSubmit}>
          <div className="modal fade" id={`exampleModal${producto.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel" style={{color: 'black'}}>Edición de Producto</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">URL Imagen</span>
                      <input name="imagen" value={producto.imagen} type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" onChange={handleChange} />
                  </div>
                  <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">Nombre de producto</span>
                      <input name="nombre" value={producto.nombre} type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"  onChange={handleChange}/>
                  </div>
                  <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">Descripción</span>
                      <input name="descripcion" value={producto.descripcion} type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" onChange={handleChange} />
                  </div>
                  <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">$</span>
                      <input name="precio" value={producto.precio} type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" onChange={handleChange} />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success">Guardar cambios</button>
                </div>
              </div>
            </div>
          </div>
        </form>
        
        </>
    )
}