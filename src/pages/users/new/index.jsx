/* ANCHOR: 📦 Component imports. */
import UserForm from "../../../modules/Patterns/Pages/Users/New/Components/Form";

/* ANCHOR: 🎛️ Layout imports. */
import PanelLayout from "../../../theme/layouts/Panel";

export default function Report() {
  return (
    <PanelLayout title="Novo Usuário">
      <UserForm reportUrl={`/users/new`} />
    </PanelLayout>
  );
}
