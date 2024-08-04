import React from "react";
import { FaUpload } from "react-icons/fa";
import "../css/personaldetailsform.css";
function PersonalDetailForm() {
  return (
    <div className="form-container my-4">
      <form>
        <h2>Personal Details</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" placeholder="Last Name" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <input type="text" id="gender" placeholder="Gender" />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob-day"
              placeholder="DD|MM|YYYY"
              className="dob"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-number">Contact Number</label>
            <input
              type="text"
              id="contact-number"
              placeholder="Contact Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="alt-contact-number">Alternate Contact Number</label>
            <input
              type="text"
              id="alt-contact-number"
              placeholder="Alternate Contact Number"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email-id">Email ID</label>
            <input type="email" id="email-id" placeholder="Email ID" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="Address" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="City" />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input type="text" id="state" placeholder="State" />
          </div>
        </div>
        <h2>Upload Files</h2>
        <div className="upload-section">
          <p>
            To ensure the security and authenticity of our community, please
            upload the required documents for verification. This step helps us
            prevent fraud and maintain a safe environment for all our members.
          </p>
          <div className="upload-box">
            <FaUpload size={50} color="#ffff" />
            <br />
            <br /> <span>Drag files to upload</span>
            <span>or</span>
          </div>
        </div>
        <div className="form-row">
          <button type="submit" className="submit-btn">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetailForm;
