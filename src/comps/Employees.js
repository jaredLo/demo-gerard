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
import AddBox from "./containers/AddBox";

function Employees() {
  const [isEdit, setIsEdit] = useState(false);
  const [list, updateList] = useState([
    {
      name: "Frank Ltarnam",
      position: "CEO",
      img: picture1,
      key: "employee0",
    },
    {
      name: "Bob Shefley",
      position: "UI/UX Designer",
      img: picture4,
      key: "employee1",
    },
    {
      name: "Jason Steward",
      position: "Full-stack developer",
      img: picture2,
      key: "employee2",
    },
    {
      name: "Sabrina Rachel",
      position: "Marketing",
      img: picture3,
      key: "employee3",
    },
    {
      name: "Marissa Lawren",
      position: "Customer Support",
      img: picture,
      key: "employee4",
    },
    {
      name: "Romane Regad",
      position: "Jr UI/UX Designer",
      img: picture5,
      key: "employee5",
    },
    {
      name: "Tania Ferreira",
      position: "Business Analyst",
      img: picture6,
      key: "employee6",
    },
  ]);

  const [selected, setSelected] = useState([]);
  const [add, setAdd] = useState(false);

  const DeleteProducts = () => {
    const filteredProducts = list.filter((e) => !selected.includes(e));
    return updateList(filteredProducts);
  };

  return isEdit ? (
    <div className="employees-container">
      <div className="employees-top">
        <div className="top-left">
          <h2>Our important people is listed here</h2>
        </div>
        <div className="top-right">
          <li onClick={() => setIsEdit(false)}>Cancel</li>
          <div className="garbage" onClick={DeleteProducts}>
            <img src={garbage} alt="garbage" />
          </div>
        </div>
      </div>
      <div>
        <EmployeeBox
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          list={list}
          updateList={updateList}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  ) : (
    <div className="employees-container">
      {add && <AddBox add={add} setAdd={setAdd} />}
      <div className="employees-top">
        <div className="top-left">
          <h2>Our important people is listed here</h2>
        </div>
        <div className="top-right">
          <li onClick={() => setIsEdit(true)}>Edit</li>
          <button onClick={() => setAdd(true)}>Add</button>
        </div>
      </div>
      <div>
        <EmployeeBox
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          list={list}
          updateList={updateList}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
}

export default Employees;
