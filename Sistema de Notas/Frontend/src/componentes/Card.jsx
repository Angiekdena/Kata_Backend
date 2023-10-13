//import { useNavigate } from "react-router-dom"
import ButtonNav from "./ButtonNav"

const Card = (data) => { 
    //const navigate = useNavigate()

const eliminar=(id)=>{
        const API_URL = import.meta.env.VITE_API_URL
        fetch(`${API_URL}/note/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${window.sessionStorage.getItem('token')}`,
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
}

    return(
    <div className="col">
    <div className="card h-100 border-dark mb-5">
    <div className="card-body">
        <h5 className="card-title card-header border-dark">{data.data.title}</h5>
        <p className="card-text">{data.data.description}</p>
    </div>
    <div className="card-footer">
        <ButtonNav ruta={`/Notes/${data.data._id}`} texto="Editar Nota" styles="btn btn-sm btn-success me-3"/>
        <button className="btn btn-danger btn-sm" onClick={() =>{
            eliminar(data.data._id);
        }} >Eliminar Nota
        </button> 
    </div>
    </div>
    </div>
    )
}
export default Card