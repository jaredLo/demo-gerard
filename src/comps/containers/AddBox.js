import React from "react";
import user from "../../assets/7-icons/user.svg";
import pencil from "../../assets/7-icons/pencil.svg";

function AddBox({ add, setAdd }) {
  const onClickHide = (e) => {
    if (e.target.classList.contains("add-backdrop")) {
      setAdd(false);
    }
  };

  return (
    <div className="add-backdrop" onClick={onClickHide}>
      <form className="add-container">
        <div className="addbox-top">
          <label>Add People</label>
          <span className="times">&times;</span>
        </div>
        <div className="addbox-dp">
          <img className="user" src={user} alt="upload" />
        </div>
        <img className="pencil" src={pencil} alt="pencil" />

        <div className="add-input">
          <label>Name</label>
          <input type="text" placeholder="Enter name" />
          <label>Position</label>
          <input type="text" placeholder="Enter position" />
          <label>Description</label>
          <textarea placeholder="Enter description" />
        </div>
        <div className="add-button-container">
          <li>Cancel</li>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}

export default AddBox;
