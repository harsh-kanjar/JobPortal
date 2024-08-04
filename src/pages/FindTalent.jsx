import "../css/findtalent.css";
import { FaShareAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";
import ImgCard from "../components/ImgCard";
function FindTalent() {
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
      imgSrc:'/findtalent/2.jpg',
      roleOne:'Model',
      kidName:'Aditi',
      location:'Mumbai Maharashtra',
      kidsAge:7,
      kidsHeight:128,
      kidsWeight:26,
      kidsGender:'Female',
      aboutKid:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci doloremque assumenda, enim quos ipsa tempore.',
      directLink:'/kidsprofile'
  },
  {
    id: 3,
    imgSrc:'/findtalent/3.jpg',
    roleOne:'Actor',
    roleTwo:'Model',
    kidName:'Anushka',
    location:'Mumbai Maharashtra',
    kidsAge:8,
    kidsHeight:129,
    kidsWeight:32,
    kidsGender:'Female',
    aboutKid:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium adipisci doloremque assumenda, enim quos ipsa tempore.',
    directLink:'/kidsprofile'
}
  ];

  return (
    <div className="findtalent">
      {/* section 1 */}
      <div className="section-1-find-talent">
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
        {/* section 2 */}
        <div className="section-2-find-talent">
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
  );
}

export default FindTalent;
