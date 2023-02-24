import { Link } from "react-router-dom";

interface NavProps {
  data: {
    name: string;
    address: string;
  };
}

function NavItem({ data }: NavProps) {
  const { name, address } = data;

  return (
    <Link to={`${address}`} className="menu_item">
      {name}
    </Link>
  );
}

export default NavItem;
