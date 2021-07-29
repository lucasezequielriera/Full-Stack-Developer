import { useState } from 'react';
import './RegisterForm.css';
import firebase from '../../config/firebase';

export default function RegisterForm() {

    const [form, setForm] = useState({nombre:'', nacimiento:'', email:'', password:''})

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
            const userData = await firebase.auth.createUserWithEmailAndPassword(form.email, form.password);
            console.log("UserData", userData)
            const document = await firebase.db.collection("usuarios").add({
                nombre: form.nombre,
                nacimiento: form.nacimiento,
                email: form.email,
                password: form.password,
                userId: userData.user.uid
            })
            console.log("document", document)
        } catch(error) {
            console.log("Error", error)
            if(error.code === "auth/email-already-in-use") {
                alert("El email ya está en uso")
            }
        }
    }

    return(
        <div className="register-form">
            <h1>Registrate en nuestra página!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor=""></label>
                <input name="nombre" type="text" placeholder="Ingresa tu nombre completo" onChange={handleChange}/>
                <label htmlFor=""></label>
                <input name="nacimiento" type="text" placeholder="Ingresa tu fecha de nacimiento" onChange={handleChange}/>
                <label htmlFor=""></label>
                <input name="email" type="text" placeholder="Ingresa tu email" onChange={handleChange}/>
                <label htmlFor=""></label>
                <input name="password" type="text" placeholder="Ingresa una contraseña" onChange={handleChange}/>
                <label htmlFor=""></label>
                <input type="text" placeholder="Ingresa nuevamente la contraseña"/>
                <label htmlFor=""></label>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}