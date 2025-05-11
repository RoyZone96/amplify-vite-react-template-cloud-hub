import React, { useState } from 'react';

interface Job {
    id: number;
    title: string;
    company: string;
    status: string;
}

const styles = {
    popup: {
        position: 'fixed' as const,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        zIndex: 1000,
    },
    overlay: {
        position: 'fixed' as const,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    addButton: {
        backgroundColor: '#28a745',
        color: '#fff',
        marginRight: '10px',
    },
    cancelButton: {
        backgroundColor: '#dc3545',
        color: '#fff',
    },
    input: {
        width: '100%',
        padding: '8px',
        marginTop: '5px',
    },
};

const Tracker: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([
        { id: 1, title: 'Frontend Developer', company: 'TechCorp', status: 'Applied' },
        { id: 2, title: 'Backend Engineer', company: 'CodeWorks', status: 'Interviewing' },
        { id: 3, title: 'Full Stack Developer', company: 'DevSolutions', status: 'Offered' },
        { id: 4, title: 'UI/UX Designer', company: 'Designify', status: 'Rejected' },
    ]);
    const [newJob, setNewJob] = useState({ title: '', company: '', status: 'Applied' });
    const [showJobPopup, setShowJobPopup] = useState(false);

    const addJob = () => {
        if (newJob.title && newJob.company) {
            setJobs([
                ...jobs,
                { id: Date.now(), title: newJob.title, company: newJob.company, status: newJob.status },
            ]);
            setNewJob({ title: '', company: '', status: 'Applied' });
            setShowJobPopup(false);
        }
    };

    const updateJobStatus = (id: number, status: string) => {
        setJobs(jobs.map(job => (job.id === id ? { ...job, status } : job)));
    };

    const deleteJob = (id: number) => {
        setJobs(jobs.filter(job => job.id !== id));
    };

    return (
        <div>
            <h1>Job Tracker</h1>
            <button onClick={() => setShowJobPopup(true)}>Add Job</button>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Title</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Company</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job) => (
                        <tr key={job.id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.title}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{job.company}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
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
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                <button onClick={() => deleteJob(job.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showJobPopup && (
                <div style={styles.popup}>
                    <h2>Add New Job</h2>
                    <div style={{ marginBottom: '10px' }}>
                        <label>
                            Job Title:
                            <input
                                type="text"
                                value={newJob.title}
                                onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                                style={styles.input}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>
                            Company:
                            <input
                                type="text"
                                value={newJob.company}
                                onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
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
                <div
                    style={styles.overlay}
                    onClick={() => setShowJobPopup(false)}
                />
            )}
        </div>
    );
};

export default Tracker;