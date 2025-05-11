import React, { useState } from 'react';
import './Portfolio.css'; // Import the CSS file

interface Project {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
}

const initialProjects: Project[] = [
    {
        id: 1,
        name: 'Project Alpha',
        description: 'A cutting-edge project focused on AI development.',
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        name: 'Project Beta',
        description: 'A web application for managing tasks efficiently.',
        imageUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Project Gamma',
        description: 'A mobile app for tracking fitness goals.',
        imageUrl: 'https://via.placeholder.com/150',
    },
];

const Portfolio: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>(initialProjects);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newProject, setNewProject] = useState({
        name: '',
        description: '',
        imageUrl: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };

    const handleAddProject = () => {
        const newId = projects.length + 1;
        setProjects([
            ...projects,
            { id: newId, ...newProject },
        ]);
        setNewProject({ name: '', description: '', imageUrl: '' });
        setIsModalOpen(false);
    };

    return (
        <div className="portfolio-container">
            <h1>Project Gallery</h1>
            <button
                onClick={() => setIsModalOpen(true)}
                className="add-project-button"
            >
                Add Project
            </button>
            <div className="project-list">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img
                            src={project.imageUrl}
                            alt={project.name}
                            className="project-image"
                        />
                        <h2 className="project-title">{project.name}</h2>
                        <p className="project-description">{project.description}</p>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="modal">
                    <h2>Add New Project</h2>
                    <div className="form-group">
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={newProject.name}
                                onChange={handleInputChange}
                                className="form-input"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Description:
                            <textarea
                                name="description"
                                value={newProject.description}
                                onChange={handleInputChange}
                                className="form-input"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Image URL:
                            <input
                                type="text"
                                name="imageUrl"
                                value={newProject.imageUrl}
                                onChange={handleInputChange}
                                className="form-input"
                            />
                        </label>
                    </div>
                    <button
                        onClick={handleAddProject}
                        className="add-button"
                    >
                        Add
                    </button>
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="cancel-button"
                    >
                        Cancel
                    </button>
                </div>
            )}

            {isModalOpen && (
                <div
                    onClick={() => setIsModalOpen(false)}
                    className="modal-overlay"
                />
            )}
        </div>
    );
};

export default Portfolio;