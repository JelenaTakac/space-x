
const LaunchesListItem = ({launch}) => {
    const {name, details} = launch;
    const {small} = launch.links.patch;

    return (
        <>
            <div className="launch-container">
                <h3>Name: {name}</h3>
                <img src={small} alt={launch.name} />
                <p>{details}</p>
            </div>
        </>
    )
}

export default LaunchesListItem