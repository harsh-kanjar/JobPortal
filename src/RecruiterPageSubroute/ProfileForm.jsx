import React from "react";
import "../css/RecruiterPageSubroute/aside.css";
import "../css/RecruiterPageSubroute/profileform.css";
import { Link } from "react-router-dom";
function ProfileForm() {
  return (
    <>
      <div className="profileform">
        <aside>
        <Link className="link" to="/recruiter">
            <p className="links">Job Posted</p>
          </Link>
          <Link className="link" to="/hired">
            <p className="links ">Hired</p>
          </Link>
          <Link className="link" to="/draft">
            <p className="links">Draft</p>
          </Link>
          <Link className="link" to="/archived">
            <p className="links">Archived</p>
          </Link>
          <Link className="link" to="/profileform">
            <p className="links is-active">Your Profile</p>
          </Link>
        </aside>
        <div className="form-container-custom mt-5">
          <h2 className="text-danger" style={{marginTop:'36px'}}>Personal Details</h2>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="gender">Gender</label>
                <input
                  type="text"
                  className="form-control"
                  id="gender"
                  placeholder="Gender"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="dob">Date of Birth</label>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="DD"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MM"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="YYYY"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="contactNumber">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="contactNumber"
                  placeholder="Contact Number"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="alternateContactNumber">
                  Alternate Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="alternateContactNumber"
                  placeholder="Alternate Contact Number"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="emailId">Email ID</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  placeholder="Email ID"
                />
              </div>
            </div>
            <div className="form-group">
              <label for="address">Address</label>
              <textarea
                className="form-control"
                id="address"
                rows="2"
                placeholder="Address"
              ></textarea>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="City"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="state">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  placeholder="State"
                />
              </div>
            </div>
            <h3>Company Details</h3>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="companyName">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  placeholder="Company Name"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="companyWebsite">Company Website (URL)</label>
                <input
                  type="text"
                  className="form-control"
                  id="companyWebsite"
                  placeholder="Company Website"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="companyContactNumber">Company Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="companyContactNumber"
                  placeholder="Company Contact Number"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="companyEmailId">Company Email ID</label>
                <input
                  type="email"
                  className="form-control"
                  id="companyEmailId"
                  placeholder="Company Email ID"
                />
              </div>
            </div>
            <div className="form-group">
              <label for="companyAddress">Company Address</label>
              <textarea
                className="form-control"
                id="companyAddress"
                rows="2"
                placeholder="Company Address"
              ></textarea>
            </div>
            <div className="form-group">
              <a href="#" className="text-danger">
                See Uploaded Documents
              </a>
            </div>
            <button type="submit">
              Save Details
            </button>
            <button type="button">
              Update Documents
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProfileForm;
