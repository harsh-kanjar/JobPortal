import '../css/components/jobcard.css'
function JobCard(props) {
  return (
    <>
        <div className="job-card">
            <p className="headline">{props.headline}</p>
            <p className='location'>{props.location}</p>
            <p className='description'>{props.description}</p>
            <p><span className='applied-date'><span>Applied on -</span> {props.appliedDate}</span> {props.completedDate &&<span className='completed-date'><span>Completed on </span> {props.completedDate}</span>} <span>{props.button && <button className='details'>{props.button}</button>}</span></p>
        </div>
    </>
  )
}

export default JobCard
