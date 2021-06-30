import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import DengueUmuaramaLogo from "../../../dengue-umuarama-logo.png";

export default function LayoutPanel({ children }) {
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Nav.Link href="/">
          <img
            src={DengueUmuaramaLogo}
            style={{ width: "50%" }}
            alt="Dengue Umuarama"
          />
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-menu">
            <Nav.Link
              href="/"
              className="text-dark font-weight-bold text-muted link-menu mr-2"
            >
              Dashboard
            </Nav.Link>
            <Nav.Link
              href="/denuncias/lista"
              className="text-dark font-weight-bold text-muted link-menu mr-2"
            >
              Focos
            </Nav.Link>
            <Nav.Link
              href="/denuncias/novo"
              className="text-dark font-weight-bold text-muted link-menu mr-2"
            >
              Denúncia
            </Nav.Link>
            <Nav.Link
              href="/supervisor/new"
              className="text-dark font-weight-bold text-muted link-menu mr-2"
            >
              Supervisor
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
