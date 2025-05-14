import React, { useState } from 'react';
// import { API, graphqlOperation, Storage } from 'aws-amplify';
// import { getUser } from '../../graphql/queries'; // For fetching user data
// import { updateUser } from '../../graphql/mutations'; // For updating user data
import Portfolio from '../../Components/Portfolio/Portfolio';
import './Profile.css';

const Profile: React.FC = () => {
    const [user, setUser] = useState({
        id: '1', // Dummy user ID
        name: 'John Doe',
        email: 'johndoe@example.com',
        bio: 'Software engineer with a passion for building scalable applications.',
        avatar: 'https://via.placeholder.com/150',
    });
    const [file, setFile] = useState<File | null>(null);

    // Dummy function to simulate file upload
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (file) {
            // Simulate file upload and updating user avatar
            const dummyAvatarUrl = URL.createObjectURL(file);
            const updatedUser = { ...user, avatar: dummyAvatarUrl };
            setUser(updatedUser);
            alert('Profile picture updated successfully!');
        } else {
            alert('Please select a file to upload.');
        }
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

            {/* File Upload Section */}
            <div className="file-upload-section">
                <h2>Upload Profile Picture</h2>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload</button>
            </div>
        </div>
    );
};

export default Profile;