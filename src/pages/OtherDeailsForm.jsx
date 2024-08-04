import '../css/otherdetailsform.css'
import { FaUpload } from 'react-icons/fa';
function OtherDeailsForm() {
    return (
        <div className="my-4 form-container">
          <form>
            <h2>Other Details</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <input type="text" id="bio" placeholder="Write a short bio" />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="about">About yourself</label>
                <input type="text" id="about" placeholder="Write a brief information about yourself" />
              </div>
            </div>
    
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="skills">Skills</label>
                <input type="text" id="skills" placeholder="Your Skills" />
              </div>
            </div>
    
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="language-required">Language Required</label>
                <input type="text" id="language-required" placeholder="Type Languages" />
              </div>
            </div>
    
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="languages-known">Languages Known</label>
                <input type="text" id="languages-known" placeholder="Type Languages" />
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
                <label htmlFor="social-media-1 ">Social Media Handle(s)</label>
                <input className='my-2' type="text" id="social-media-1" placeholder="Social Media Handle 1" />
                <input className='my-2' type="text" id="social-media-2" placeholder="Social Media Handle 2" />
                <input className='my-2' type="text" id="social-media-3" placeholder="Social Media Handle 3" />
              </div>
            </div>
    
            <h2>Past Experience</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="project-name">Name of the Project</label>
                <input type="text" id="project-name" placeholder="Name of the Project" />
              </div>
              <div className="form-group">
                <label htmlFor="year">Year</label>
                <input type="text" id="year" placeholder="Year" />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="duration">Duration (in months)</label>
                <input type="text" id="duration" placeholder="Duration" />
              </div>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <input type="text" id="role" placeholder="Role/Tasks" />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="about-project">About the Project</label>
                <input type="text" id="about-project" placeholder="Brief Description of the project and your role in the project" />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="showreel-url">Showreel URL (if any)</label>
                <input type="text" id="showreel-url" placeholder="Add link to showreel or your work sample" />
              </div>
            </div>
    
            <h2>Upload Photos/Videos</h2>
            
            <div className="upload-section">
              <p>To ensure the security and authenticity of our community, please upload the required documents for verification. This step helps us prevent fraud and maintain a safe environment for all our members.</p>
              <div className="upload-box">
                <FaUpload size={50} color="#ffff" /><br /><br />
                <span>Drag files to upload</span>
                <span>or</span>
                
              </div>
            </div>
            
            <div className="form-row">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      );
    };
    

export default OtherDeailsForm
