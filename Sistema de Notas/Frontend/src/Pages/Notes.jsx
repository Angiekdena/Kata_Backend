import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../componentes/Layout";


function CreateNote() {    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const { noteId } = useParams();

    const fetchData=()=>{        
        if(noteId){
            console.log('ejecuta get')
            const API_URL = import.meta.env.VITE_API_URL
            fetch(`${API_URL}/note/${noteId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${window.sessionStorage.getItem('token')}`,
                }
            })
            .then(response => response.json())
            .then(data => {
                if(data && data.success && data.data){                    
                    setTitle(data.data.title)
                    setDescription(data.data.description)
                }
            })
    }
    }

    useEffect(() => {
        console.log('useEffect ejecutado');
        fetchData();
      }, []);

    const create = () => {
        const ruta=noteId?`/note/${noteId}`:'/note';
        const method= noteId?'PATCH':'POST';
        const API_URL = import.meta.env.VITE_API_URL
        fetch(`${API_URL}${ruta}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${window.sessionStorage.getItem('token')}`,
            },
            body: JSON.stringify({
                "title": title,
                "description": description,
            })
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                if(json && json.success == true) {
                    alert('Nota Creada Correctamente')
                    navigate("/MyNotes");
                } else {
                    alert('Datos incorrectos');
                }
                
            })
    };

    const handleTitle = (e) => {
        setTitle(e.target.value);
        console.log(e.target.value);
    }
    const handleDescription = (e) => {
        setDescription(e.target.value);
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
<main className="form-signin w-80 m-auto p-5">
<form className="my-3 p-3" onSubmit={handleSubmit}>
    <div className="form-floating mb-3">
        <input value={title} type="title" className="form-control"
        onChange={handleTitle}
        id="floatingInput" placeholder="Titulo" />
        <label htmlFor="floatingInput">Titulo</label>
    </div>
    <div className="form-floating mb-3">
        <input value={description} type="description" className="form-control"
        onChange={handleDescription}
        id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Descripcion</label>
    </div>

    <button className="btn btn-primary w-100 py-2" type="submit" >{noteId?'Editar nota':'Crear Nota'}</button>
    <p className="mt-5 mb-3 text-body-secondary">© AngieCadena - 2023</p>
</form>
</main>
</div>
</div>
</Layout>
    )
    
}

export default CreateNote