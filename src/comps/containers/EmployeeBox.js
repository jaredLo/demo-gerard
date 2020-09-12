import React, { useState } from "react";

function EmployeeBox(props) {
  const { list, updateList } = props;
  const { isEdit, setIsEdit } = props;

  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute("name");
    updateList(list.filter((item) => item.name !== name));
  };

  return (
    <div className="employees-content">
      {list.map((item, key) => {
        return (
          <div className="employee-box" key={key}>
            <div
              name={item.name}
              className="circle"
              onClick={handleRemoveItem}
            ></div>
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
