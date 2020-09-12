import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 50px;
  border-style: dashed;
  border-radius: 2px;
  border-width: 1.2px;
  background-color: white;
  border-color: #e2e3e7;
  color: #909195;
  width: 123px;
`;

const UploadButton = ({ props }) => {
  const [file, setFile] = React.useState(null);
  const hiddenFileInput = React.useRef(null);
  const [brand, setBrand] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    if (event.target.files.length === 1) {
      const fileUploaded = URL.createObjectURL(event.target.files[0]);
      const test = event.target.files[0];
      setFile(fileUploaded);
      setBrand((prev) => ({ ...prev, file: test }));
    }
    return null;
  };

  const Image = () => {
    if (!file) {
      return null;
    } else
      return (
        <>
          <img
            className="imgGallery"
            src={file}
            alt=""
            onClick={() => {
              setFile("");
            }}
          />
        </>
      );
  };

  const ReplacedImage = () => {
    if (!file) {
      return (
        <div className="uploadButton">
          <Button onClick={handleClick}></Button>
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{ display: "none" }}
            multiple
          />
        </div>
      );
    } else return <Image />;
  };

  return <ReplacedImage />;
};

export default UploadButton;
