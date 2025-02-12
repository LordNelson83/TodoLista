import {Link} from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => (
    <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/AboutPage">About</Link>
    </nav>  
);

export default Navbar;