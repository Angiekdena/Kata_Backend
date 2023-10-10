import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
    <nav className="navbar navbar-expand-md fixed-top bg-light">
  <div className="container-fluid">
    <img src="https://cdn-icons-png.flaticon.com/512/7803/7803926.png" className="rounded float-left" alt="NOTY" />
    {/* <a className="navbar-brand fw-bold" href="#">NOTY</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
        <NavLink
            to='/'
            className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink
            to='/MyNotes'
            className="nav-link">
            My Notes
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-nav mb-2 mb-md-0">
        <li className="nav-item">
          <span className="nav-link">angie@hotmail.com</span>
        </li>
        <li className="nav-item">
        <NavLink
            to='/SingIn'
            className="nav-link">
            Sign In
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink
            to='/Login'
            className="nav-link">
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar