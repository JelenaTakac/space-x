import { useContext, useEffect } from "react";
import api from "../../services/api";
import { RocketsContext } from "../../context/RocketsContext";
import {
    FETCH_ROCKETS_REQUEST, 
    FETCH_ROCKETS_SUCCESS, 
    FETCH_ROCKETS_FAILURE
} from "../../constants/actions"
import Loading from "../loading/Loading";
import Error from "../error/Error";
import RocketsList from "../rockets/RocketsList";


const RocketsView = () => {
    const {state, dispatch} = useContext(RocketsContext);
    const {loading, error, rockets} = state;

    useEffect(() => {
        dispatch({type: FETCH_ROCKETS_REQUEST});
        api.get("rockets")
        .then(res => {
            dispatch({
                type: FETCH_ROCKETS_SUCCESS,
                payload: res.data
            })
        })
        .catch(error => {
            dispatch({
                type: FETCH_ROCKETS_FAILURE,
                payload: error.response
            })
        })
    }, []);

  return (
    <div>
        {loading ? <Loading /> : error ? <Error error={error}/> : <RocketsList rockets={rockets}/>}
    </div>
  )
}

export default RocketsView