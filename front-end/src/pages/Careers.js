import React from "react";

function Careers() {
  const openJobPage = () => {
    window.open("/pages/job-senior-java.html", "_blank"); // opens in new tab
  };

  return (
    <div className="careers-container" style={{ textAlign: "center" }}>
      <h1>Careers</h1>
      <div className="job-card" style={{ margin: "0 auto", width: "400px", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
        <h2>Senior Java Developer</h2>
        <p>Location: Richmond, VA; Durham, NC; Norfolk, VA; Remote</p>
        <button onClick={openJobPage} style={{ marginTop: "10px", padding: "10px 20px" }}>
          Read More
        </button>
      </div>
    </div>
  );
}

export default Careers;
