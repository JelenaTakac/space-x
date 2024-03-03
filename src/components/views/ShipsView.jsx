import { useEffect, useContext } from "react";
import { ShipsContext } from "../../context/ShipsContext";
import api from "../../services/api";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import ShipsList from "../ships/ShipsList";


const ShipsView = () => {
    const {state, dispatch} = useContext(ShipsContext);
    const {ships, loading, error} = state;

    useEffect(() => {
        dispatch({type: "FETCH_SHIPS_REQUEST"});
        api.get("ships")
        .then(res => {
            dispatch({
                type: "FETCH_SHIPS_SUCCESS",
                payload: res.data.slice(0, 10),
            })
        })
        .catch(error => {
            dispatch({
                type: "FETCH_SHIPS_FAILURE"
            })
        })
    }, []);

  return (
    <>
    {loading ? <Loading /> : error ? <Error /> : <ShipsList ships={ships}/>}
    </>
  )
}

export default ShipsView;