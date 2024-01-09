import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Layout = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Nyelvtan Varázsló</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/gepel">Gépel</Nav.Link>
              <Nav.Link href="/rendez">Rendez</Nav.Link>
              <Nav.Link href="/valaszt">Választ</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/gepel">Gépel</NavDropdown.Item>
                <NavDropdown.Item href="/rendez">
                  Rendez
                </NavDropdown.Item>
                <NavDropdown.Item href="/valaszt">Választ</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;