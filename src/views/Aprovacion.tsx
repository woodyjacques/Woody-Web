import { useNavigate } from "react-router-dom";

export function Apobacion() {

    const links = localStorage.getItem("SEGUIMIENTO_LINK");
    const navigate = useNavigate();
    if (links) {
        navigate(links);
    }

    return(
        <div></div>
    );
}

export default Apobacion;

