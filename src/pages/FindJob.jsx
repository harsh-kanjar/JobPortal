import "../css/findJob.css";
import Card from "../components/Card";
function FindJob() {
  const filters = [
    {
      id: 1,
      name: "Job type",
      categoty: [
        "categoty 1",
        "categoty 2",
        "categoty 3",
        "categoty 4",
        "categoty 5",
      ],
    },
    {
      id: 2,
      name: "Age",
      categoty: [
        "categoty 1",
        "categoty 2",
        "categoty 3",
        "categoty 4",
        "categoty 5",
      ],
    },
    {
      id: 3,
      name: "Gender",
      categoty: ["Male", "Female", "Other"],
    },
    {
      id: 4,
      name: "Location",
      categoty: [
        "categoty 1",
        "categoty 2",
        "categoty 3",
        "categoty 4",
        "categoty 5",
      ],
    },
    {
      id: 5,
      name: "Production Type",
      categoty: [
        "categoty 1",
        "categoty 2",
        "categoty 3",
        "categoty 4",
        "categoty 5",
      ],
    },
    {
      id: 6,
      name: "Ethenicity",
      categoty: [
        "categoty 1",
        "categoty 2",
        "categoty 3",
        "categoty 4",
        "categoty 5",
      ],
    },
    {
      id: 7,
      name: "Posted By",
      categoty: [
        "categoty 1",
        "categoty 2",
        "categoty 3",
        "categoty 4",
        "categoty 5",
      ],
    },
    {
      id: 8,
      name: "Language",
      categoty: [
        "categoty 1",
        "categoty 2",
        "categoty 3",
        "categoty 4",
        "categoty 5",
      ],
    },
    {
      id: 9,
      name: "Compensation",
      categoty: [
        "categoty 1",
        "categoty 2",
        "categoty 3",
        "categoty 4",
        "categoty 5",
      ],
    },
  ];
  const jobInfo = [
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
    <div className="findjob">
      <div className=" job-find-section-1">
        <input type="text" name="" id="search-bar" placeholder="search" />
        <div className="filters">
          {filters.map(({ id, name, categoty }) => (
            <div class="btn-group" key={id}>
              <a
                type="button"
                class="btn btn-light dropdown-toggle drop-custom"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                {name}
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  {categoty[0]}
                </a>
                <a class="dropdown-item" href="#">
                  {categoty[1]}
                </a>
                <a class="dropdown-item" href="#">
                  {categoty[2]}
                </a>
                <a class="dropdown-item" href="#">
                  {categoty[3]}
                </a>
                <a class="dropdown-item" href="#">
                  {categoty[4]}
                </a>
              </div>
            </div>
          ))}
          <br />
          <br />
          <button>Apply</button>
        </div>

        <div className="sort-by">
          <span>Sort by </span>
          <span>Newest</span>
          <span>Oldest</span>
          <span>Apply Date</span>
          <span>Nearest to me</span>
        </div>
      </div>

      <div className="job-find-section-2">

        {jobInfo.map(({ id, title, location, description, date }) => (
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
  );
}

export default FindJob;
