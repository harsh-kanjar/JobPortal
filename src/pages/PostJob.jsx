import React from "react";
import { FaUpload } from "react-icons/fa";
import "../css/postjob.css";
function PostJob() {
  const typesOfProject = [
    { id: 1, badge: "Theater" },
    { id: 2, badge: "Film" },
    { id: 3, badge: "TV shows & Web series" },
    { id: 4, badge: "Commercials" },
    { id: 5, badge: "Live Events" },
  ];
  const typesOfOrganization = [
    {
      id: 1,
      badge: "Theater",
    },
  ];
  return (
    <div className="form-container my-4">
      <form>
        <h2>Type of Project</h2>
        <div className="badge-group">
          <span className="badge">Theater</span>
          <span className="badge">Film</span>
          <span className="badge">TV shows & Web series</span>
          <span className="badge">Commercials</span>
          <span className="badge">Live Events</span>
          <span className="badge">Music Videos</span>
          <span className="badge">Video Games</span>
          <span className="badge">Podcast</span>
        </div>

        <h2>Type of Organization</h2>
        <div className="badge-group">
          <span className="badge">Theater</span>
          <span className="badge">Film</span>
          <span className="badge">TV shows & Web series</span>
          <span className="badge">Live Events</span>
        </div>

        <h2>Other Details</h2>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="company-name">Company Name</label>
            <input type="text" id="company-name" placeholder="Company Name" />
          </div>
          <div className="form-group">
            <label htmlFor="recruiter">Recruiter</label>
            <input type="text" id="recruiter" placeholder="Recruiter" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="company-website">Company Website</label>
            <input
              type="text"
              id="company-website"
              placeholder="Company Website"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="job-title">Job Title</label>
            <input type="text" id="job-title" placeholder="Job Title" />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" placeholder="Search by City" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="about-project">About the Project</label>
            <input
              type="text"
              id="about-project"
              placeholder="About the project"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="job-role">Job Role</label>
            <input type="text" id="job-role" placeholder="Job Role" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="start-by">Start By</label>
            <input type="date" id="start-by" />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration</label>
            <input type="text" id="duration" placeholder="Duration" />
          </div>
          <div className="form-group">
            <label htmlFor="apply-by">Apply By</label>
            <input type="date" id="apply-by" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="skills-required">Skills Required</label>
            <input type="text" id="skills-required" placeholder="Type Skill" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="compensation">Compensation (in Rs)</label>
            <input type="text" id="compensation" placeholder="Compensation" />
          </div>
          <div className="form-group">
            <div class="btn-group">
              <button
                type="button"
                class="drop-btn dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Day
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Monday
                </a>
                <a class="dropdown-item" href="#">
                  Tuesday
                </a>
                <a class="dropdown-item" href="#">
                  Wednesday
                </a>
                <a class="dropdown-item" href="#">
                  Thursday
                </a>
                <a class="dropdown-item" href="#">
                  Friday
                </a>

              </div>
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="other-facilities">Other Facilities</label>
            <input
              type="text"
              id="other-facilities"
              placeholder="Other Facilities"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="age">Age (in years)</label>
            <input type="text" id="age" placeholder="Age" />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender">
              <option>Choose Gender</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="ethnicity">Ethnicity</label>
            <select id="ethnicity">
              <option>Choose Ethnicity</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="height">Height</label>
            <input type="text" id="height" placeholder="Height" />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight</label>
            <input type="text" id="weight" placeholder="Weight" />
          </div>
          <div className="form-group">
            <label htmlFor="body-type">Body Type</label>
            <select id="body-type">
              <option>Choose Body Type</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="hair-color">Hair Color</label>
            <input type="text" id="hair-color" placeholder="Hair Color" />
          </div>
          <div className="form-group">
            <label htmlFor="eye-color">Eye Color</label>
            <input type="text" id="eye-color" placeholder="Eye Color" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="language-required">Language Required</label>
            <input
              type="text"
              id="language-required"
              placeholder="Type Language"
            />
          </div>
        </div>

        <div className="form-row">
          <button type="submit" className="submit-btn">
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostJob;
