import { createBrowserRouter } from "react-router-dom";

// Componentes generales
import Sesion from "../views/sesion";
import Register from "../views/register";
import EmailPassword from "../views/emailPassword";
import Emailverifi from "../views/emailVerifi";
import PasswordUpEmail from "../views/PasswordUpEmail";

// componentes de cliente
import Sobre from "../views/Sobre";
import Product from "../views/Users/Product";
import Course from "../views/Users/Course";
import Services from "../views/Users/Services";

// componentes de verificacion
import Error404 from "../views/Error404";
import AuthGuard from "../guards/auth.guard";

// componentes de administrador
import Adminstrador from "../views/Admin/Administrador";
import UsersAd from "../views/Admin/UsersAd";
import CourseAd from "../views/Admin/CourseAd";
import ProductAd from "../views/Admin/ProductAd";
import ServiceAd from "../views/Admin/ServiceAd";
import PerfilAd from "../views/Admin/PerfilAd";
import CategoriesAd from "../views/Admin/Categories";

const router = createBrowserRouter([

  // Rutas de cliente
  { path:"/", element: <Product /> },
  { path:"/woody-product-users", element: <Product /> },
  { path:"/woody-course-users", element: <Course /> },
  { path:"/woody-services-users", element: <Services /> },
  { path:"/woody-sobre-users", element: <Sobre /> },

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
      { path: "/woody-product-administrador", element: <ProductAd /> },
      { path: "/woody-course-administrador", element: <CourseAd /> },
      { path: "/woody-services-administrador", element: <ServiceAd /> },
      { path: "/woody-categories-administrador", element: <CategoriesAd /> },
      { path: "/woody-perfil-administrador", element: <PerfilAd /> },
    ]
  },

  { path: "/authguard", element: <AuthGuard /> },
  { path: "*", element: <Error404 /> },
]);

export default router;



