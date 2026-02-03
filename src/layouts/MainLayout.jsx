import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h3>Panel</h3>

        <nav className="nav">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </aside>

      <div className="right-section">
        <Header />

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
