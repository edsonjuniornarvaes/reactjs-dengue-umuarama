/* ANCHOR: 📚 Lib imports. */
import Cookies from "js-cookie";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import DengueUmuaramaLogo from "../../../dengue-umuarama-logo.png";

export default function LayoutPanel({ children }) {
  const auth = Cookies.getJSON("auth");

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
            {auth && (
              <>
                <Nav.Link
                  href="/users/new"
                  className="text-dark font-weight-bold text-muted link-menu mr-2"
                >
                  Usuário
                </Nav.Link>
                <Nav.Link
                  href="/denuncias/lista"
                  className="text-dark font-weight-bold text-muted link-menu mr-2"
                >
                  Denúncias
                </Nav.Link>
              </>
            )}

            <Nav.Link
              href="/denuncias/novo"
              className="text-dark font-weight-bold text-muted link-menu mr-2"
            >
              Denunciar
            </Nav.Link>
            {auth && (
              <Nav.Link
                href="/auth/logout"
                className="text-dark font-weight-bold text-muted link-menu mr-2"
              >
                Sair
              </Nav.Link>
            )}
            {!auth && (
              <Nav.Link
                href="/auth/login"
                className="text-dark font-weight-bold text-muted link-menu mr-2"
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main className="container mt-5">{children}</main>
    </>
  );
}
