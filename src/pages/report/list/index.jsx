/* ANCHOR: 📦 Component imports. */
import ReportList from "../../../modules/Patterns/Pages/Report/List/Components";

/* ANCHOR: 🎛️ Layout imports. */
import PanelLayout from "../../../theme/layouts/Panel";

export default function ListOfComplaints() {
  return (
    <PanelLayout title="Lista de denúncias">
      <ReportList reportListUrl="/complaints" />
    </PanelLayout>
  );
}
