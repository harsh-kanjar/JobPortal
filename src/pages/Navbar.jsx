import '../css/navbarAndFooter.css'
import {
  
  Link
} from "react-router-dom";
function Navbar() {
    return (
     <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar">
        <a className="navbar-brand" href="#"><img className='logo' src="logo.png" alt="" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/findjob">Find Job</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/findtalent">Find Talent</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/postjob">Post a job</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shortlist">Shortlist</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/community">Community</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/allroutes">Pages</Link>
            </li>
            <li className="nav-item">
              <Link style={{marginTop:'4px'}} className="nav-link login-btn"><span><Link style={{color:'white',textDecoration:'none'}} to="/login">Login</Link></span><span><Link style={{color:'white',textDecoration:'none'}} to="/signup">/Signup</Link></span></Link>
            </li>
          </ul>
        </div>
      </nav>
     </>
    );
  }

export default Navbar
