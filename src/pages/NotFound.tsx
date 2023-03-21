import {useNavigate} from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>NotFound</div>
            <button onClick={() => navigate("/home")}>Navigate to home</button>
        </div>
    )
}