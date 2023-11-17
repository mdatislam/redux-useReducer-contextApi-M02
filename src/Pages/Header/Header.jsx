import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import './Header.css'


const Header = () => {
    return (
        <div>
            <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/Friends">Friends</ActiveLink>
            <ActiveLink to="/About">About</ActiveLink>
            <ActiveLink to="/Order">Order</ActiveLink>
            <ActiveLink to="/Contact">Contact</ActiveLink>
            <Link to="/Dashboard">Dashboard</Link>
            </nav>
        </div>
    );
};

export default Header;