import "../css/ArtistPageSubroute/yourprofile.css";
import "../css/ArtistPageSubroute/inprogress.css";
import "../css/ArtistPageSubroute/aside.css";
import { Link } from "react-router-dom";
function YourProfile() {
    const contactInfo = [
        {
          id: 1,
          phone: 1234567899,
          email: "Kabir123@gmail.com",
          socialMedia1: "Kabir_0909",
          socialMedia2: "Kabir.k0909",
          imgSrc: "/findtalent/1.jpg",
        },
      ];
  return (
    <>
      <div className="in-progress">
        <div id="artist">
          <aside>
            <Link className="link" to="/applied">
              <p className="links">Applied</p>
            </Link>
            <Link className="link" to="/inprogress">
              <p className="links ">In Progress</p>
            </Link>
            <Link className="link" to="/completed">
              <p className="links">Completed</p>
            </Link>
            <Link className="link" to="/yourprofile">
              <p className="links  is-active">Your Profile</p>
            </Link>
          </aside>
          <main className="your-profile-section">
            {/* yourprofile */}
            <img src="findtalent/1.jpg" alt="" />
            <div>
              <div className="tags">
                <span>Actor</span>
                <span>Model</span>
              </div>
              <p id="name">Kabir</p>
              <p id="location">Mumabi , Maharashtra</p>
              <div>
                <span className="data">
                  <span>9</span>yrs
                </span>
                <span className="data">
                  <span>132</span>cm
                </span>
                <span className="data">
                  <span>28</span>kg
                </span>
                <span className="data">
                  <span>Male</span>
                </span>
                <hr />
                <div className="bio">
                  <p className="title">Bio</p>
                  <p className="paragraph">
                    Kabir is a charismatic 9-year-old actor and model with a
                    natural talent for captivating audiences.
                  </p>
                </div>
                <div className="skills">
                  <p className="title">Skills</p>
                  <span>Memorization</span> <br />
                  <button className="add-button">+ Add Skills</button>
                </div>
                <p className="title">About</p>
                <p className="paragraph">
                  Hi, I'm Kabir! I love acting, and bringing characters to life.
                  Whether it's performing in front of a camera or walking the
                  runway, I always give my best. In my free time, I enjoy
                  dancing, playing sports, and spending time with my friends.
                  I'm excited to take on new roles and challenges.
                </p>
                <div className="pastexperience">
                  <p className="title">Past experience</p>
                  <p className="header">
                    1. TV Commercial for Health Drink(2022)
                  </p>
                  <p className="subtitle">Lead Child Actor</p>
                  <p className="paragraph">
                    Portrayed an energetic and enthusiastic child enjoying a
                    refreshing health drink. Demonstrated a convincing and
                    joyful performance, capturing the essence of the product's
                    benefits.
                  </p>
                  <button className="add-button">+ Add Experience</button>
                </div>
                <div className="certification">
                  <p className="title">Certification</p>
                  <p className="header">
                    2. Acting Workshop Completion Certificate(2023)
                  </p>
                  <p className="subtitle">Mumbai Acting Academy</p>
                  <p className="paragraph">
                    Successfully completed a 6-week intensive acting workshop
                    focusing on improvisation, voice modulation, and stage
                    presence. Learned from experienced industry professionals
                    and participated in various practical exercises and
                    performances.
                  </p>
                  <button className="add-button">+ Add Certification</button>
                </div>
                <div className="contact-info">
                    <p className="title">Contact Information:</p>
                    <br />
                    {contactInfo.map(({ id, phone, email, socialMedia1, socialMedia2 }) => (
                        <div key={id}>
                            <span className="title">Phone</span>  <span style={{marginLeft:'300px', fontSize:'20px'}}>:</span> <span style={{marginLeft:'20px', fontSize:'20px'}}>{phone}</span> <br />
                            <span className="title">Email ID</span> <span style={{marginLeft:'281px',fontSize:'20px'}} >:</span> <span style={{marginLeft:'20px', fontSize:'20px'}}>{email}</span><br />
                            <span className="title">Social Media Handle (YouTube)</span> <span style={{marginLeft:'34px',fontSize:'20px'}} >:</span> <span style={{marginLeft:'20px', fontSize:'20px'}}>{socialMedia1}</span><br />
                            <span className="title">Social Media Handle 2 (X)</span> <span style={{marginLeft:'92px',fontSize:'20px'}}>:</span> <span style={{marginLeft:'20px', fontSize:'20px'}}>{socialMedia2}</span><br />
                        </div>
                    ))}
                </div>
                <div className="imgs-container">
                    <p className="subtitle">Photos/Videos</p>
                    <img src="/findtalent/1.jpg" alt="" className="imgs" />
                    <img src="/findtalent/1.jpg" alt="" className="imgs" />
                    <img src="/findtalent/1.jpg" alt="" className="imgs" />
                    <img src="/findtalent/1.jpg" alt="" className="imgs" />
                </div>
                <button style={{width:'390px'}} className="add-button">+ Add/Remove Photo/Video</button>
              </div>
              <span><button>Save Details</button></span><span><button>Update Details</button></span>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default YourProfile;
