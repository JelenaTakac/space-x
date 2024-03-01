import { Card } from "../../styledComponents/GlobalStyles";
import { Link } from "react-router-dom";

const LaunchesListItem = ({launch}) => {
    const {id, name, details} = launch;
    const {small} = launch.links.patch;


    return (
        <Link to={`/launches/${id}`}>
            <Card>
            <h3>Name: {name}</h3>
            <img src={small} alt={launch.name} />
            <p>{details}</p>
            </Card>
        </Link>
    )
}

export default LaunchesListItem