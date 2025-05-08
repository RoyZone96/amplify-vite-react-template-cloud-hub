import React from 'react';

const Landing: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>Welcome to Cloud Hub</h1>
            <p>Cloud-native, community-driven platform designed to support AWS re/Start graduates and cloud learners</p>
            <button 
                style={{
                    padding: '0.5rem 1rem',
                    fontSize: '1rem',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={() => alert('Get Started!')}
            >
                Get Started
            </button>
        </div>
    );
};

export default Landing;