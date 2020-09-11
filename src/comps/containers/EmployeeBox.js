import React from "react";

function EmployeeBox(props) {
  const { employees, setEmployees } = props;

  return employees.map((employee, key) => (
    <div className="employee-box" key={key}>
      <img src={employee.img} alt="alt" />
      <h3>{employee.name}</h3>
      <h4>{employee.position}</h4>
    </div>
  ));
}

export default EmployeeBox;
