import { Card } from "../../styledComponents/GlobalStyles";

const LaunchesListItem = ({launch}) => {
    const {name, details} = launch;
    const {small} = launch.links.patch;

    return (
        <Card>
            <h3>Name: {name}</h3>
            <img src={small} alt={launch.name} />
            <p>{details}</p>
        </Card>
    )
}

export default LaunchesListItem