//import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { BrowserRouter, useRoutes} from 'react-router-dom'
import Home from './Home';
import MyNotes from './MyNotes';
import Login from './Login';
import SingIn from './SingIn'
import NotFound from './NotFound';
import NavBar from '../componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


const AppRoutes = () => {
    const routes = useRoutes([
      {path: "/", element: <Home />},
      {path: "/MyNotes",element: <MyNotes />},
      {path: "/Login", element: <Login />},
      {path: "/SingIn", element: <SingIn />},
      {path: "*", element: <NotFound />},
  ]);
  return routes
  }
  
  const App = () => {
  return (
    <BrowserRouter>
        <AppRoutes />
        <NavBar />
    </BrowserRouter>
  )
  }

  export default App