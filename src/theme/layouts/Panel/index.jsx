import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import DengueUmuaramaLogo from "../../../dengue-umuarama-logo.png";

export default function LayoutPanel({ children }) {
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="#home" className="text-dark bold">
          <img src={DengueUmuaramaLogo} style={{ width: "50%" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-menu">
            <Nav.Link
              href="/denuncias/novo"
              className="text-dark font-weight-bold text-muted link-menu mr-2"
            >
              Denunciar foco
            </Nav.Link>
            <Nav.Link
              href="/denuncias/lista"
              className="text-dark font-weight-bold text-muted link-menu mr-2"
            >
              Lista de focos
            </Nav.Link>
            <Nav.Link
              href="/auth/logout"
              className="text-dark font-weight-bold text-muted link-menu mr-2"
            >
              Sair
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main className="container mt-5">{children}</main>
    </>
  );
}
