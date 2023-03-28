import React from 'react'

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="form2">
                <img src="./src/assets/My project-1 (1).png" alt="logo_img" srcset="" className="logo" />
                <h2>Inicia Sesion</h2>
                <p className="text-form">Correo</p>
                <input type="text" className="input" placeholder="hola@example.com" />
                <p className="text-form">Contraseña</p>
                <input type="password" className="input" placeholder="Contraseña" name="password1" />
                <button className="btn-form">Inicia Sesion</button>
            </form>
        </>
    )
}

export default Login
