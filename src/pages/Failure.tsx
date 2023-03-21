import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const Failure = () => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Failure mounted");

        return () => {
            console.log("Failure unmounted");
        }
    }, [])

    return (<div>
        <div>Failure</div>
        <button onClick={() => navigate("/home")}>Navigate to home</button>
    </div>)
}