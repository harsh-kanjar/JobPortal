import { Link } from "react-router-dom";
import AnalyticsDashboard from "../components/AnalyticsDashboard";
import "../css/RecruiterPageSubroute/draft.css";
import Card from "../components/Card";
function Draft() {
  const draft = [
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
      <div className="draft-section">
        <aside>
          <Link className="link" to="/recruiter">
            <p className="links">Job Posted</p>
          </Link>
          <Link className="link" to="/hired">
            <p className="links ">Hired</p>
          </Link>
          <Link className="link" to="/draft">
            <p className="links is-active">Draft</p>
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
            {draft.map(({ id, title, location, description, date }) => (
              <Card
                key={id}
                title={title}
                location={location}
                description={description}
                date={date}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Draft;
