import { useState, useEffect } from "react";
import api from "../../services/api";
import Company from "../company/Company";
import Loading from "../loading/Loading";
import Error from "../error/Error";

const HomeView = () => {
    const [companyInfo, setCompanyInfo] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        api.get("company")
        .then(res => {
            console.log(res)
            setCompanyInfo(res.data);
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
            <h1>HomeView</h1>
            {isLoading ? <Loading /> : isError ? <Error /> : <Company companyInfo={companyInfo}/>}
        </>
    )
}

export default HomeView;