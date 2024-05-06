import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
    const user = useSelector((state) => state.user.user);
    return user != null ? children : <Navigate to="/" replace />;
}