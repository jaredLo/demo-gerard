import React from "react";
import Form from "./containers/Form";
import SimpleMap from "./containers/SimpleMap";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-top">
        <h2>Contact us</h2>
      </div>
      <div className="contact-content">
        <Form />
        <div className="maps">
          <SimpleMap />
        </div>
      </div>
    </div>
  );
}

export default Contact;
