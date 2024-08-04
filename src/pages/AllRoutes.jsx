import React from "react";
import { Link } from "react-router-dom";

function AllRoutes() {
  const listOfRoutes = [
    {
      id: 1,
      routeName: "Artist Analytics Page - IMPORTANT",
      path: "/artistpage",
      pathName: "Artist Panel",
    },
    {
      id: 2,
      routeName: "Recruiter Analytics Page - IMPORTANT",
      path: "/recruiter",
      pathName: "Recruiter Panel",
    },
    {
      id: 3,
      routeName: "Shortlisted Kids",
      path: "/shortlistedkids",
      pathName: "Kids who are shortlisted",
    },
    {
      id: 4,
      routeName: "Personal Details",
      path: "/fillpersonaldetails",
      pathName: "personal details form",
    },
    {
      id: 5,
      routeName: "Other Details",
      path: "/fillotherdetails",
      pathName: "Other details form",
    },
    {
      id: 6,
      routeName: "Make Your Profile",
      path: "/makeprofile",
      pathName: "Make profile",
    },
    {
      id: 7,
      routeName: "Job Description page",
      path: "/jobdescription",
      pathName: "Job Description",
    },
  ];
  return (
    <>
      <ins><h3 className="container my-4 mx-4">This page/s are not staged on UI</h3></ins>
      {listOfRoutes.map(({ id, routeName, path, pathName }) => (
        <div class="my-4 mx-4 card" key={id}>
          <div class="card-header">Route - {id}</div>
          <div class="card-body">
            <h5 class="card-title">{routeName}</h5>
            <p class="card-text">
              {pathName} - <Link to={path}>{path}</Link>
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default AllRoutes;
