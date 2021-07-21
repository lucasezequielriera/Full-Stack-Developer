import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Inicio.css'

export default function Inicio() {

    const [datos, setDatos] = useState([]);
    const json = 'https://jsonfy.com/items';

    useEffect(() => {
        fetch(json)
        .then(async (response) => {
            if (response.ok) setDatos(await response.json());
        });
    },[datos]);

    if (datos.length >= 1) {
        return (
            <div className="inicio">
                <h1>¡Bienvenidos/as a Mecommerce!</h1>
                <h4>Estos son los productos que tenemos para ofrecerte</h4>
                <ul className="productos d-flex">
                    {
                        datos.map((dato, index) => (
                        <li key={index} className="producto mx-5">
                            <p><img src={dato.photo_url} alt="imagen"/></p>
                            <p><strong>{dato.name}</strong></p>
                            <p>Descripción: {dato.description}</p>
                            <Link to={`./${index}`}><p>Precio: <strong>${dato.price}</strong></p></Link>
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