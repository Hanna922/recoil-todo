import "../css/Navigation.css";
import React from "react";
import NavItem from "../Navigation/NavItem";
// import NavItem from "./NavItem";

function Navigation() {
  const menu = [
    { name: "Home", address: "/" },
    { name: "Todo", address: "/todo" },
    { name: "Sign In", address: "/signin" },
    { name: "Sign Up", address: "/signup" },
  ];

  return (
    <nav className="navigation-wrapper">
      <div className="menu-list">
        {menu.map((data) => (
          <NavItem key={data.address} {...data} />
        ))}
      </div>
    </nav>
  );
}

export default React.memo(Navigation);
