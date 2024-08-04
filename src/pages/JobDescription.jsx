import '../css/jobdescription.css'
import { FaShareAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
function JobDescription() {
  return (
    <>
    <div className="container-fluid mt-5" style={{ borderRadius: "10px" }}>
      <div className="card">
        <div className="card-body">
          <h2 className="text-danger">Job Title</h2>
          <p className="text-muted">Posted on: 10/06/24</p>
          <hr />

          <div className="mb-4">
            <h4 className="text-danger">About Project</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <hr />
          <div className="mb-4">
            <h4 className="text-danger">Your Role</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-danger">
              Skills Required: Skill 1, Skill 2, Skill 3
            </p>
          </div>
          <hr />
          <div className="mb-4">
            <h4 className="text-danger">Company Details</h4>
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td>Name of company:</td>
                  <td>Talent for Talent</td>
                </tr>
                <tr>
                  <td>Recruiter/Owner:</td>
                  <td>Rahul Singh</td>
                </tr>
                <tr>
                  <td>Member since:</td>
                  <td>2022</td>
                  <td>Verified user</td>
                  <td>08 Jobs Posted</td>
                  <td>03 Hired</td>
                </tr>
                <hr />
                <tr>
                  <td>Location:</td>
                  <td>Mumbai, Maharashtra</td>
                </tr>
                <tr>
                  <td>Start By:</td>
                  <td>01/07/24</td>
                </tr>
                <tr>
                  <td>Duration:</td>
                  <td>6 months</td>
                </tr>
                <tr>
                  <td>Compensation:</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Other Facilities:</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Website:</td>
                  <td>Talentfortalent.in</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between">
            <button style={{ width: "620px" }}>Apply Now</button>
            <button style={{ width: "620px" }}>Shortlist</button>
          </div>
        </div>
      </div>
    </div>
    <div className="find-similar-jobs">
        <p className='header'>View Similar Jobs</p>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <div className="job-mini-card">
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <p className="job-title">Job Title</p>
                    <div className="ic">
                        <span><FaShareAlt/></span>
                        <span><CiBookmark/></span>
                    </div>
                </div>
                    <p>Location</p>
                    <p>Job Description</p>
                    <p style={{marginTop:'40px'}}>Apply By</p>
                    <p style={{color:' #bb362a', fontSize:'18px', marginTop:'20px',marginBottom:'20px'}}>View all details and apply</p>
            </div>

            <div className="job-mini-card">
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <p className="job-title">Job Title</p>
                    <div className="ic">
                        <span><FaShareAlt/></span>
                        <span><CiBookmark/></span>
                    </div>
                </div>
                    <p>Location</p>
                    <p>Job Description</p>
                    <p style={{marginTop:'40px'}}>Apply By</p>
                    <p style={{color:' #bb362a', fontSize:'18px', marginTop:'20px',marginBottom:'20px'}}>View all details and apply</p>
            </div>

            <div className="job-mini-card">
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <p className="job-title">Job Title</p>
                    <div className="ic">
                        <span><FaShareAlt/></span>
                        <span><CiBookmark/></span>
                    </div>
                </div>
                    <p>Location</p>
                    <p>Job Description</p>
                    <p style={{marginTop:'40px'}}>Apply By</p>
                    <p style={{color:' #bb362a', fontSize:'18px', marginTop:'20px',marginBottom:'20px'}}>View all details and apply</p>
            </div>
        </div>
    </div>
    </>
  );
}

export default JobDescription;
