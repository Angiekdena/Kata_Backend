import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Layout from "../componentes/Layout";


export default function CreateUser() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const create = () => {
        const API_URL = import.meta.env.VITE_API_URL
        fetch(`${API_URL}/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
                "name": name
            })
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                if(json && json.success == true) {
                    alert('Usuario Creado Correctamente')
                    navigate("/Login");
                } else {
                    alert('Datos incorrectos');
                }
                
            })
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }
    const handleName = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        create();
    };

    return (
<Layout>
<div className="modal-content rounded-4 shadow">
    <div className="container text-center">
        <main className="form-signin w-80 m-auto p-">
        <img className="mb-4 m-30" src="https://cdn-icons-png.flaticon.com/512/7803/7803926.png" alt="" width="72" height="72"/>
        <h1 className="h3 fw-normal">Registrate</h1>
        <h3 className="h3 fw-normal">¡Es rapido y facil!</h3>
        <div className="modal-body p-5 pt-0">
        <form className="my-3 p-3" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
                <input value={name} type="name" className="form-control" 
                onChange={handleName} 
                id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Nombre Completo</label>
            </div>
            <div className="form-floating mb-3">
                <input value={email} type="email" className="form-control"
                onChange={handleEmail}
                id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Correo Electronico</label>
            </div>
            <div className="form-floating mb-3">
                <input value={email} type="email" className="form-control"
                onChange={handleEmail}
                id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Correo Electronico</label>
            </div>
            <div className="form-floating mb-3">
                <input value={password} type="password" className="form-control" 
                onChange={handlePassword} 
                id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Contraseña</label>
            </div>

            <button className="btn btn-primary w-100 py-2" type="submit" >Registrarte</button>
            <p className="mt-5 mb-3 text-body-secondary">© AngieCadena - 2023</p>
        </form>
        </div>
    </main>
    </div>
    </div>
    </Layout>
    )
    
}