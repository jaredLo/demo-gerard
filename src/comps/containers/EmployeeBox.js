import React from "react";

function EmployeeBox(props) {
  const { list } = props;
  const { isEdit } = props;
  const { selected, setSelected } = props;

  return isEdit ? (
    <div className="employees-content">
      {list.map((item, key) => {
        return (
          <div className="employee-box" key={key}>
            <div
              name={item.name}
              className="circle"
              onClick={() => {
                setSelected((selected) => [...selected, item]);
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
