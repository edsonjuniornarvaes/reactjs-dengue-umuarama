export function TextAlert(props) {
  return (
    <div
      className={`${props.customClassName && props.customClassName} ${
        props.alertSituation === "success" ? "text-success" : "text-danger"
      }`}
    >
      {props.children}
    </div>
  );
}
