import AnalyticsDashboard from "../components/AnalyticsDashboard";
import JobCard from "../components/JobCard";
import "../css/ArtistPageSubroute/inprogress.css";
import "../css/ArtistPageSubroute/aside.css";
import { Link } from "react-router-dom";
function InProgress() {
  const jobsInProgress = [
    {
      id: 1,
      headline: "TV Commercial",
      location: "Delhi",
      description:
        "Seeking a charismatic child actor for a TV commercial. Must deliver lines naturally and convey emotions convincingly on camera.",
      appliedDate: "1st Jan 20xx",
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
              <p className="links is-active">In Progress</p>
            </Link>
            <Link className="link" to="/completed">
              <p className="links ">Completed</p>
            </Link>
            <Link className="link" to="/yourprofile">
              <p className="links">Your Profile</p>
            </Link>
          </aside>
          <main className="section-artist">
            <AnalyticsDashboard />

            {/* inprogress */}
            <p className="headline">Jobs In Progress</p>
            {jobsInProgress.map(
              ({ id, headline, location, description, appliedDate }) => (
                <div key={id}>
                  <JobCard
                    headline={headline}
                    location={location}
                    description={description}
                    appliedDate={appliedDate}
                  />
                </div>
              )
            )}
            <p>70% complete</p>
          </main>
        </div>
      </div>
    </>
  );
}

export default InProgress;
