import React, { useState, useEffect } from "react";
// import { API, graphqlOperation, Storage } from "aws-amplify";
// import { listJobs } from "../../graphql/queries";
//import { createJob, updateJob, deleteJob } from "../../graphql/mutations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
interface Job {
  id: string;
  title: string;
  company: string;
  status: string;
}

const styles = {
  popup: {
    position: "fixed" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    zIndex: 1000,
  },
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  addButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    marginRight: "10px",
  },
  cancelButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
  },
};

const Tracker: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([
    { id: "1", title: "Software Engineer", company: "Tech Corp", status: "Applied" },
    { id: "2", title: "Product Manager", company: "Innovate Inc", status: "Interviewing" },
    { id: "3", title: "Data Scientist", company: "DataWorks", status: "Offered" },
  ]);
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    status: "Applied",
  });
  const [showJobPopup, setShowJobPopup] = useState(false);

  // Function to create a new job
  const createJob = (job: Omit<Job, "id">): Job => {
    const newJobEntry: Job = {
      id: (jobs.length + 1).toString(),
      ...job,
    };
    return newJobEntry;
  };

  // Function to update a job's status
  const updateJob = (id: string, updatedFields: Partial<Job>): Job[] => {
    return jobs.map((job) =>
      job.id === id ? { ...job, ...updatedFields } : job
    );
  };

  // Function to delete a job
  const deleteJob = (id: string): Job[] => {
    return jobs.filter((job) => job.id !== id);
  };

  const handleAddJob = () => {
    if (newJob.title && newJob.company) {
      const newJobEntry = createJob(newJob);
      setJobs([...jobs, newJobEntry]);
      setNewJob({ title: "", company: "", status: "Applied" });
      setShowJobPopup(false);
    }
  };

  const handleUpdateJobStatus = (id: string, status: string) => {
    const updatedJobs = updateJob(id, { status });
    setJobs(updatedJobs);
  };

  const handleDeleteJob = (id: string) => {
    const updatedJobs = deleteJob(id);
    setJobs(updatedJobs);
  };

  return (
    <div>
      <h1>Job Tracker</h1>
      <button onClick={() => setShowJobPopup(true)}>Add Job</button>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Title</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Company
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {job.title}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {job.company}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <select
                  value={job.status}
                  onChange={(e) => handleUpdateJobStatus(job.id, e.target.value)}
                >
                  <option value="Applied">Applied</option>
                  <option value="Interviewing">Interviewing</option>
                  <option value="Offered">Offered</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <button
                  onClick={() => handleDeleteJob(job.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} color="red" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showJobPopup && (
        <div style={styles.popup}>
          <h2>Add New Job</h2>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Job Title:
              <input
                type="text"
                value={newJob.title}
                onChange={(e) =>
                  setNewJob({ ...newJob, title: e.target.value })
                }
                style={styles.input}
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Company:
              <input
                type="text"
                value={newJob.company}
                onChange={(e) =>
                  setNewJob({ ...newJob, company: e.target.value })
                }
                style={styles.input}
              />
            </label>
          </div>
          <button
            onClick={handleAddJob}
            style={{ ...styles.button, ...styles.addButton }}
          >
            Add
          </button>
          <button
            onClick={() => setShowJobPopup(false)}
            style={{ ...styles.button, ...styles.cancelButton }}
          >
            Cancel
          </button>
        </div>
      )}

      {showJobPopup && (
        <div style={styles.overlay} onClick={() => setShowJobPopup(false)} />
      )}
    </div>
  );
}
export default Tracker;