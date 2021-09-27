/* ANCHOR: 📦 Component imports. */
import DengueCharts from "../../modules/Patterns/Pages/Charts/Chart";

/* ANCHOR: 🎛️ Layout imports. */
import PanelLayout from "../../theme/layouts/Panel";

export default function Report() {
  return (
    <PanelLayout title="Gráfico - Dengue Umuarama">
      <DengueCharts />
    </PanelLayout>
  );
}
