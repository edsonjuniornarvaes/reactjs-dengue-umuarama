import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Table from "../../DataDisplay/Table";
import dengueUmuaramaLogo from "../../../../dengue-umuarama-logo.png";

import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

/* ANCHOR: 🎨 Style imports. */
import "../../../../theme/styles/patterns/pages/dashboard/dashboard.scss";
import { AiOutlinePieChart } from "react-icons/ai";

export default function Dashboard() {
  const helmetContext = {};

  const sellers = [
    {
      district: "Jardim Lisboa",
      cases: "12",
      focus: "2",
      denunciations: "29",
    },
    {
      district: "Jardim Topázio",
      cases: "18",
      focus: "3",
      denunciations: "11",
    },
    {
      district: "Parque Residencial Belo Monte",
      cases: "5",
      focus: "1",
      denunciations: "26",
    },
    {
      district: "Parque Bandeirantes",
      cases: "25",
      focus: "4",
      denunciations: "25",
    },
    {
      district: "Jardim Colibri",
      cases: "33",
      focus: "6",
      denunciations: "18",
    },
    {
      district: "Jardim Sol Nascente",
      cases: "38",
      focus: "1",
      denunciations: "10",
    },
    {
      district: "Parque Industrial 3ª",
      cases: "60",
      focus: "2",
      denunciations: "9",
    },
    {
      district: "Jardim Europa",
      cases: "22",
      focus: "4",
      denunciations: "24",
    },
    {
      district: "Zona II",
      cases: "12",
      focus: "8",
      denunciations: "78",
    },
    {
      district: "Zona VII",
      cases: "17",
      focus: "3",
      denunciations: "35",
    },
    {
      district: "Jardim San Rafael",
      cases: "59",
      focus: "5",
      denunciations: "15",
    },
  ];

  const columns = [
    {
      Header: "BAIRROS",
      accessor: "district",
      order: true,
    },
    {
      Header: "FOCOS",
      accessor: "focus",
      order: true,
    },
    {
      Header: "CASOS",
      accessor: "cases",
      order: true,
    },
    {
      Header: "DENÚNCIAS",
      accessor: "denunciations",
      order: true,
    },
  ];

  const data = {
    cases: "10.587",
    focos: "125",
    denunciations: "1148",
  };

  return (
    <>
      <HelmetProvider context={helmetContext}>
        <link
          rel="icon"
          type="image/png"
          href={dengueUmuaramaLogo}
          sizes="16x16"
        />
        <Helmet title="Dashboard - Dengue Umuarama" />
      </HelmetProvider>
      <section className="title h3 py-1 dashboardSection">
        <div>
          <span className="h3 first-title mr-1">Painel</span>
          <span className="h3 second-title">Dengue</span>
          <p className="description-title ml-1 mt-1">Casos em Umuarama-PR</p>
        </div>
        <div>
          <Nav.Link href="/charts" className="btn customButton">
            <span className="mr-1">Gráfico</span>
            <AiOutlinePieChart size={18} />
          </Nav.Link>
        </div>
      </section>
      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Title className="font-weight-bold text-muted">
              <span className="badge-sm badge-danger mr-1">&nbsp;</span>
              <span className="text-danger">Casos em Umuarama</span>
            </Card.Title>
            <Card.Text>
              <span className="h1">{data.cases}</span>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className="font-weight-bold text-muted">
              <span className="badge-sm badge-warning mr-1">&nbsp;</span>
              <span className="text-warning">Bairros com focos</span>
            </Card.Title>
            <Card.Text>
              <span className="h1">{data.focos}</span>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className="font-weight-bold text-muted">
              <span className="badge-sm badge-primary mr-1">&nbsp;</span>
              <span className="text-primary">Total de denúncias</span>
            </Card.Title>
            <Card.Text>
              <span className="h1">{data.denunciations}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <div className="py-4">
        <Table data={sellers} columns={columns} />
      </div>
    </>
  );
}
