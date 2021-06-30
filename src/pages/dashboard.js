/* ANCHOR: 📦 Component imports. */
import Dashboard from "../modules/Patterns/Pages/Dashboard";
import PanelLayout from "../theme/layouts/Panel";

export default function DashboardPage() {
  return (
    <PanelLayout title="Dashboard">
      <Dashboard />
    </PanelLayout>
  );
}
