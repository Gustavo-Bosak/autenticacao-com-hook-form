import type React from "react"
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

function RotaPrivada({children, privado}:{children:React.JSX.Element; privado:boolean}):React.JSX.Element {
    const { funcionario } = useAuth();

    if (privado && !funcionario) {
        return <Navigate to='/login' replace/>
    }
    
    if (!privado && funcionario) {
        return <Navigate to='/' replace/>
    }

    return children
}

export default RotaPrivada