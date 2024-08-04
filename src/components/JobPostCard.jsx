 import React from 'react'
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 import '../css/components/jobpostcard.css'
 function JobPostCard({ icon, title, description }) {
    return (
       <>
         <div className="card">
          <div className="icon">{icon}</div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
       </>
      );
    };
 
 export default JobPostCard
 