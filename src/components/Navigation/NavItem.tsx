import React from "react";
import { Link } from "react-router-dom";

interface NavProps {
  name: string;
  address: string;
}

function NavItem({ name, address }: NavProps) {
  return (
    <Link to={address} className="menu_item">
      {name}
    </Link>
  );
}

export default React.memo(NavItem);
