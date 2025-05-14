import React, { useState, useEffect } from 'react';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { getUser } from '../../graphql/queries'; // For fetching user data
import { updateUser } from '../../graphql/mutations'; // For updating user data
import Portfolio from '../../Components/Portfolio/Portfolio';
import './Profile.css';

 
const Profile: React.FC = () => {
    const [user, setUser] = useState({
        id: 'user-id', // Replace with the actual user ID
        name: '',
        email: '',
        bio: '',
        avatar: 'https://via.placeholder.com/150',
    });
    const [file, setFile] = useState<File | null>(null);

    // Fetch user data from DynamoDB
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const result: any = await API.graphql(graphqlOperation(getUser, { id: user.id }));
                if (result.data.getUser) {
                    setUser(result.data.getUser);
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, [user.id]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (file) {
            try {
                // Upload file to S3
                const result = await Storage.put(file.name, file, {
                    contentType: file.type,
                });
                const avatarUrl = await Storage.get(result.key);

                // Update user data in DynamoDB
                const updatedUser = { ...user, avatar: avatarUrl };
                await API.graphql(graphqlOperation(updateUser, { input: updatedUser }));

                setUser(updatedUser);
                alert('Profile picture updated successfully!');
            } catch (error) {
                console.error('Error uploading file:', error);
                alert('Failed to upload file.');
            }
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