import { Link } from 'react-router-dom';

export default function Producto(props) {

    const { datos } = props;
    const { nombre, precio, descripcion, imagen, id } = datos;
    
    return (
        <li key={id} className="producto mx-5">
            <p><img src={imagen} alt="imagen"/></p>
            <p><strong>{nombre}</strong></p>
            <p>Descripción: {descripcion}</p>
            <Link to={`./${id}`}><p>Precio: <strong>${precio}</strong></p></Link>
            <button className='btn btn-dark' style={{margin: 0, position: 'absolute', bottom: 50, left: 0, right: 0, width: '100%', borderRadius: 0}}>Modificar</button>
        </li>
    )
}