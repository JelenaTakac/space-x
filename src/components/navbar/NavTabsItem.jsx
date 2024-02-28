import {Link} from "react-router-dom";

const NavTabsItem = ({item}) => {
  return (
   <>
   <Link to={`/${item}`}>{item}</Link>

   </>
  )
}

export default NavTabsItem