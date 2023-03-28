import React from 'react'
import './SignUp.css'

const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault
    }
    return (
        <>
            <div className="container_sign">
                <img src="./src/assets/My project-1 (1).png" alt="logo_img" srcset="" className="logo2" />
                <p>Unete a la comunidad Lenden y conecta con mas personas, <br />Busca personas con tus mismos Hobbies para interactuar y concectar</p>
            </div>
            <form onSubmit={handleSubmit} className="form">
                <h2>Registrate</h2>
                <p className="text-form">Nombre</p>
                <input type="text" className="input" placeholder="Nombre(s)" />
                <p className="text-form">Apellido</p>
                <input type="text" className="input" placeholder="Apellido(s)" />
                <p className="text-form">Correo</p>
                <input type="text" className="input" placeholder="hola@example.com" />
                <p className="text-form">Contraseña</p>
                <input type="password" className="input" placeholder="Contraseña" name="password1" />
                <p className="text-form"> Repite tu Contraseña</p>
                <input type="password" className="input" placeholder="Contraseña" name="password2" />
                <button className="btn-form">Crea tu Cuenta</button>
            </form>
        </>
    )
}

export default SignUp
