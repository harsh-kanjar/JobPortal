import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import FindJob from "./pages/FindJob";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FindTalent from "./pages/FindTalent";
import KidsProfile from "./pages/KidsProfile";
import ShortList from "./pages/ShortList";
import AllRoutes from "./pages/AllRoutes";
import PersonalDetailForm from "./pages/PersonalDetailForm";
import OtherDeailsForm from "./pages/OtherDeailsForm";
import PostJob from "./pages/PostJob";
import ShortListedKids from "./pages/ShortListedKids";
import ArtistPage from "./pages/ArtistPage";
import InProgress from "./ArtistPageSubroute/InProgress";
import Applied from "./ArtistPageSubroute/Applied";
import Completed from "./ArtistPageSubroute/Completed";
import YourProfile from "./ArtistPageSubroute/YourProfile";
import Alert from "./components/Alert"
import PostJobCrausel from "./pages/PostJobCrausel";
import Community from "./pages/Community";
import RecruiterPage from "./pages/RecruiterPage";
import Hired from "./RecruiterPageSubroute/Hired";
import Draft from "./RecruiterPageSubroute/Draft";
import Archived from "./RecruiterPageSubroute/Archived";
import ProfileForm from "./RecruiterPageSubroute/ProfileForm";
import MakeProfile from "./pages/MakeProfile";
import JobDescription from "./pages/JobDescription";
function App() {
  return (
    <>
        <Router>
          <Navbar/>
          <Alert/>
          <div className="container-fluid">
            <Routes>
              {/* Navbar routes */}
              <Route exact path="/" element={<Home />} />
              <Route exact path="/findjob" element={<FindJob />} />
              <Route exact path="/findtalent" element={<FindTalent />} />
              <Route exact path="/postjob" element={<PostJobCrausel/>} />
              <Route exact path="/shortlist" element={<ShortList />} />
              <Route exact path="/community" element={<Community/>} />
              <Route exact path="/allroutes" element={<AllRoutes/>} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              {/* forms */}
              <Route exact path="/fillpersonaldetails" element={<PersonalDetailForm/>} />
              <Route exact path="/fillotherdetails" element={<OtherDeailsForm/>} />
              <Route exact path="/postjobform" element={<PostJob/>} />
              <Route exact path="/makeprofile" element={<MakeProfile/>} />
              {/* Recriter pages */}
              <Route exact path="/recruiter" element={<RecruiterPage/>} />
              <Route exact path="/hired" element={<Hired/>} />
              <Route exact path="/draft" element={<Draft/>} />
              <Route exact path="/archived" element={<Archived/>} />
              <Route exact path="/profileform" element={<ProfileForm/>} />

              <Route exact path="/kidsprofile" element={<KidsProfile />} />
              <Route exact path="/shortlistedkids" element={<ShortListedKids/>} />
              <Route exact path="/artistpage" element={<ArtistPage/>} />
              <Route exact path="/inprogress" element={<InProgress/>} />
              <Route exact path="/applied" element={<Applied/>} />
              <Route exact path="/completed" element={<Completed/>} />
              <Route exact path="/yourprofile" element={<YourProfile/>} />
              <Route exact path="/jobdescription" element={<JobDescription/>} />
            </Routes>
          </div>
          <Footer />
        </Router>
    </>
  );
}

export default App;
