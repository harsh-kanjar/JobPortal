import '../css/ArtistPageSubroute/aside.css'
import AnalyticsDashboard from '../components/AnalyticsDashboard';
import JobCard from '../components/JobCard';
import { Link } from "react-router-dom";
function Completed() {
    const jobsCompleted = [
        {
          id:1,
          headline:'TV Commercial',
          location:'Delhi',
          description:'Seeking a charismatic child actor for a TV commercial. Must deliver lines naturally and convey emotions convincingly on camera.',
          appliedDate:'1st Jan 20xx',
          completedDate:' 1st Mar 20xx',
          button:'See Job Details'
        }
      ]
      return (
        <>
           <div className="in-progress">
           <div id="artist">
           <aside>
             <Link className='link' to="/applied"><p className="links">Applied</p></Link>
             <Link className='link' to="/inprogress">
               <p className="links ">In Progress</p>
             </Link>
             <Link className='link' to="/completed"><p className="links is-active">Completed</p></Link>
             <Link className='link' to="/yourprofile"><p className="links">Your Profile</p></Link>
           </aside>
           <main className="section-artist">
             <AnalyticsDashboard/>
    
             {/* completed */}
             <p className='headline'>Jobs Completed</p>
             {
               jobsCompleted.map(({id,headline,location,description,appliedDate,completedDate,button}) =>(
                  <div key={id}>
                   <JobCard  headline={headline} location={location} description={description} appliedDate={appliedDate} completedDate={completedDate} button={button}/>
                  </div>
               ))
             }
           </main>
         </div>
           </div>
        </>
     )
}

export default Completed
