import { Navigate, useLocation } from "react-router-dom";

export function PrivateRoute({ children })
{
    const token = localStorage.getItem("token");
    const location = useLocation();

    if(!token)
    {
        return <Navigate to={"/login"} state={{ fromPath: location.pathname }} />
    } else {
        return children;
    }
}