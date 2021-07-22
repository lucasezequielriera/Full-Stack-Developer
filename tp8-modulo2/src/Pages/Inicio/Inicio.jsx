import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Inicio.css';
import firebase from '../../config/firebase';
// import { getProductos } from '../../services/ItemServices';

export default function Inicio() {

    const [datos, setDatos] = useState([]);

    // useEffect(() => {
    //     // Fetch con service //
    //     getProductos()
    //     .then(({data}) => {
    //         setDatos(data.data)
    //     })
    //     .catch((error) => {
    //         console.log("error", error)}
    //     )
    //     // Mostrar db en consola //
    //     console.log(firebase.database())
    // },[]);

    useEffect(() => {
        const traerProductos = async () => {
            try {
                const productos = await firebase.db.collection("productos").get()
                setDatos(productos.docs)
                console.log(productos.docs)
            } catch(error) {
                console.log("error", error)
            }
        }
        traerProductos()
    }, [])
    console.log(datos)

    if (datos.length >= 1) {
        return (
            <div className="inicio">
                <h1>¡Bienvenidos/as a Mecommerce!</h1>
                <h4>Estos son los productos que tenemos para ofrecerte</h4>
                <ul className="productos d-flex">
                    {
                        datos.map(producto => (
                        <li key={producto.id} className="producto mx-5">
                            <p><img src={producto.data().imagen} alt="imagen"/></p>
                            <p><strong>{producto.data().nombre}</strong></p>
                            <p>Descripción: {producto.data().descripcion}</p>
                            <Link to={`./${producto.id}`}><p>Precio: <strong>${producto.data().precio}</strong></p></Link>
                        </li>
                        ))
                    }
                </ul>
            </div>
        )
    } else {
        return (
            <h1 style={{color: 'white', display: 'flex', width: '100%', height: 'calc(100vh - 60px)', justifyContent: 'center', alignItems: 'center'}}>Cargando...</h1>
        )
    }
}