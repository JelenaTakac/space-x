import { useEffect, useContext } from "react";
import api from "../../services/api";
import LaunchesList from "../launches/LaunchesList";
import "./style.css"
import Loading from "../loading/Loading";
import Error from "../error/Error";
import { LaunchesContext } from "../../context/LaunchesContext";
import {
  FETCH_LAUNCHES_REQUEST,
  FETCH_LAUNCHES_SUCCESS,
  FETCH_LAUNCHES_FAILURE,
} from "../../constants/actions";

const LaunchesView = () => {
    const {state, dispatch} = useContext(LaunchesContext);
    const {launches, loading, error} = state;

    useEffect(() => {
        dispatch({type: FETCH_LAUNCHES_REQUEST});
        api.get("launches")
        .then(res => {
            dispatch({
                type: FETCH_LAUNCHES_SUCCESS,
                payload: res.data.slice(0, 10),
            })
        })
        .catch(error => {
                dispatch({
                    type: FETCH_LAUNCHES_FAILURE,
                    payload: error.response,
                })
            })
    }, []);


  return (
    <>
        {loading ? <Loading /> : error ? <Error error={error}/> : <LaunchesList launches={launches}/>} 
    </>
  )
}

export default LaunchesView;