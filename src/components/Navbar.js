import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="."> Home</Link>
      <Link to="/Store"> Store</Link>
      <Link to="/About"> About</Link>
    </nav>
  );
};

export default Navbar;
