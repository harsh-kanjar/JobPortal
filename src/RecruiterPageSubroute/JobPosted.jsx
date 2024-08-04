import React from "react";
import "../css/RecruiterPageSubroute/jobposted.css";
import "../css/RecruiterPageSubroute/aside.css";
import { Link } from "react-router-dom";
import AnalyticsDashboard from "../components/AnalyticsDashboard";
import Card from "../components/Card";

function JobPosted() {
  const jobPosted = [
    {
      id: 1,
      title: "TV Commercials",
      location: "Delhi",
      description:
        "Seeking a charismatic child actor for a TV commercial. Must deliver lines naturally and convey emotions convincingly on camera.",
      date: "1st Jan 20xx",
    },
    {
      id: 2,
      title: "TV Commercials",
      location: "Delhi",
      description:
        "Seeking a charismatic child actor for a TV commercial. Must deliver lines naturally and convey emotions convincingly on camera.",
      date: "1st Jan 20xx",
    },
  ];
  return (
    <>
      <div className="job-posted">
        <aside>
          <Link className="link" to="/recruiter">
            <p className="links  is-active">Job Posted</p>
          </Link>
          <Link className="link" to="/hired">
            <p className="links">Hired</p>
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

          <div style={{ marginLeft: "18px" }}>
            {jobPosted.map(
              ({
                id,
                title,
                location,
                description,
                date,
                btn_1,
                btn_2,
                btn_3,
                btn_4,
              }) => (
                <Card
                  key={id}
                  title={title}
                  location={location}
                  description={description}
                  date={date}
                  btn_1={"Edit Post"}
                  btn_2={"Edit Post"}
                  btn_3={"Edit Post"}
                  btn_4={"Edit Post"}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default JobPosted;