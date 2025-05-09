import React, { useState } from 'react';

interface Job {
    id: number;
    title: string;
    company: string;
    status: string;
}

const Tracker: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [newJob, setNewJob] = useState({ title: '', company: '', status: 'Applied' });

    const addJob = () => {
        if (newJob.title && newJob.company) {
            setJobs([
                ...jobs,
                { id: Date.now(), title: newJob.title, company: newJob.company, status: newJob.status },
            ]);
            setNewJob({ title: '', company: '', status: 'Applied' });
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
            <div>
                <input
                    type="text"
                    placeholder="Job Title"
                    value={newJob.title}
                    onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Company"
                    value={newJob.company}
                    onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
                />
                <button onClick={addJob}>Add Job</button>
            </div>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <strong>{job.title}</strong> at <em>{job.company}</em> - Status: {job.status}
                        <select
                            value={job.status}
                            onChange={(e) => updateJobStatus(job.id, e.target.value)}
                        >
                            <option value="Applied">Applied</option>
                            <option value="Interviewing">Interviewing</option>
                            <option value="Offered">Offered</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                        <button onClick={() => deleteJob(job.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tracker;