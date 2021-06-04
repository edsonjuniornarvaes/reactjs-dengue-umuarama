/* ANCHOR: 📦 Component imports. */
import ReportForm from "../../../modules/Patterns/Pages/Report/New/Components/Form";

/* ANCHOR: 🎛️ Layout imports. */
import PanelLayout from "../../../theme/layouts/Panel";

export default function Report() {
  return (
    <PanelLayout title="Nova Denúncia">
      <ReportForm reportUrl={`/report`} />
    </PanelLayout>
  );
}
