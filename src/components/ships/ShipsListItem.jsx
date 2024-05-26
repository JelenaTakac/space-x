import { Link } from "react-router-dom"
import { Card } from "../../styledComponents/GlobalStyles"


const ShipsListItem = ({ship}) => {
    const {id, name, image} = ship;
  return (
    <Link to={`/ships/${id}`}>
        <Card>
            <h3>{name}</h3>
            <img style={{width: "300px"}} src={image} alt={name} />
        </Card>
    </Link>
  )
}

export default ShipsListItem