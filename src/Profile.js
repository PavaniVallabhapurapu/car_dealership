import React from 'react';

const Profile = () => {
  const userEmail = localStorage.getItem('userEmail');

  return (
    <div>
      <h2>Profile</h2>
      {userEmail ? (
        <div>
          <p>Email: {userEmail}</p>
          <p><a href="/logout">Logout</a></p>
        </div>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  );
};

export default Profile;
