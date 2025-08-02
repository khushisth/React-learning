import { Navigate } from "react-router-dom";
import { useAuth } from "../components/Context/AuthContext";


const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Context/AuthContext";

export default function LogoutButton() {
    const { logout } = useAuth();

    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/");
    };
    return (
        <button
            onClick={handleLogout}
            className="bg-primary hover:bg-rose-800 text-white px-4 py-2 rounded-md text-sm cursor-pointer"
        >
            Logout
        </button>
    );
}