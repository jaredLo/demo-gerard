import React, { useState } from "react";
import userPic from "../../assets/7-icons/user.svg";
import pencil from "../../assets/7-icons/pencil.svg";
// import UploadPicture from "./UploadPicture";

function AddBox(props) {
  const { list, updateList } = props;
  const { add, setAdd } = props;
  const [img, setImg] = useState(userPic);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [desc, setDesc] = useState("");
  const hiddenFileInput = React.useRef(null);

  const onClickHide = (e) => {
    if (e.target.classList.contains("add-backdrop")) {
      setAdd(false);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    if (event.target.files.length === 1) {
      const fileUploaded = URL.createObjectURL(event.target.files[0]);
      setImg(fileUploaded);
    }
    return null;
  };

  const AddEmployees = (event) => {
    event.preventDefault();
    const key = Math.floor(Math.random() * (9999 - 10));
    updateList([...list, { img, name, position, desc, key }]);
    setAdd(false);
  };

  return (
    <div className="add-backdrop" onClick={onClickHide}>
      <form className="add-container">
        <div className="addbox-top">
          <label>Add People</label>
          <span className="times">&times;</span>
        </div>
        <div className="addbox-dp">
          {/* <UploadPicture /> */}
          <img className="user" src={img} alt="upload" />
        </div>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: "none" }}
          multiple
        />
        <img
          className="pencil"
          src={pencil}
          alt="pencil"
          onClick={handleClick}
        />
        <div className="add-input">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Position</label>
          <input
            type="text"
            placeholder="Enter position"
            onChange={(e) => setPosition(e.target.value)}
          />
          <label>Description</label>
          <textarea
            placeholder="Enter description"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="add-button-container">
          <li>Cancel</li>
          <button onClick={AddEmployees}>Save</button>
        </div>
      </form>
    </div>
  );
}

export default AddBox;
