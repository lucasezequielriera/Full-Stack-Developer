import { useEffect, useState } from 'react'
import './Inicio.css';
import firebase from '../../config/firebase';
import Producto from '../../components/Producto';
// import { getProductos } from '../../services/ItemServices';

export default function Inicio() {

    const [datos, setDatos] = useState([]);
    const [reload, setReload] = useState(false);

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
                setReload(true)
                // Loading(false) Esto se hace para que inicie en "true" y cuando se termina la consulta, se pone el "false" //
            } catch(error) {
                console.log("error", error)
            }
        }
        traerProductos()
    }, [reload])
    console.log(datos)

    if (datos.length >= 1) {
        return (
            <div className="inicio">
                <h1>¡Bienvenidos/as a Mecommerce!</h1>
                <h4>Estos son los productos que tenemos para ofrecerte</h4>
                <ul className="productos d-flex">
                    {
                        datos.map(producto => <Producto datos={{ ...producto.data(), id:producto.id }} key={producto.id} />)
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