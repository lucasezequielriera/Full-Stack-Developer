import './RegisterForm.css'

export default function RegisterForm() {
    return(
        <div className="register-form">
            <h1>Registrate en nuestra página!</h1>
            <label htmlFor=""></label>
            <input type="text" placeholder="Ingresa tu nombre completo"/>
            <label htmlFor=""></label>
            <input type="text" placeholder="Ingresa tu fecha de nacimiento"/>
            <label htmlFor=""></label>
            <input type="text" placeholder="Ingresa tu email"/>
            <label htmlFor=""></label>
            <input type="text" placeholder="Ingresa una contraseña"/>
            <label htmlFor=""></label>
            <input type="text" placeholder="Ingresa nuevamente la contraseña"/>
            <label htmlFor=""></label>
            <input type="submit" value="Enviar" />
        </div>
    )
} 