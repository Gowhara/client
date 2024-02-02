import { children } from "react";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/products/Product";
import Products from "./pages/products/Products";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import './App.css';
const Layout=()=>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/> {/*bykhlih y3rdlo el pages el 3yzha w el layout yfdl sabt ely hwa nav and footer*/}
      <Footer/>
    </div>
  );
}

const router = createBrowserRouter([
  

      {
        path: "/",
        element: <Layout />,
        children:[
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "/products/:id", //category
            element: <Products />,
          },
          {
            path: "/product/:id",
            element: <Product />,
          },
       
        ]
      },
   

]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;