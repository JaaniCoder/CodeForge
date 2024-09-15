import React, { useState } from 'react';
import '../index.css';
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector((state) => state.user.user)
    const [upgradeToPro, setUpgradeToPro] = useState("")
    return (
        <div>
        <header>
        <div className="profile-header">
            <img src={user.photoURL} alt="User Avatar" className="avatar" />
            <div className="user-info">
                <h2>{user.displayName}</h2>
                <p>{user.email}</p>
            </div>
        </div>
        </header>
        
        {/* Details */}
        <div className="profile-details">
            <h3>Profile Details</h3>
            <p><strong>Username:</strong> {user.displayName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Plan:</strong> {user.plan}</p>
        </div>

        {/* Settings */}
        <div className="settings">
            <h3>Account Settings</h3>
            <button>Change Password</button>
            <button>Update Email</button>
            <button>Delete Account</button>
        </div>

        {/* Subscription */}
        <div className="subscription">
            <h3>Your Subscription</h3>
            <p>Current Plan: <strong>{user.plan}</strong></p>
            {user.plan !== 'Pro' && (
                <button onClick={upgradeToPro} className="upgrade-button">
                    Upgrade to Pro
                </button>
            )}
        </div>

        {/* ProMode */}
        <div className="pro-mode">
            <h3>Unlock Pro Mode</h3>
            <p>Get access to exclusive features and premium support with Pro Mode.</p>
            <button className="pro-button">Buy Pro Mode</button>
        </div>
        </div> );
    
};

export default Profile;
