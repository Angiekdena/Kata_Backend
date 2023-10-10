import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Layout from "../componentes/Layout";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = () => {
        const API_URL = import.meta.env.VITE_API_URL
        fetch(`${API_URL}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                if(json && json.success == true) {
                    window.sessionStorage.setItem('token', json.data);
                    alert('inicio correcto')
                    navigate("/MyNotes");
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

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    };

    return (
<Layout>
    <div className="container text-center">
{
        <main className="form-signin w-80 m-auto">
        <img className="mb-4 m-30" src="https://www.lostrompos.com.mx/assets/user-default-1534028036fdbd765592addc5403fc97836cbb39353a38fa06a4be250a1ca874.jpg" alt="" width="72" height="72"/>
        <h1 className="h3 fw-normal">Bienvenid@ a tu Sistema de Notas</h1>

        <form className="my-3 p-3" onSubmit={handleSubmit}>
            <h3 className="h3 mb-2 fw-normal">Inicia Sesión</h3>
            <div className="form-floating mb-3">
                <input value={email} type="email" className="form-control"
                onChange={handleEmail}
                id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input value={password} type="password" className="form-control" 
                onChange={handlePassword} 
                id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="btn btn-primary w-100 py-2" type="submit" >Sign in</button>
            <p className="mt-5 mb-3 text-body-secondary">© AngieCadena - 2023</p>
        </form>
    </main> }
    </div>
    </Layout>
    )
    
}