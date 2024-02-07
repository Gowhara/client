
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Categories from "./pages/Categories/Categories";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import './App.css';
import { CartProvider } from "./hooks/CartContext";

const Layout=()=>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/> {/*bykhlih y3rg3lo el pages el 3yzha w el layout yfdl sabt ely hwa nav and footer*/}
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
            path: "",
            element: <Home />,
          },
          {
            path: "/Categories/:category", //category
            element: <Categories />,
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
      <CartProvider>
      <RouterProvider router={router} />
      </CartProvider>
    </div>
  );
}

export default App;