import React from 'react';

const Profile: React.FC = () => {
    const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        bio: 'Software developer with a passion for creating amazing applications.',
        avatar: 'https://via.placeholder.com/150',
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img
                    src={user.avatar}
                    alt="User Avatar"
                    style={{ borderRadius: '50%', width: '150px', height: '150px' }}
                />
            </div>
            <h1 style={{ textAlign: 'center' }}>{user.name}</h1>
            <p style={{ textAlign: 'center', color: 'gray' }}>{user.email}</p>
            <div style={{ marginTop: '20px' }}>
                <h2>About Me</h2>
                <p>{user.bio}</p>
            </div>
        </div>
    );
};

export default Profile;