import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, loading, handleLogout } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;

    console.log({
      name,
      photoURL,
    });

    // updateProfile(auth.currentUser, {
    //   displayName: name,
    //   photoURL: photoURL,
    // })
    //   .then((data) => {
    //     console.log("Profile updated successfully", data);
    //   })
    //   .catch((error) => {
    //     console.log("Error updating profile", error);
    //   });
  };

  return (
    <div>
      My Profile
      <h1>Email : {loading ? <span>Loading....</span> : user?.email}</h1>
      <form onSubmit={handleSubmit} className="space-y-3 border my-10 p-5">
        <h1>Update your information</h1>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={user?.displayName || ""}
            className="py-3 px-2 bg-green-50"
          />
        </div>
        <div>
          <label htmlFor="photoURL">Photo URL:</label>
          <input
            type="text"
            id="photoURL"
            name="photoURL"
            defaultValue={user?.photoURL || ""}
            className="py-3 px-2 bg-green-50"
          />
        </div>
        <button>Update Profile</button>
      </form>
      <hr />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
