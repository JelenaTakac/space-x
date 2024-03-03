import { Link } from "react-router-dom"
import { Card } from "../../styledComponents/GlobalStyles"


const RocketsListItem = ({rocket}) => {

  return (
    <Link to={`/rockets/${rocket.id}`}>
        <Card>
            <h2>{rocket.name}</h2>
            <h3>{rocket.country}</h3>
            <p>{rocket.description}</p>
            <img src={rocket.flickr_images[0]} alt={rocket.name} />
        </Card>
    </Link>
  )
}

export default RocketsListItem