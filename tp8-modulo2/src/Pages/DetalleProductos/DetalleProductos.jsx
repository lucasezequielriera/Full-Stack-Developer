import './DetalleProductos.css'
import { useState, useEffect } from 'react';



export default function DetalleProductos() {

    const [datos, setDatos] = useState();
    // const json = 'https://jsonfy.com/items';

    // useEffect(() => {
    //     fetch(json)
    //     .then(async (response) => {
    //         if (response.ok) setDatos(await response.json());
    //     });
    // },[]);

    useEffect(() => {
        setDatos(JSON.parse(localStorage.getItem('cursoElegido')));
    }, [])

    function comprar() {
        alert("Gracias por comprar el producto!")
    }

    if (datos) {
        return (
            <div className="detalle-productos">
                <h1>Este es el detalle del producto que elegiste!</h1>
                <div className="container-detalle-producto">
                    <div className="card-producto">
                        <p className="text-center"><img src={datos?.imagen} alt="imagen" /></p>
                        <p><u>NOMBRE DEL EQUIPO</u>: {datos?.nombre}</p>
                        <p><u>DESCRIPCIÓN DEL EQUIPO</u>: {datos?.descripcion}</p>
                        <p><u>SKU</u>: {datos?.id}</p>
                        <p><u>PRECIO</u>: ${datos?.precio}</p>
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