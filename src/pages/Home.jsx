import '../css/home.css'
import { CiBookmark } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

function Home() {
  const featuredJob = [
    {
      id: 1,
      imgSource: '1.png',
      backgroundColor: "#6fda44",
      field: "Garba Dance",
      tag: "Dancer",
      location: "Mumbai",
      time: "6 days Remaining",
      applyLink: "/",
    },
    {
      id: 2,
      imgSource: '2.png',
      backgroundColor: "#000000",
      field: "Clothing Commercial",
      tag: "Acting",
      location: "Delhi",
      time: "6 days Remaining",
      applyLink: "/",
    },
    {
      id: 3,
      imgSource: '3.png',
      backgroundColor: "#EB524F",
      field: "Model for Kids Bag Brand",
      tag: "Modeling",
      location: "Pune",
      time: "6 days Remaining",
      applyLink: "/",
    },
    {
      id: 4,
      imgSource:'4.png',
      backgroundColor: "#1877F2",
      field: "TV Series",
      tag: "Acting",
      location: "Mumbai",
      time: "6 days Remaining",
      applyLink: "/",
    },
  ];
  return (
    <div className='home'>
    
      {/* section 1 */}
      <div className="container container-custom">
        <div className="info-card">
          <div>
            <div className="headline">Casting the Stars of Tomorrow</div>
            <p>
              At Book My Kids, we discover and nurture young talent, connecting
              aspiring actors and models with opportunities to shine.
            </p>
          </div>
          <button className="btn-custom">Join now</button>
        </div>
        <div>
          <img className="img-container" src="/home/homepage-girl.png" alt="" />
        </div>
      </div>
      {/* section 2 */}
      <div className=" home-secrion-2">
        <p className="section-2-headline">
          Join Bookmykids and start your journey to stardom
        </p>
        <p className="section-2-para">
          Book My Kids is your premier casting platform dedicated to discovering
          and nurturing young talent. We connect aspiring child actors, models,
          and performers with top-tier auditions and casting opportunities in
          the entertainment industry. Our expert team ensures a seamless process
          from talent discovery to stardom, providing the support and resources
          needed for your child to shine. Join Book My Kids today and watch your
          child's dreams come to life on the big stage.
        </p>
      </div>
      {/* section 3 */}
      <div className="">
        <div className="section-3-head">
          <p className="section-3-headline">Feature Job</p>
          <button className="section-3-head-btn">View all <FaArrowRightLong /></button>
        </div>
      </div>
      {/* section 4 */}
      {featuredJob.map(
        ({
          id,
          imgSource,
          backgroundColor,
          field,
          tag,
          location,
          time,
          applyLink,
        }) => (
          <div className="section-4" key={id}>
            <div className="section-4-info">
              <div className="img" style={{ backgroundColor }}>
                <img className="section-4-img" src={`/home/section-4/${imgSource}`} alt="" />
              </div>
              <div>
                <p>
                  <span className="field">{field}</span>
                  <span className="tag">{tag}</span>
                </p>
                <p>
                  <span className="location"><CiLocationOn />
                  {location}</span>
                  <span><SlCalender /></span><span className="time">{time}</span>
                </p>
              </div>
            </div>
            <div>
              <span className="bookmarked"><CiBookmark /></span>
              <button onClick={() => (window.location.href = applyLink)}>
                Apply now <FaArrowRightLong />
              </button>
            </div>
          </div>
        )
      )}
      {/* section 5 */}
      <div className="section-5">
      <div className="custom-badge">
      <p>Connect, collaborate, and grow with fellow actors, models, and creatives. Share insights, spark discussions, and forge valuable connections in our network. Elevate your craft and expand your horizons with like-minded artists today!</p>
      <button>Join our Community</button>
      </div>

      

      {/* replica section 3 */}
      <div>
        <div className="section-3-head">
          <p className="section-3-headline" style={{fontSize:'28px'}}>Need talent for your project? We've got you covered.
          </p>
          <button className="section-3-head-btn">View all <FaArrowRightLong /></button>
        </div>
      </div>

      <div className="kids-cards">
        <img src="/home/section-5/actor.png" alt="" />
        <img src="/home/section-5/model.png" alt="" />
        <img src="/home/section-5/voiceover.png" alt="" />
      </div>

      <div className="custom-badge" style={{marginBottom:'148px'}}>
      <p>Explore a world of talent for your project! From actors to models, voice-over artists, freelancers, and crew members, find your perfect fit to bring your project to life with flair and finesse.</p>
      <button>Post a Job</button>
      </div>
      </div>


      
    </div>
  );
}

export default Home;
