import React from 'react';

const Formulario = () => {
    return(
        <div className="container formulario text-center p-3 shadow rounded bg-light bg-gradient">
            <div className="container">
                <h1 className="fw-light">¡Registrate con nosotros!</h1>
                <form className="row">
                    <div className="input-group flex-nowrap mb-2">
                        <span className="input-group-text" id="addon-wrapping">Nombre</span>
                        <input type="text" className="form-control" placeholder="Ingresa tu nombre completo" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap mb-2">
                        <span className="input-group-text" id="addon-wrapping">Apellido</span>
                        <input type="text" className="form-control" placeholder="Ingresa tu apellido completo" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap mb-2">
                        <span className="input-group-text" id="addon-wrapping">Email</span>
                        <input type="email" className="form-control" placeholder="Ingresa tu email" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap mb-2">
                        <span className="input-group-text" id="addon-wrapping">Teléfono</span>
                        <input type="number" className="form-control" placeholder="Ingresa un teléfono de contacto" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap mb-2">
                        <span className="input-group-text" id="addon-wrapping">Password</span>
                        <input type="password" className="form-control" placeholder="Ingresa una contraseña" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap mb-2">
                        <span className="input-group-text" id="addon-wrapping">Confirmar Password</span>
                        <input type="password" className="form-control" placeholder="Vuelve a escribir la contraseña" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <input className="btn btn-success" type="submit" value="Enviar Formulario" />
                </form>
            </div>
        </div>
    );
}

export default Formulario;