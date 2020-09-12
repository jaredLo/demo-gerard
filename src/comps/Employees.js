import React, { useState } from "react";
import EmployeeBox from "./containers/EmployeeBox";
import picture from "../assets/4-people/marissa-lawren.jpg";
import picture1 from "../assets/4-people/frank-ltarnam.jpg";
import picture2 from "../assets/4-people/jason-steward.jpg";
import picture3 from "../assets/4-people/sabrina-rachel.jpg";
import picture4 from "../assets/4-people/bob-shefley.jpg";
import picture5 from "../assets/4-people/romane-regad.jpg";
import picture6 from "../assets/4-people/tania-ferreira.jpg";
import garbage from "../assets/7-icons/garbage.svg";

function Employees() {
  const [isEdit, setIsEdit] = useState(false);
  const employees = [
    {
      name: "Frank Ltarnam",
      position: "CEO",
      img: picture1,
    },
    {
      name: "Bob Shefley",
      position: "UI/UX Designer",
      img: picture4,
    },
    {
      name: "Jason Steward",
      position: "Full-stack developer",
      img: picture2,
    },
    {
      name: "Sabrina Rachel",
      position: "Marketing",
      img: picture3,
    },
    {
      name: "Marissa Lawren",
      position: "Customer Support",
      img: picture,
    },
    {
      name: "Romane Regad",
      position: "Jr UI/UX Designer",
      img: picture5,
    },
    {
      name: "Tania Ferreira",
      position: "Business Analyst",
      img: picture6,
    },
  ];
  const [list, updateList] = useState(employees);

  return isEdit ? (
    <div className="employees-container">
      <div className="employees-top">
        <div className="top-left">
          <h2>Our important people is listed here</h2>
        </div>
        <div className="top-right">
          <li onClick={() => setIsEdit(false)}>Cancel</li>
          <div className="garbage">
            <img src={garbage} alt="garbage" />
          </div>
        </div>
      </div>
      <div>
        <EmployeeBox
          employees={employees}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          list={list}
          updateList={updateList}
        />
      </div>
    </div>
  ) : (
    <div className="employees-container">
      <div className="employees-top">
        <div className="top-left">
          <h2>Our important people is listed here</h2>
        </div>
        <div className="top-right">
          <li onClick={() => setIsEdit(true)}>Edit</li>
          <button>Add</button>
        </div>
      </div>
      <div>
        <EmployeeBox
          employees={employees}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          list={list}
          updateList={updateList}
        />
      </div>
    </div>
  );
}

export default Employees;
