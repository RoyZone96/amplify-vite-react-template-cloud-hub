import React from 'react';
import Portfolio from '../../Components/Portfolio/Portfolio';
import './Profile.css'; // Import the CSS file

const Profile: React.FC = () => {
    const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        bio: 'Software developer with a passion for creating amazing applications.',
        avatar: 'https://via.placeholder.com/150',
    };

    const handleEditProfile = () => {
        alert('Edit Profile button clicked!');
        // Add logic to navigate to an edit profile page or open a modal
    };

    return (
        <div className="profile-container">
            {/* ID Card Section */}
            <div className="id-card">
                <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="id-card-avatar"
                />
                <div className="id-card-info">
                    <h1 className="id-card-name">{user.name}</h1>
                    <p className="id-card-email">{user.email}</p>
                    <button
                        onClick={handleEditProfile}
                        className="id-card-edit-button"
                    >
                        Edit Profile
                    </button>
                </div>
            </div>

            {/* About Me Section */}
            <div className="about-me-section">
                <h2>About Me</h2>
                <p>{user.bio}</p>
            </div>

            {/* My Projects Section */}
            <div className="my-projects-section">
                <h2>My Projects</h2>
                <Portfolio />
            </div>
        </div>
    );
};

export default Profile;