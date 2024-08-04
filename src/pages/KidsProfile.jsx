import "../css/kidsprofile.css";
function KidsProfile() {
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
    <div className="kidsprofile">
      <div className="profile-section-1">
        {contactInfo.map(
          ({ id, phone, email, socialMedia1, socialMedia2, imgSrc }) => (
            <div className="persnal-info" key={id}>
              <img src={`${imgSrc}`} alt="profile" />
              <div className="details">
                <p>Contact Information</p>
                <p>Phone No. :</p>
                <p>{phone}</p>
                <p>Email ID :</p>
                <p>{email}</p>
                <p>Social Media Handle (Instagram) :</p>
                <p>{socialMedia1}</p>
                <p>Social Media Handle 1 (Youtube) :</p>
                <p>{socialMedia2}</p>
              </div>
            </div>
          )
        )}
      </div>

      <div className="profile-section-2">
        <div className="tags">
          <span>Actor</span>
          <span>Model</span>
        </div>
        <p id="name">Kabir</p>
        <p id="location">Mumabi , Maharashtra</p>
        <div className="persnal-info">
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
            Kabir is a charismatic 9-year-old actor and model with a natural
            talent for captivating audiences.
          </p>
          </div>
          <hr />
          <div className="skills">
            <p className="title">Skills</p>
            <span>Memorization</span>
          </div>
          <hr />
          <p className="title">About</p>
          <p className="paragraph">
            Hi, I'm Kabir! I love acting, and bringing characters to life.
            Whether it's performing in front of a camera or walking the runway,
            I always give my best. In my free time, I enjoy dancing, playing
            sports, and spending time with my friends. I'm excited to take on
            new roles and challenges.
          </p>
          <div className="pastexperience">
            <p className="title">Past experience</p>
            <p className="header">1. TV Commercial for Health Drink(2022)</p>
            <p className="subtitle">Lead Child Actor</p>
            <p className="paragraph">
              Portrayed an energetic and enthusiastic child enjoying a
              refreshing health drink. Demonstrated a convincing and joyful
              performance, capturing the essence of the product's benefits.
            </p>
          </div>
          <div className="certification">
            <p className="title">Certification</p>
            <p className="header">2. Acting Workshop Completion Certificate(2023)</p>
            <p className="subtitle">Mumbai Acting Academy</p>
            <p className="paragraph">
              Successfully completed a 6-week intensive acting workshop focusing
              on improvisation, voice modulation, and stage presence. Learned
              from experienced industry professionals and participated in
              various practical exercises and performances.
            </p>
          </div>
          <div className="photosandvideos">
            <p className="title">Photos/Videos</p>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div className="badges">
            <span>Hire</span>
            <span>Message</span>
            <span>Shortlist</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KidsProfile;
