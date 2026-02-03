import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

export default function Header() {
  const { logout } = useContext(AuthContext);
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <h3>Welcome {user?.name} 👋</h3>
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
}
