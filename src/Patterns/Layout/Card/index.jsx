/* SECTION: Layout imports. */
import Card from "react-bootstrap/Card";

export const CardLayout = ({ children, title }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-dark-75 font-weight-bold">
          {title}
        </Card.Title>
        <hr />
        <Card.Body>{children}</Card.Body>
      </Card.Body>
    </Card>
  );
};
