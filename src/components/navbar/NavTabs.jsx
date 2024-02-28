import "./style.css";
import NavTabsItem from "./NavTabsItem";
import * as routes from "../../constants/routes"

const NavTabs = () => {
    return (
        <div className="navtabs-wrapper">
            {Object.values(routes).filter(route => route !== "Home").map((route, index) => (
                <NavTabsItem key={index} value={route}/>
            ))}
        </div>
    );
}

export default NavTabs;