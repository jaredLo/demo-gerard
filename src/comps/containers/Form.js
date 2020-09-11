import React from "react";

function Form() {
  return (
    <div className="contact-form">
      <form>
        <div className="form-name">
          <label>Name</label>
          <input type="name" placeholder="Enter your name" />
        </div>
        <div className="form-name">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-name">
          <label>Subject</label>
          <select>
            <option disabled value="Please select your subject">
              Please select your subject
            </option>
            <option value="Subject 1">Subject 1</option>
            <option value="Subject 2">Subject 2</option>
            <option value="Subject 3">Subject 3</option>
            <option value="Subject 4">Subject 4</option>
          </select>
        </div>
        <div className="form-name">
          <label>Message</label>
          <textarea placeholder="Write your message here" />
        </div>
        <button>Send</button>
      </form>
    </div>
  );
}

export default Form;
