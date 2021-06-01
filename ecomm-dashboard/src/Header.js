import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();
  console.log(user);
  function logout() {
    localStorage.clear();
    history.push("/register");
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">E-Comm</Navbar.Brand>
        <Nav className="mr-auto navbar_warapper">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/">Product List</Link>
              <Link to="/add">Add Products</Link>
              <Link to="/update">Update Products</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login </Link>
              <Link to="/register">Register </Link>
            </>
          )}
        </Nav>
        {localStorage.getItem("user-info") ? (
          <>
            <Nav className="mr-5">
              <NavDropdown className="mr-5" title={user && user.name}>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </>
        ) : null}
      </Navbar>
    </div>
  );
}

export default Header;
