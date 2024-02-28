import NavTabsItem from "./NavTabsItem";

const NavTabs = () => {

    const navbarItems = ["launches", "rockets", "ships"];

    return (
        <>
            {navbarItems.map((item, i) => <NavTabsItem key={i} item={item}/>)}
        </>
    )
}

export default NavTabs