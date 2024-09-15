import React from 'react';
import '../index.css';

const ProfileHeader = ({ user }) => {
    return (
        <div className="profile-header">
            <img src={user.avatar} alt="User Avatar" className="avatar" />
            <div className="user-info">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        </div>
    );
};

export default ProfileHeader;
