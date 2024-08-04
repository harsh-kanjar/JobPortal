import '../css/components/imgcard.css';
import { FaShareAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";
function ImgCard(props) {
  return (
    <>
      <div className="custom-card">
        <img src={props.imgSrc} alt="" />
        <div className="info">
          <div className="headsection">
            <p>
              <span style={{ marginLeft: "30px" }}>{props.roleOne}</span>{" "}
              {props.roleTwo && <span>{props.roleTwo}</span>}
            </p>
            <div>
              {" "}
              <FaShareAlt /> <CiBookmark />
            </div>
          </div>
          <div className="main">
            <p id="name">{props.kidName}</p>
            <p id="location">{props.location}</p>
            <div className="persnal-info">
              <span className="data">
                <span>{props.kidsAge}</span>yrs
              </span>
              <span className="data">
                <span>{props.kidsHeight}</span>cm
              </span>
              <span className="data">
                <span>{props.kidsWeight}</span>kg
              </span>
              <span className="data">
                <span>{props.kidsGender}</span>
              </span>
            </div>
            <p className="info-para">
              {props.aboutKid}
            </p>
            <Link className="profile-link" to={props.directLink}>
              View full profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImgCard;
