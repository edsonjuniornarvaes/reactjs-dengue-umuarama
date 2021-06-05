/* ANCHOR: 🎨 Style imports. */
import { Modal } from "react-bootstrap";
import { BiChevronLeft } from "react-icons/bi";

export function ReportMoreInfoDialog({
  show,
  onHide,
  reportId,
  reportStreet,
  reportReference,
  reportDescription,
  reportImage,
}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Mais Informações
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {console.log(reportImage)}
        <p>
          Rua: <strong>{reportStreet}</strong>
        </p>
        <p>
          Referência: <strong>{reportReference}</strong>
        </p>
        <p>
          Descrição: <strong>{reportDescription}</strong>
        </p>
        <hr />
        <p>Imagem do local</p>
        {typeof reportImage !== "undefined" ? (
          <img
            alt="Image example"
            src={reportImage}
            style={{ width: "100%" }}
          />
        ) : (
          <strong>Sem imagem do local</strong>
        )}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate text-dark-60"
          >
            <BiChevronLeft size={18} />
            Voltar
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
