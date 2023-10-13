import { useState, useEffect } from 'react'
import Layout from '../componentes/Layout'
import Card from '../componentes/Card'
import ButtonNav from '../componentes/ButtonNav';

function MyNotes() {
const [notes, setNotes] = useState([]);

useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL
    fetch(`${API_URL}/note`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${window.sessionStorage.getItem('token')}`,
        }
    })
    .then(response => response.json())
    .then(data => setNotes(data))
}, [])
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

return (
    <Layout>
        {
            notes?.map((note)=>(
                <Card key={note._id} data={note} />
             ))
        }
        <ButtonNav texto= "Crear una Nota" ruta="/Notes" styles="btn btn-primary me-3"/>
        <ButtonNav texto= "Salir" ruta="/login" styles="btn btn-info"/>
    </Layout>
)
}


export default MyNotes