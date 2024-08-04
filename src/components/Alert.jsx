import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Alert() {
  const [count, setCount] = useState(30);

  useEffect(() => {
    if (count === 0) return;

    const intervalId = setInterval(() => {
      setCount(prevCount => {
        if (prevCount === 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [count]);

  // Conditionally render the component based on the count value
  if (count === 0) {
    return null;
  }
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        class="alert alert-danger  show"
        role="alert"
      >
        <span>| Refresh if disappear this badge |</span>
        <span style={{marginRight:'200px'}}>
          {" "}
          (The given{" "}
          <i>
            <ins>Figma file</ins>
          </i>{" "}
          is not specify positioning of all pages) Check pages which are not
          staged on UI - <Link to="/allroutes">All Routes</Link>
        </span>
        
        <span>{count}</span>
      </div>
    </>
  );
}

export default Alert;
