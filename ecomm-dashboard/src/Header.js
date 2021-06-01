import { Navbar, Nav } from 'react-bootstrap/';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
      <h1>Header Page</h1>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">E-Comm</Navbar.Brand>
        <Nav className="mr-auto" navbar_warapper>
          <Link to="/Add" > Add Product </Link>
          <Link to="/Update" > Update Product </Link>
          <Link to="/Login" > Login </Link>
          <Link to="/Register" > Register </Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
