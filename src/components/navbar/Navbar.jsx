import logo from "../../assets/SpaceX-Logo.svg";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import NavTabs from "./NavTabs";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <img onClick={() => navigate("/")} src={logo} alt="logo image" className="navbar-logo"/>

            <NavTabs />
        </div>
    )
}

export default Navbar