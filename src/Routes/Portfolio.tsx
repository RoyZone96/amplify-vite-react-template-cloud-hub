import React from 'react';

interface Project {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
}

const projects: Project[] = [
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
    return (
        <div style={{ padding: '20px' }}>
            <h1>Project Gallery</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '10px',
                            width: '250px',
                            textAlign: 'center',
                        }}
                    >
                        <img
                            src={project.imageUrl}
                            alt={project.name}
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                        <h2 style={{ fontSize: '1.2em', margin: '10px 0' }}>
                            {project.name}
                        </h2>
                        <p style={{ fontSize: '0.9em', color: '#555' }}>
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;