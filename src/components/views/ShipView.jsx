import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import api from "../../services/api";

const ShipView = () => {
    const {shipId} = useParams();
    const navigate = useNavigate();
    const [shipInfo, setShipInfo] = useState(undefined);

    useEffect(() => {
        api.get(`/ships/${shipId}`)
        .then(res => {
            setShipInfo(res.data);
        })
        .catch(error => {
            console.error("Error occured", error);
        })
    }, []);

  return (
    <div>
        {shipInfo ? (
        <div>
            <h2>{shipInfo.name}</h2>
            <img src={shipInfo.image} alt={shipInfo.name} />
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
        ) 
        : null}
    </div>

  )
}

export default ShipView