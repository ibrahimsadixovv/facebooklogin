import { createBrowserRouter, Router } from "react-router-dom";
import Loginpage from "../Pages/Loginpage";
import Registerpage from "../Pages/Registerpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage/>,
    
  },
  {
    path: "/Register",
    element: <Registerpage/>,
    
  },
  {
    path: "/Login",
    element: <Loginpage/>,
    
  },


  
  
]);
export default router