import {useState} from 'react';
import firebase from '../../config/firebase'
import './LoginForm.css';

export default function LoginForm() {

    const [form, setForm] = useState({email:'', password:''})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(form)
        setForm({...form, [name]:value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("HandleSubmit", form)
        try {
            const userDataValidate = await firebase.auth.signInWithEmailAndPassword(form.email, form.password)
            console.log(userDataValidate)
            alert("Bienvenido/a")
        } catch(error) {
            console.log("Error", error)
            if(error.code === "auth/invalid-email") {
                alert("Email o contraseña inválido")
            }
        }
    }

    return(
        <div className="login-form">
            <h1>Entrá a tu perfil!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor=""></label>
                <input name="email" type="text" placeholder="Ingresa tu email" onChange={handleChange}/>
                <label htmlFor=""></label>
                <input name="password" type="text" placeholder="Ingresa tu contraseña" onChange={handleChange}/>
                <label htmlFor=""></label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}