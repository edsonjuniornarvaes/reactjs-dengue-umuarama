/* ANCHOR: 🧩 Standard imports. */
import { useState, useEffect, useMemo, useCallback } from "react";

/* ANCHOR: 📦 Component imports. */
import { CardLayout } from "../../../../Layout/Card";
import { ToggleSwitch } from "../../../../../Components/Forms/Switch";
import Table from "../../../../DataDisplay/Table";

/* ANCHOR: 📨 Query imports. */
import { ReportSituation } from "../Api";

/* ANCHOR: 🎨 Style imports. */
import { BiPlusCircle, BiChevronLeft } from "react-icons/bi";
import dengueUmuaramaLogo from "../../../../../../dengue-umuarama-logo.png";

/* ANCHOR: 📦 Component imports. */
import { ReportMoreInfoDialog } from "./MoreInfoDialog.jsx";

export default function ReportList({ reportListUrl }) {
  const [reportId, setReportId] = useState(null);
  const [reportStreet, setReportStreet] = useState(null);
  const [reportReference, setReportReference] = useState(null);
  const [reportDescription, setReportDescription] = useState(null);
  const [reportImage, setReportImage] = useState(null);
  const [modalToMoreInfo, setModalToMoreInfo] = useState(false);

  const handleSituation = async (rowData, checked) => {
    const action = checked ? "activate" : "inactivate";

    await ReportSituation(`/complaints/${action}`, action);
  };

  const OpenMoreInfoModal = useCallback(
    (
      reportId,
      reportStreet,
      reportReference,
      reportDescription,
      reportImage
    ) => {
      setReportId(reportId);
      setReportStreet(reportStreet);
      setReportReference(reportReference);
      setReportDescription(reportDescription);
      setReportImage(reportImage);
      setModalToMoreInfo(true);
    },
    []
  );

  const sellers = [
    {
      id: 155,
      zip_code: "87508-664",
      street: "Rua Palmyra Delmonico",
      number: "123",
      district: "Jardim Belo Monte",
      reference: "Este é um exemplo de referência",
      description:
        "Este é um exemplo de descrição da denúncia, aqui virá um texto com caracteres permitidos de 10 a 200",
      situation: true,
    },
    {
      id: 185,
      zip_code: "87510-659",
      street: "Rua Ibirapuera",
      number: "123",
      district: "Jardim Paraíso",
      reference: "Este é um exemplo de referência",
      description:
        "Este é um exemplo de descrição da denúncia, aqui virá um texto com caracteres permitidos de 10 a 200",
      situation: true,
    },
    {
      id: 125,
      zip_code: "87505-220",
      street: "Rua Augusta Marques Mendonça",
      number: "123",
      district: "Jardim Lisboa",
      reference: "Este é um exemplo de referência",
      description:
        "Este é um exemplo de descrição da denúncia, aqui virá um texto com caracteres permitidos de 10 a 200",
      image: dengueUmuaramaLogo,
      situation: true,
    },
    {
      id: 15,
      zip_code: "87502-490",
      street: "Rua Augusto Pedro Torres",
      number: "123",
      district: "Jardim Yoshi",
      reference: "Este é um exemplo de referência",
      description:
        "Este é um exemplo de descrição da denúncia, aqui virá um texto com caracteres permitidos de 10 a 200",
      image: dengueUmuaramaLogo,
      situation: true,
    },
    {
      id: 159,
      zip_code: "87508-017",
      street: "Rua Augusto dos Anjos",
      number: "123",
      district: "Parque Dom Pedro I",
      reference: "Este é um exemplo de referência",
      description:
        "Este é um exemplo de descrição da denúncia, aqui virá um texto com caracteres permitidos de 10 a 200",
      image: dengueUmuaramaLogo,
      situation: true,
    },
    {
      id: 132,
      zip_code: "87509-771",
      street: "Rua Avelino Roveron",
      number: "123",
      district: "Jardim Verde Vale",
      reference: "Este é um exemplo de referência",
      description:
        "Este é um exemplo de descrição da denúncia, aqui virá um texto com caracteres permitidos de 10 a 200",
      image: null,
      situation: true,
    },
    {
      id: 123,
      zip_code: "87508-127",
      street: "Rua Aventureiros",
      number: "123",
      district: "Jardim San Martim",
      reference: "Este é um exemplo de referência",
      description:
        "Este é um exemplo de descrição da denúncia, aqui virá um texto com caracteres permitidos de 10 a 200",
      image: null,
      situation: true,
    },
    {
      id: 996,
      zip_code: "87508-215",
      street: "Rua Ayrton Senna",
      number: "123",
      district: "Parque Tarumã",
      reference: "Este é um exemplo de referência",
      description:
        "Este é um exemplo de descrição da denúncia, aqui virá um texto com caracteres permitidos de 10 a 200",
      image: dengueUmuaramaLogo,
      situation: true,
    },
    {
      id: 28,
      zip_code: "87504-615",
      street: "Rua Bela Vista",
      number: "123",
      district: "Conjunto Residencial Córrego Longe",
      reference: "Este é um exemplo de referência",
      description:
        "Este é um exemplo de descrição da denúncia, aqui virá um texto com caracteres permitidos de 10 a 200",
      image: null,
      situation: true,
    },
    {
      id: 17,
      zip_code: "87505-055",
      street: "Rua Belo Horizonte",
      number: "123",
      district: "Jardim Global",
      reference: "Este é um exemplo de referência",
      description:
        "Este é um exemplo de descrição da denúncia, aqui virá um texto com caracteres permitidos de 10 a 200",
      image: dengueUmuaramaLogo,
      situation: true,
    },
    {
      id: 15,
      zip_code: "87508-511",
      street: "Rua Belo Jardim",
      number: "123",
      district: "Jardim das Garças ll",
      reference: "Este é um exemplo de referência",
      description:
        "Este é um exemplo de descrição da denúncia, aqui virá um texto com caracteres permitidos de 10 a 200",
      image: dengueUmuaramaLogo,
      situation: true,
    },
  ];

  const columns = [
    {
      Header: "CEP",
      accessor: "zip_code",
      order: true,
    },
    {
      Header: "RUA",
      accessor: "street",
      order: true,
    },
    {
      Header: "NÚMERO",
      accessor: "number",
      order: true,
    },
    {
      Header: "BAIRRO",
      accessor: "district",
      order: true,
    },
    {
      Header: "STATUS",
      accessor: "status",
      order: true,
      Cell: (row) => {
        const rowData = row.row.original;

        return (
          <ToggleSwitch
            id={`${rowData.id}`}
            checked={rowData.situation}
            small
            onChange={(checked) => {
              handleSituation(rowData, checked);

              const data = sellers?.map((item) => {
                if (item.id == rowData.id) {
                  return {
                    ...item,
                    situation: !rowData.situation,
                  };
                }

                return item;
              });
              // setAllData({ ...allData, data });
            }}
          />
        );
      },
    },
    {
      Header: "AÇÕES",
      accessor: "opcoes",
      order: false,
      Cell: (row) => {
        const rowData = row.row.original;
        return (
          <>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                OpenMoreInfoModal(
                  rowData.id,
                  rowData.street,
                  rowData.reference,
                  rowData.description,
                  rowData.image
                )
              }
            >
              <BiPlusCircle size={15} />
            </button>
          </>
        );
      },
    },
  ];

  const data = {
    cases: "10.587",
    focos: "11",
    denunciations: "148",
  };
  return (
    <>
      <CardLayout
        headerIcon={<BiPlusCircle color="#00aeff" size={20} />}
        headerTitle="Lista de focos"
        headerButtonTitle="Voltar"
        headerButtonIcon={<BiChevronLeft size={18} />}
        headerButtonHref="/"
      >
        <div className="py-4">
          <Table data={sellers} columns={columns} />
        </div>
      </CardLayout>
      {modalToMoreInfo && (
        <ReportMoreInfoDialog
          show={modalToMoreInfo}
          reportId={reportId}
          reportStreet={reportStreet}
          reportReference={reportReference}
          reportDescription={reportDescription}
          reportImage={reportImage}
          onHide={() => {
            setModalToMoreInfo(false);
          }}
        />
      )}
    </>
  );
}
