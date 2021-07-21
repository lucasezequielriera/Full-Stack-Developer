import './LoginForm.css'

export default function LoginForm() {
    return(
        <div className="login-form">
            <h1>Entrá a tu perfil!</h1>
            <label htmlFor=""></label>
            <input type="text" placeholder="Ingresa tu email"/>
            <label htmlFor=""></label>
            <input type="text" placeholder="Ingresa tu contraseña"/>
            <label htmlFor=""></label>
            <input type="submit" value="Enviar" />
        </div>
    )
}