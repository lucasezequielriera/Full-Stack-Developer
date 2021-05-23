import React, {useState} from 'react';

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    function Validacion(event) {
        event.preventDefault();
        if (nombre && apellido && email && telefono && (password === rePassword)) {
            alert("Tu formulario se enviará automáticamente");
        } else {
            alert("Faltó ingresar algún dato!");
            Passwords();
        }
    }

    function Passwords() {
        if (password === rePassword) {
            alert("Las contraseñas son iguales!");
            console.log(password);
            console.log(rePassword);
        } else {
            alert("Tus contraseñas no coinciden");
            console.log(password);
            console.log(rePassword);
            return false;
        }
    }

    return(
        <div className="container formulario text-center p-3 shadow rounded bg-light bg-gradient">
            <div className="container">
                <h1 className="fw-light">¡Registrate con nosotros!</h1>
                <form onSubmit={Validacion} className="row">
                    <div className="input-group flex-nowrap mb-2">
                        <span className="input-group-text" id="addon-wrapping">Nombre</span>
                        <input type="text" className="form-control" placeholder="Ingresa tu nombre completo" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className="input-group flex-nowrap mb-2">
                        <span className="input-group-text" id="addon-wrapping">Apellido</span>
                        <input type="text" className="form-control" placeholder="Ingresa tu apellido completo" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setApellido(e.target.value)} />
                    </div>
                    <div className="input-group flex-nowrap mb-2">
                        <span className="input-group-text" id="addon-wrapping">Email</span>
                        <input type="email" className="form-control" placeholder="Ingresa tu email" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-group flex-nowrap mb-2">
                        <span className="input-group-text" id="addon-wrapping">Teléfono</span>
                        <input type="number" className="form-control" placeholder="Ingresa un teléfono de contacto" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setTelefono(e.target.value)} />
                    </div>
                    <div className="input-group flex-nowrap mb-2">
                        <span className="input-group-text" id="addon-wrapping">Password</span>
                        <input type="password" className="form-control" placeholder="Ingresa una contraseña" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-group flex-nowrap mb-2">
                        <span className="input-group-text" id="addon-wrapping">Confirmar Password</span>
                        <input type="password" className="form-control" placeholder="Vuelve a escribir la contraseña" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => setRePassword(e.target.value)} />
                    </div>
                    <input className="btn btn-success" type="submit" value="Enviar Formulario" />
                </form>
            </div>
        </div>
    );
}

export default Formulario;