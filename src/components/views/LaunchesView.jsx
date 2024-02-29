import { useState, useEffect } from "react";
import api from "../../services/api";
import LaunchesList from "../launches/LaunchesList";
import "./style.css"
import Loading from "../loading/Loading";
import Error from "../error/Error";

const LaunchesView = () => {
    const [launches, setLaunches] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        api.get("launches")
        .then(res => {
            console.log(res.data.splice(0, 10))
            setLaunches(res.data.splice(18, 10));
            setIsLoading(true);
        })
        .catch(error => {
            setIsError(true);
            console.error(error);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, []);


  return (
    <>
        {isLoading ? <Loading /> : isError ? <Error /> : <LaunchesList launches={launches}/>} 
    </>
  )
}

export default LaunchesView;