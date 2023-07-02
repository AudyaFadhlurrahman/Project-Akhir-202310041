import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const hasStorage = localStorage.getItem("loginHistory");

  const handleLogout = () => {
    // Logika logout
    // Misalnya, hapus data dari local storage dan set isLoggedIn ke false
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  const MenuList = [
    { id: 1, name: "Home", path: "/home", icon: "bi-house-door" },
    { id: 2, name: "Menu", path: "/menu", icon: "bi-book-fill" },
    { id: 3, name: hasStorage ? "Storage" : null, path: hasStorage ? "/storage" : null, icon: "bi-book-fill" },
    { id: 4, name: "Pesanan", path: "/pesanan", icon: "bi-cart-fill" },
    { id: 5, name: isLoggedIn ? "Logout" : "Login", path: isLoggedIn ? "/logout" : "/signin", icon: "bi-person-fill" },
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top shadow nav-bg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={require("../../../images/projectakhir.png")} alt="logo-wm" style={{ height: "40px" }} />
          </a>
          <button className="navbar-toggler" type="button">
            <span className="navar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="d-flex w-100 justify-content-end">
              <div id="main-nav">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  {MenuList.map(
                    (v) =>
                      v.name && (
                        <li className="nav-item me-1 text-light" key={v.id}>
                          <NavLink className="nav-link text-hover-success px-3 text-light" to={v.path}>
                            <i className={"bi me-2 fs-5 text-dark" + v.icon}></i>
                            {v.name}
                          </NavLink>
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
