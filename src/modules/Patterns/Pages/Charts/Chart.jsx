import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import { Helmet, HelmetProvider } from "react-helmet-async";

import Nav from "react-bootstrap/Nav";

import React from "react";
import PieChart from "./PieChart";
import VerticalBar from "./VerticalBar";

/* ANCHOR: 📦 Component imports. */
import { CardLayout } from "../../Layout/Card";

/* ANCHOR: 🎛️ Layout imports. */
import PanelLayout from "../../../../theme/layouts/Panel";

import "../../../../theme/styles/patterns/pages/charts/charts.scss";

import dengueUmuaramaLogo from "../../../../dengue-umuarama-logo.png";

/* ANCHOR: 🎨 Style imports. */
import { BiUserCircle, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { AiOutlinePieChart } from "react-icons/ai";

const DengueCharts = () => {
  const helmetContext = {};

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
      <CardLayout
        headerIcon={<AiOutlinePieChart color="#00aeff" size={20} />}
        headerTitle="Gráfico geral"
        headerButtonTitle="Voltar"
        headerButtonIcon={<BiChevronLeft size={18} />}
        headerButtonHref="/"
      >
        <div className="divCharts row">
          <VerticalBar />
          <PieChart />
        </div>
      </CardLayout>
    </>
  );
};

export default DengueCharts;
