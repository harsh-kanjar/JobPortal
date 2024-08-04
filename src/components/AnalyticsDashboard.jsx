import { useState,useEffect } from "react";
import React from "react";
import '../css/components/analyticsdashboard.css'
function AnalyticsDashboard() {
        const [viewPeople, setViewPeople] = useState(0);
        // useEffect(() => {
        //     const intervalId = setInterval(() => {
        //       setViewPeople(prevCount => prevCount + 1);
        //     }, 1000);
      
        //     // Cleanup the interval on component unmount
        //     return () => clearInterval(intervalId);
        //   }, []);
  return (
    <>
      <div className="main-page">
        <div>
          <p id="headline">Analytics</p>
          <div id="boxes">
            <div className="box">
              <p>0{viewPeople}</p>
              <p>People Viewed your Profile</p>
            </div>
            <div className="box">
              <p>00</p>
              <p>People Shortlisted your profile</p>
            </div>
            <div className="box">
              <p>00</p>
              <p>People Shared your profile</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnalyticsDashboard;
