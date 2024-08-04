import '../css/makeprofile.css'
import "../css/postjobcrausel.css";
import { FaTheaterMasks, FaFilm, FaMicrophone } from 'react-icons/fa';
import Slider from 'react-slick';
import JobPostCard from "../components/JobPostCard";
import { Link } from "react-router-dom";
function MakeProfile() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    
      const cards = [
        {
          icon: <FaTheaterMasks />,
          title: "Performer",
          description: "Find dynamic talent for stage",
        },
        {
          icon: <FaFilm />,
          title: "Actor",
          description: "Discover the stars for your screen",
        },
        {
          icon: <FaMicrophone />,
          title: "Voiceover Artists",
          description: "Find the ideal voice",
        },
        {
          icon: <FaFilm />,
          title: "Content Creator",
          description: "Create engaging content",
        },
      ];
      return (
        <>
          <div className="make-profile-section">
            <p className="heading">Build Your Profile and Stand Out!</p>
            <p className="paragraph">
            Showcase your unique talent and get noticed! Craft a compelling profile to highlight your skills, experience, and personality. Connect with industry professionals and unlock exciting opportunities to take your career to new heights.
            </p>
            <p className="subtitle">What type of job are you looking for?</p>
            <div className="myslider">
              <Slider {...settings}>
                {cards.map((card, index) => (
                  <JobPostCard
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </Slider>
            </div>
            <p>Looking for something else?</p>
            <button style={{background:'white',color:'#BB362A',border:'1px solid black',width:'290px'}}>Other</button>
                <br />
            <Link to="/postjobform"><button style={{marginLeft:'35%',width:'325px',marginBottom:'350px',marginTop:'100px'}}>Next</button></Link>
          </div>
        </>
      );
}

export default MakeProfile
