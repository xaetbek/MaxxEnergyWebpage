import React, { useState } from "react";
import "./Careers.css";

function Careers() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    department: "",
    location: "",
    type: "",
  });
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      mode: "On-site",
      description: "Build and maintain scalable web applications.",
      requirements: "Experience with React, Node.js, and databases.",
      benefits: "Health insurance, retirement plan, flexible work schedule.",
    },
    {
      id: 2,
      title: "Marketing Intern",
      department: "Marketing",
      location: "Remote",
      type: "Part-time",
      mode: "Remote",
      description: "Assist in social media campaigns and content creation.",
      requirements: "Strong communication skills, creativity, and teamwork.",
      benefits: "Education reimbursement, flexible schedule.",
    },
    {
      id: 3,
      title: "HR Specialist",
      department: "Human Resources",
      location: "New York, NY",
      type: "Full-time",
      mode: "On-site",
      description: "Manage recruitment processes and employee relations.",
      requirements: "Experience in HR roles and excellent interpersonal skills.",
      benefits: "Health insurance, 401k, DEI programs.",
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (filters.department ? job.department === filters.department : true) &&
      (filters.location ? job.location.includes(filters.location) : true) &&
      (filters.type ? job.type === filters.type : true)
    );
  });

  return (
    <main className="careers-container">
      <h1 className="careers-title">Careers</h1>
      <p className="careers-subtitle">Join our team and grow with us!</p>

      <div className="filters">
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={filters.department}
          onChange={(e) => setFilters({ ...filters, department: e.target.value })}
        >
          <option value="">All Departments</option>
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
          <option value="Human Resources">Human Resources</option>
        </select>
        <select
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        >
          <option value="">All Locations</option>
          <option value="San Francisco">San Francisco</option>
          <option value="New York">New York</option>
          <option value="Remote">Remote</option>
        </select>
        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option value="">All Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>
      </div>

      <div className="jobs-list">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p><strong>Department:</strong> {job.department}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type} ({job.mode})</p>
            {/* Show only first 60 chars */}
            <p>
              <strong>Description:</strong>{" "}
              {job.description.length > 60
                ? job.description.substring(0, 60) + "..."
                : job.description}
            </p>
            <button className="read-more-btn" onClick={() => setSelectedJob(job)}>
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal for full job details */}
      {selectedJob && (
        <div className="modal-overlay" onClick={() => setSelectedJob(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedJob.title}</h2>
            <p><strong>Department:</strong> {selectedJob.department}</p>
            <p><strong>Location:</strong> {selectedJob.location}</p>
            <p><strong>Type:</strong> {selectedJob.type} ({selectedJob.mode})</p>
            <p><strong>Description:</strong> {selectedJob.description}</p>
            <p><strong>Requirements:</strong> {selectedJob.requirements}</p>
            <p><strong>Benefits:</strong> {selectedJob.benefits}</p>

            <h3>Apply Now</h3>
            <form className="apply-form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <textarea placeholder="Cover Letter" required />
              <button type="submit" className="apply-btn">Submit Application</button>
            </form>

            <button className="close-btn" onClick={() => setSelectedJob(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Careers;
