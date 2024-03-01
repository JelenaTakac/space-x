import "./style.css"
import { useNavigate } from "react-router-dom";
import {ReactComponent as Refresh} from "../../assets/Refresh.svg";

const Error = ({error}) => {
    const navigate = useNavigate();

    const refreshPage = () => {
        navigate(0);
    }
  return (
    <div className="error-wrapper">
        <h2>Something went wrong. Please try again</h2>
        <p>{error ? error.data : null}</p>
        <div className="refresh-icon" onClick={refreshPage}>
            <Refresh />
        </div>
    </div>
  )
}

export default Error