import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

const LaunchView = () => {
    const {launchId} = useParams();
    const navigate = useNavigate();
    const [launchInfo, setLaunchInfo] = useState(undefined);

    useEffect(() => {
        api.get(`/launches/${launchId}`)
        .then(res => {
            console.log(res.data)
            setLaunchInfo(res.data)
        })
        .catch(error => {
            console.error(`Error ocured, ${error}`)
        })

    }, [])

  return (
    <>
        <h1>Launch: {launchId}</h1> 
        {launchInfo ? (
            <div>
                <h2>{launchInfo.name}</h2>
                <img src={launchInfo.links.patch.small} alt={launchInfo.name} />
                <p>{launchInfo.details}</p> 
            </div>
            )
         : null}
        <button onClick={() => navigate(-1)}>Back</button>
    </>
  )
}

export default LaunchView;