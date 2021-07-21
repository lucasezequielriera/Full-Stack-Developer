import './DetalleProductos.css'
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'

export default function DetalleProductos() {

    const {id} = useParams();
    const [datos, setDatos] = useState([]);
    const json = 'https://jsonfy.com/items';

    useEffect(() => {
        fetch(json)
        .then(async (response) => {
            if (response.ok) setDatos(await response.json());
        });
    },[]);

    const detalleProducto = datos[id];

    console.log(id)
    console.log(datos)
    console.log(json)

    function comprar() {
        alert("Gracias por comprar el producto!")
    }

    if (datos.length >= 1) {
        return (
            <div className="detalle-productos">
                <h1>Este es el detalle del producto que elegiste!</h1>
                <div className="container-detalle-producto">
                    <div className="card-producto">
                        <p className="text-center"><img src={detalleProducto?.photo_url} alt="imagen" /></p>
                        <p><u>NOMBRE DEL EQUIPO</u>: {detalleProducto?.name}</p>
                        <p><u>DESCRIPCIÓN DEL EQUIPO</u>: {detalleProducto?.description}</p>
                        <p><u>VENDIDAS EN TOTAL</u>: {detalleProducto?.sales} unidades</p>
                        <p><u>PRECIO</u>: ${detalleProducto?.price}</p>
                        <button className="btn btn-success" onClick={comprar}><p>Comprar</p></button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <h1 style={{color: 'white', display: 'flex', width: '100%', height: 'calc(100vh - 60px)', justifyContent: 'center', alignItems: 'center'}}>Cargando...</h1>
        )
    }
}