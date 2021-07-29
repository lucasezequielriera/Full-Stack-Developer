import { useState } from 'react';
import firebase from '../../config/firebase';
import './AgregarProductos.css';

const AgregarProductos = () => {

    const [producto, setProducto] = useState({ nombre:'', descripcion:'', precio:'', imagen:'' })

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
            const productoNuevo = await firebase.db.collection("productos")
            .add(producto)
            console.log(productoNuevo)
        } catch(error) {
            console.log("Error", error)
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexFlow: 'column nowrap' , marginTop: '30px' }}>
            <h1 className="fw-lighter" style={{ alignSelf: 'center', marginBottom: '20px' }}>Agregar Productos</h1>
            <form className="add-product-form" onSubmit={handleSubmit}>
                <label htmlFor=""></label>
                <input name="nombre" value={producto.nombre} type="text" placeholder="Nombre de producto" onChange={handleChange}/>
                <label htmlFor=""></label>
                <input name="descripcion" value={producto.descripcion} type="text" placeholder="Descripción de producto" onChange={handleChange}/>
                <label htmlFor=""></label>
                <input name="imagen" value={producto.imagen} type="text" placeholder="URL de imagen" onChange={handleChange}/>
                <label htmlFor=""></label>
                <input name="precio" value={producto.precio} type="text" placeholder="Precio" onChange={handleChange}/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default AgregarProductos;