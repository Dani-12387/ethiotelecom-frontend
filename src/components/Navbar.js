import React from "react";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>Ethio Telecom Student System</h2>
      </div>
      {user && (
        <div className="nav-user">
          <span>Welcome, {user.userName}</span>
          <button onClick={onLogout} className="btn-logout-sm">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
