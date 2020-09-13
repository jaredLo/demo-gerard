import React from "react";

function Modal({ goModal, modalItem }) {
  const onClickHide = (e) => {
    if (e.target.classList.contains("employee-backdrop")) {
      goModal(false);
    }
  };
  return (
    <div className="employee-backdrop" onClick={onClickHide}>
      <div className="modal-container">
        <div className="modal-img">
          <img src={modalItem.img} alt="emp" />
        </div>
        <div className="modal-text">
          <h2>{modalItem.name}</h2>
          <h3>{modalItem.position}</h3>
          <p>{modalItem.desc}</p>
        </div>
        <div className="modal-cancel" onClick={() => goModal(false)}>
          &times;
        </div>
      </div>
    </div>
  );
}

export default Modal;
