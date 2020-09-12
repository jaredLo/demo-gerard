import React, { useState } from "react";

function EmployeeBox(props) {
  const { list } = props;
  const { isEdit } = props;
  const { selected, setSelected } = props;
  const [marked, setMarked] = useState([]);

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
            <img src={item.img} alt="alt" />
            <h3>{item.name}</h3>
            <h4>{item.position}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default EmployeeBox;
