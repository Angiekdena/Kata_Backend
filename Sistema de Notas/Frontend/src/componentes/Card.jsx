const Card = (data) => {

    return(
    <div className="card border-success mb-3 w-50">
    <div className="card-body">
        <h5 className="card-title card-header border-success">{data.data.title}</h5>
        <p className="card-text">{data.data.description}</p>
        <a href="#" className="card-link border-success">Edit Note</a>
        <a href="#" className="card-link border-success">Delet Note</a>
    </div>
    </div>
    )
}
export default Card