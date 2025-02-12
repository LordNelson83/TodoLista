import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./componenter/Navbar";
import AboutPage from "./componenter/AboutPage";
import './App.css';

const App = () => {
 const routes=useRoutes([
  { path:"/",element:<Home/>},
  { path:"/AboutPage",element:<AboutPage/>}
]);

  return (
   <div>
    <Navbar/>
    {routes}
   </div>
  );  
};

export default App;

