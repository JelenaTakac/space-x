import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import api from "../../services/api";

const RocketView = () => {
    const {rocketId} = useParams();
    const navigate = useNavigate();
    const [rocketInfo, setRocketInfo] = useState(undefined);


    useEffect(() => {
        api.get(`/rockets/${rocketId}`)
        .then(res => {
            setRocketInfo(res.data)
        })
        .catch(error => {
            console.error("Error occured", error);
        })
    }, []);

  return (
    <div>
        {rocketInfo ? (
            <div>
                <h2>{rocketInfo.name}</h2>
                <h3>{rocketInfo.country}</h3>
                <p>{rocketInfo.description}</p>
                <img src={rocketInfo.flickr_images[0]} alt={rocketInfo.name} />
            </div>
        ) : null}
    </div>
  )
}

export default RocketView