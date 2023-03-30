import React, { useState } from 'react';
import axios from 'axios';
import "./SignUp.css"

const SignUp = () => {
  const [form, setForm] = useState({
    "name": '',
    "lastName": '',
    "email": '',
    "password": '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5050/api/users', form)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="container_sign">
        <img src="./src/assets/My project-1 (1).png" alt="logo_img" srcset="" className="logo2" />
        <p>Let's Lenden together!</p>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <h2>Registrate</h2>
        <p className="text-form">Nombre</p>
        <input type="text" className="input" placeholder="Nombre(s)" name="name" value={form.name} onChange={handleChange} />
        <p className="text-form">Apellido</p>
        <input type="text" className="input" placeholder="Apellido(s)" name="lastName" value={form.lastName} onChange={handleChange} />
        <p className="text-form">Correo</p>
        <input type="text" className="input" placeholder="hola@example.com" name="email" value={form.email} onChange={handleChange} />
        <p className="text-form">Contraseña</p>
        <input type="password" className="input" placeholder="Contraseña" name="password" value={form.password} onChange={handleChange} />
        <button type="submit" className="btn-form" onClick={handleSubmit}>Crea tu Cuenta</button>
      </form>
    </>
  );
};

export default SignUp;