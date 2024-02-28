import { ReactComponent as Logo } from "../../assets/SpaceX-Logo.svg";
import {useNavigate} from "react-router-dom";
import {NavTabs} from ".";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <Logo fill="white" onClick={() => navigate("/")} className="navbar-logo"/>
            <NavTabs />
        </div>
    )
}

export default Navbar;