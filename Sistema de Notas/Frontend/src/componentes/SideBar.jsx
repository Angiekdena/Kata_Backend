import { Link } from "react-router-dom";


export default function SideBar () {
    return <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{'width': '280px'}}>
    <div className="d-flex flex-column flex-shrink-0 bg-body-tertiary" style="width: 4.5rem;">
    <a href="/" className="d-block p-3 link-body-emphasis text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
      <svg className="bi pe-none" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="visually-hidden">Icon-only</span>
    </a>
    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li className="nav-item">
        <Link  to={'notes'}href="#" className="nav-link active py-3 border-bottom rounded-0" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Home" data-bs-original-title="Home">
          <svg className="bi pe-none" width="24" height="24" role="img" aria-label="Home"><use xlinkHref="#home"></use></svg>
        Notas</Link>
      </li>
      <li>
        <Link href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
          <svg className="bi pe-none" width="24" height="24" role="img" aria-label="Dashboard"><use xlinkHref="#speedometer2"></use></svg>
        Ver mis Notas</Link>
      </li>
    </ul>
    <div className="dropdown border-top">
      <Link href="#" className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" className="rounded-circle"/>
      </Link>
      <ul className="dropdown-menu text-small shadow">
        <li><a className="dropdown-item" href="#">Cambiar contrase;a</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
  </div>
}