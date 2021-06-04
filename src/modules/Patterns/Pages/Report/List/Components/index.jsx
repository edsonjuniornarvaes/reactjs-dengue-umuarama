/* ANCHOR: 📦 Component imports. */
import { CardLayout } from "../../../../Layout/Card";
import { ToggleSwitch } from "../../../../../Components/Forms/Switch";
import Table from "../../../../DataDisplay/Table";

/* ANCHOR: 📨 Query imports. */
import { ReportSituation } from "../Api";

/* ANCHOR: 🎨 Style imports. */
import { BiPlusCircle, BiChevronLeft } from "react-icons/bi";
import Card from "react-bootstrap/Card";

export default function ReportList({ reportListUrl }) {
  const handleSituation = async (rowData, checked) => {
    const action = checked ? "activate" : "inactivate";

    await ReportSituation(`/complaints/${action}`, action);
  };

  const sellers = [
    {
      id: 155,
      district: "Jardim Lisboa",
      cases: "12",
      focus: "2",
      denunciations: "29",
      situation: true,
    },
    {
      id: 157,

      district: "Jardim Topázio",
      cases: "18",
      focus: "3",
      denunciations: "11",
      situation: true,
    },
    {
      id: 136,

      district: "Parque Residencial Belo Mon",
      cases: "5",
      focus: "1",
      denunciations: "26",
      situation: true,
    },
    {
      id: 14,

      district: "Parque Bandeirantes",
      cases: "25",
      focus: "4",
      denunciations: "25",
      situation: false,
    },
    {
      id: 13,

      district: "Jardim Colibri",
      cases: "33",
      focus: "6",
      denunciations: "18",
      situation: true,
    },
    {
      id: 10,

      district: "Jardim Sol Nascente",
      cases: "38",
      focus: "1",
      denunciations: "10",
      situation: false,
    },
    {
      id: 11,

      district: "Parque Industrial 3ª",
      cases: "60",
      focus: "2",
      denunciations: "9",
      situation: false,
    },
    {
      id: 12,

      district: "Jardim Europa",
      cases: "22",
      focus: "4",
      denunciations: "24",
      situation: true,
    },
    {
      id: 16,

      district: "Zona II",
      cases: "12",
      focus: "8",
      denunciations: "78",
      situation: true,
    },
    {
      id: 17,

      district: "Zona VII",
      cases: "17",
      focus: "3",
      denunciations: "35",
      situation: true,
    },
    {
      id: 15,

      district: "Jardim San Rafael",
      cases: "59",
      focus: "5",
      denunciations: "15",
      situation: true,
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
    </>
  );
}
