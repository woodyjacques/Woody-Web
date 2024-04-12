import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Sesion from "../views/sesion";
import Register from "../views/register";
import EmailPassword from "../views/emailPassword";
import Emailverifi from "../views/emailVerifi";
import Error404 from "../views/Error404";
import PasswordUpEmail from "../views/PasswordUpEmail";

import Books from "../views/Books/Books";
import Films from "../views/Films/Films";
import Storis from "../views/Stories/Storis";
import Services from "../views/Services/Services";
const router = createBrowserRouter([
  { path:"/", element: <Home /> },

  // Rutas de activades
  { path:"/woody-books-users", element: <Books /> },
  { path:"/woody-films-users", element: <Films /> },
  { path:"/woody-storis-users", element: <Storis /> },
  { path:"/woody-services-users", element: <Services /> },

  // Rutas generales 
  { path:"/woody-sesion", element: <Sesion /> },
  { path:"/woody-register", element: <Register /> },
  { path:"/woody-password", element: <EmailPassword /> },
  { path:"/woody-emailverifi", element: <Emailverifi /> },
  { path: "/woody-passwordupemail", element: <PasswordUpEmail /> },
  { path: "*", element: <Error404 /> },
]);

export default router;



