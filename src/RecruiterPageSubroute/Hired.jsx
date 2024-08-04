import React from "react";
import "../css/RecruiterPageSubroute/aside.css";
import "../css/RecruiterPageSubroute/hired.css";
import { Link } from "react-router-dom";
import AnalyticsDashboard from "../components/AnalyticsDashboard";
import ImgCard from "../components/ImgCard";
function Hired() {
  const kids = [
    {
      id: 1,
      imgSrc: "/findtalent/1.jpg",
      roleOne: "Actor",
      roleTwo: "Model",
      kidName: "Kabir",
      location: "Mumbai Maharashtra",
      kidsAge: 9,
      kidsHeight: 132,
      kidsWeight: 28,
      kidsGender: "Male",
      aboutKid:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci doloremque assumenda, enim quos ipsa tempore.",
      directLink: "/kidsprofile",
    },
    {
      id: 2,
      imgSrc: "/findtalent/2.jpg",
      roleOne: "Model",
      kidName: "Aditi",
      location: "Mumbai Maharashtra",
      kidsAge: 7,
      kidsHeight: 128,
      kidsWeight: 26,
      kidsGender: "Female",
      aboutKid:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci doloremque assumenda, enim quos ipsa tempore.",
      directLink: "/kidsprofile",
    },
    {
      id: 3,
      imgSrc: "/findtalent/3.jpg",
      roleOne: "Actor",
      roleTwo: "Model",
      kidName: "Anushka",
      location: "Mumbai Maharashtra",
      kidsAge: 8,
      kidsHeight: 129,
      kidsWeight: 32,
      kidsGender: "Female",
      aboutKid:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci doloremque assumenda, enim quos ipsa tempore.",
      directLink: "/kidsprofile",
    },
  ];
  return (
    <>
      <div className="hired-section">
        <aside>
          <Link className="link" to="/recruiter">
            <p className="links">Job Posted</p>
          </Link>
          <Link className="link" to="/hired">
            <p className="links is-active">Hired</p>
          </Link>
          <Link className="link" to="/draft">
            <p className="links ">Draft</p>
          </Link>
          <Link className="link" to="/archived">
            <p className="links">Archived</p>
          </Link>
          <Link className="link" to="/profileform">
            <p className="links">Your Profile</p>
          </Link>
        </aside>
        <div>
          <AnalyticsDashboard />
          <div className="kids-section">
            {kids.map(
              ({
                id,
                imgSrc,
                roleOne,
                roleTwo,
                kidName,
                location,
                kidsAge,
                kidsHeight,
                kidsWeight,
                kidsGender,
                aboutKid,
                directLink,
              }) => (
                <div key={id}>
                  <ImgCard
                    imgSrc={imgSrc}
                    roleOne={roleOne}
                    roleTwo={roleTwo}
                    kidName={kidName}
                    location={location}
                    kidsAge={kidsAge}
                    kidsHeight={kidsHeight}
                    kidsWeight={kidsWeight}
                    kidsGender={kidsGender}
                    aboutKid={aboutKid}
                    directLink={directLink}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hired;
