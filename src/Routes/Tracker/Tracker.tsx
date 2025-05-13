import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listJobs } from "../../graphql/queries";
import { createJob, updateJob, deleteJob } from "../../graphql/mutations";
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
  const [jobs, setJobs] = useState<Job[]>([]);
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    status: "Applied",
  });
  const [showJobPopup, setShowJobPopup] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const result: any = await API.graphql(graphqlOperation(listJobs));
        setJobs(result.data.listJobs.items);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const addJob = async () => {
    if (newJob.title && newJob.company) {
      try {
        const result: any = await API.graphql(
          graphqlOperation(createJob, { input: newJob })
        );
        setJobs([...jobs, result.data.createJob]);
        setNewJob({ title: "", company: "", status: "Applied" });
        setShowJobPopup(false);
      } catch (error) {
        console.error("Error adding job:", error);
      }
    }
  };

  const updateJobStatus = async (id: string, status: string) => {
    try {
      const updatedJob = { id, status };
      await API.graphql(graphqlOperation(updateJob, { input: updatedJob }));
      setJobs(jobs.map((job) => (job.id === id ? { ...job, status } : job)));
    } catch (error) {
      console.error("Error updating job status:", error);
    }
  };

  const deleteJob = async (id: string) => {
    try {
      await API.graphql(graphqlOperation(deleteJob, { input: { id } }));
      setJobs(jobs.filter((job) => job.id !== id));
    } catch (error) {
      console.error("Error deleting job:", error);
    }
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
                  onChange={(e) => updateJobStatus(job.id, e.target.value)}
                >
                  <option value="Applied">Applied</option>
                  <option value="Interviewing">Interviewing</option>
                  <option value="Offered">Offered</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <button
                  onClick={() => deleteJob(job.id)}
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
            onClick={addJob}
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
};

export default Tracker;