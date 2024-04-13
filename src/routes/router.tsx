import { createBrowserRouter } from "react-router-dom";

// Componentes generales
import Sesion from "../views/sesion";
import Register from "../views/register";
import EmailPassword from "../views/emailPassword";
import Emailverifi from "../views/emailVerifi";
import PasswordUpEmail from "../views/PasswordUpEmail";

// componentes de cliente
import Home from "../views/Home";
import Books from "../views/Users/Books";
import Films from "../views/Users/Films";
import Storis from "../views/Users/Storis";
import Services from "../views/Users/Services";
import Perfil from "../views/Users/Perfil";

// componentes de verificacion
import Error404 from "../views/Error404";
import AuthGuard from "../guards/auth.guard";

// componentes de administrador
import Adminstrador from "../views/Admin/Administrador";
import UsersAd from "../views/Admin/UsersAd";
import BooksAd from "../views/Admin/BooksAd";
import FilmsAd from "../views/Admin/FilmsAd";
import StorisAd from "../views/Admin/StorisAd";
import ServiceAd from "../views/Admin/ServiceAd";
import PerfilAd from "../views/Admin/PerfilAd";
import CategoriesAd from "../views/Admin/Categories";

const router = createBrowserRouter([

  // Rutas de cliente
  { path:"/", element: <Home /> },
  { path:"/woody-books-users", element: <Books /> },
  { path:"/woody-films-users", element: <Films /> },
  { path:"/woody-storis-users", element: <Storis /> },
  { path:"/woody-services-users", element: <Services /> },
  { path:"/woody-perfil-users", element: <Perfil /> },

  // Rutas generales 
  { path:"/woody-sesion", element: <Sesion /> },
  { path:"/woody-register", element: <Register /> },
  { path:"/woody-password", element: <EmailPassword /> },
  { path:"/woody-emailverifi", element: <Emailverifi /> },
  { path: "/woody-passwordupemail", element: <PasswordUpEmail /> },

  // Rutas de Administrador
  {
    path: "/",
    element: <Adminstrador />,
    children: [
      { path: "/woody-users-administrador", element: <UsersAd /> },
      { path: "/woody-books-administrador", element: <BooksAd /> },
      { path: "/woody-films-administrador", element: <FilmsAd /> },
      { path: "/woody-storis-administrador", element: <StorisAd /> },
      { path: "/woody-services-administrador", element: <ServiceAd /> },
      { path: "/woody-categories-administrador", element: <CategoriesAd /> },
      { path: "/woody-perfil-administrador", element: <PerfilAd /> },
    ]
  },

  { path: "/authguard", element: <AuthGuard /> },
  { path: "*", element: <Error404 /> },
]);

export default router;



