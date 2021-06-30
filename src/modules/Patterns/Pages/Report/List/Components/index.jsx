/* ANCHOR: 🧩 Standard imports. */
import { useState, useMemo, useCallback, useEffect } from "react";

/* ANCHOR: 📚 Lib imports. */
import Cookies from "js-cookie";

/* ANCHOR: 📦 Component imports. */
import { CardLayout } from "../../../../Layout/Card";
import Table from "../../../../DataDisplay/Table";
import { DateBrFormat } from "../../../../../../utils/format";

/* ANCHOR: 🎨 Style imports. */
import { BiUserVoice, BiPlusCircle, BiChevronLeft } from "react-icons/bi";
import dengueUmuaramaLogo from "../../../../../../dengue-umuarama-logo.png";

/* ANCHOR: 📦 Component imports. */
import { ReportMoreInfoDialog } from "./MoreInfoDialog.jsx";

export default function ReportList({ reportListUrl }) {
  const [allData, setAllData] = useState();
  const [reportId, setReportId] = useState(null);
  const [reportStreet, setReportStreet] = useState(null);
  const [reportReference, setReportReference] = useState(null);
  const [reportDescription, setReportDescription] = useState(null);
  const [reportImage, setReportImage] = useState(null);
  const [modalToMoreInfo, setModalToMoreInfo] = useState(false);

  const reportUser = Cookies.getJSON("auth");

  async function fetchData({}) {
    console.count("chamou a tabela");
    const data = await [
      {
        id: 155,
        zip_code: "87508-664",
        street: "Rua Palmyra Delmonico",
        number: "1234",
        district: "Jardim Belo Monte",
        reference: "Este é um exemplo de referência",
        date: "2021-06-25",
        description:
          "Este é um exemplo de descrição da denúncia, aqui virá um texto com caracteres permitidos de 10 a 200",
        situation: false,
      },
      {
        id: 185,
        zip_code: "87510-659",
        street: "Rua Ibirapuera",
        number: "5927",
        district: "Jardim Paraíso",
        date: "2021-06-12",
        reference: "Este é um exemplo de referência",
        description:
          "Este é um exemplo de descrição da denúncia, aqui virá um texto com caracteres permitidos de 10 a 200",
        situation: false,
      },
      {
        id: 125,
        zip_code: "87505-220",
        street: "Rua Augusta Marques Mendonça",
        number: "7859",
        district: "Jardim Lisboa",
        date: "2021-06-17",
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
        number: "1237",
        district: "Jardim Yoshi",
        date: "2021-06-18-11",
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
        number: "9987",
        district: "Parque Dom Pedro I",
        date: "2021-06-10",
        reference: "Este é um exemplo de referência",
        description:
          "Este é um exemplo de descrição da denúncia, aqui virá um texto com caracteres permitidos de 10 a 200",
        image: dengueUmuaramaLogo,
        situation: false,
      },
      {
        id: 132,
        zip_code: "87509-771",
        street: "Rua Avelino Roveron",
        number: "2364",
        district: "Jardim Verde Vale",
        date: "2021-06-14",
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
        number: "7894",
        district: "Jardim San Martim",
        date: "2021-05-13",
        reference: "Este é um exemplo de referência",
        description:
          "Este é um exemplo de descrição da denúncia, aqui virá um texto com caracteres permitidos de 10 a 200",
        image: null,
        situation: false,
      },
      {
        id: 996,
        zip_code: "87508-215",
        street: "Rua Ayrton Senna",
        number: "2268",
        district: "Parque Tarumã",
        date: "2021-05-09",
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
        number: "7519",
        district: "Conjunto Residencial Córrego Longe",
        date: "2021-05-08",
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
        number: "5468",
        district: "Jardim Global",
        date: "2021-05-18",
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
        number: "9879",
        district: "Jardim das Garças ll",
        date: "2021-04-18",
        reference: "Este é um exemplo de referência",
        description:
          "Este é um exemplo de descrição da denúncia, aqui virá um texto com caracteres permitidos de 10 a 200",
        image: dengueUmuaramaLogo,
        situation: true,
      },
    ];

    setAllData(data);
  }
  useEffect(() => {
    fetchData({});
  }, []);

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

  const columns = useMemo(
    () => [
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
        Header: "DATA",
        accessor: "date",
        order: true,
        Cell: (row) => {
          const rowData = row.row.original.date;
          return DateBrFormat(rowData);
        },
      },
      {
        Header: "VERIFICAÇÃO",
        accessor: "verification",
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
    ],
    [allData]
  );

  return (
    <>
      <CardLayout
        headerIcon={<BiUserVoice color="#00aeff" size={20} />}
        headerTitle="Novos Focos"
        headerButtonTitle="Voltar"
        headerButtonIcon={<BiChevronLeft size={18} />}
        headerButtonHref="/"
      >
        <div className="py-4">
          <Table data={allData} columns={columns} />
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
          reportUser={reportUser}
          fetchData={fetchData}
          onHide={() => {
            setModalToMoreInfo(false);
          }}
        />
      )}
    </>
  );
}
