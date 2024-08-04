import { FaShareAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import '../css/components/card.css'
function Card(props) {
  return (
    <>
      <div style={{width:'100%',height:'20%'}} className="job-card">
        <div className="headsection">
          <p id="title">{props.title}</p>
          <div className="icons">
            <span>
              <FaShareAlt />
            </span>
            <span>
              <CiBookmark />
            </span>
          </div>
        </div>
        <p className="location">{props.location}</p>
        <p className="description">
          {props.description}
        </p>
        <div className="apply">
          <p>
            <span style={{ color: "#BB362A" }}>Apply By-</span>{" "}
            <span>{props.date}</span>
          </p>
          <button>Apply</button>
        </div>
       {  props.btn_1 &&  <div>
          <button style={{height:'33px', width:'90px', borderRadius:'8px',background:'black',color:'white'}}>{props.btn_1}</button>
          <button style={{height:'33px', width:'90px', borderRadius:'8px',background:'black',color:'white'}}>{props.btn_2}</button>
          <button style={{height:'33px', width:'90px', borderRadius:'8px',background:'black',color:'white'}}>{props.btn_3}</button>
          <button style={{height:'33px', width:'90px', borderRadius:'8px',background:'black',color:'white'}}>{props.btn_4}</button>    
        </div>
       }
       {
        props.deleteButton && <button>{props.deleteButton}</button>
       }
      </div>
    </>
  );
}

export default Card;
