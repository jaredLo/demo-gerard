import React, { useState } from "react";
import Modal from "./Modal";

function EmployeeBox(props) {
  const { list } = props;
  const { isEdit } = props;
  const { selected, setSelected } = props;
  const [marked, setMarked] = useState([]);
  const [modal, goModal] = useState(false);
  const [modalItem, setModalItem] = useState({});

  return isEdit ? (
    <div className="employees-content">
      {list.map((item) => {
        return (
          <div className="employee-box" key={item.key}>
            <div
              name={item.name}
              className={marked.includes(item.key) ? "circleMarked" : "circle"}
              onClick={() => {
                setSelected((selected) => [...selected, item]);
                setMarked((marked) => [...marked, item.key]);
                console.log(marked);
              }}
            ></div>
            <img src={item.img} alt="alt" />
            <h3>{item.name}</h3>
            <h4>{item.position}</h4>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="employees-content">
      {list.map((item, key) => {
        return (
          <div className="employee-box" key={key}>
            {modal && <Modal goModal={goModal} modalItem={modalItem} />}
            <img
              src={item.img}
              alt="alt"
              onClick={() => {
                goModal(true);
                setModalItem(item);
                console.log(modalItem);
              }}
            />
            <h3>{item.name}</h3>
            <h4>{item.position}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default EmployeeBox;
