/* ANCHOR: 📦 Component imports. */
import SupervisorForm from "../../../modules/Patterns/Pages/Supervisor/New/Components/Form";

/* ANCHOR: 🎛️ Layout imports. */
import PanelLayout from "../../../theme/layouts/Panel";

export default function Report() {
  return (
    <PanelLayout title="Novo Supervisor">
      <SupervisorForm reportUrl={`/supervisor/new`} />
    </PanelLayout>
  );
}
