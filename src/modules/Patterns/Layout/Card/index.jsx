/* ANCHOR: 🎛️ Layout imports. */
import Card from "react-bootstrap/Card";

export function CardLayout({
  headerIcon,
  headerTitle,
  headerButtonTitle,
  headerButtonIcon,
  headerButtonHref,
  children,
}) {
  return (
    <>
      <Card>
        <Card.Header className="card-header">
          <h5>
            {headerIcon} <span className="ml-1">{headerTitle}</span>
          </h5>
          <a href={headerButtonHref}>
            <button type="button" className="btn btn-success font-weight-bold">
              {headerButtonTitle === "Voltar" ||
              headerButtonTitle === "Cancelar" ? (
                <>
                  {headerButtonIcon}
                  {headerButtonTitle}
                </>
              ) : (
                <>
                  {headerButtonTitle}
                  {headerButtonIcon}
                </>
              )}
            </button>
          </a>
        </Card.Header>
        <Card.Body>{children}</Card.Body>
      </Card>
    </>
  );
}
