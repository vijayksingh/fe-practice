// eslint-disable-next-line react/prop-types
import { RiCLoseLine } from "react-icons/ri";
import "./styles.css";

function Modal({ setIsOpen }) {
  return (
    <>
      <div className="backdrop" onClick={() => setIsOpen(false)}>
        <div className="centered">
          <div className="modal">
            <div className="modalHeader">
              <h5 className="heading">Dialog</h5>
            </div>
            <button className="closeBtn" onClick={() => setIsOpen(false)}>
              <RiCLoseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className="modalContent">
              Are you sure you want to delete this item?
            </div>
            <div className="modalActions">
              <div className="actionsContainer">
                <button className="deleteBtn">Delete</button>
                <button className="cancelBtn">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
