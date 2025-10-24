import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const [updating, setUpdating] = useState(false);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setUpdating(true);

        try {
            await updateUserProfile(name, photoURL);
            toast.success("Profile updated successfully!");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setUpdating(false);
        }
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-green-700">
                Please log in to view your profile.
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-green-50 flex justify-center items-center px-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">
                    My Profile
                </h2>

                <div className="flex flex-col items-center mb-6">
                    <img
                        src={user.photoURL || "/default-avatar.png"}
                        alt="User"
                        className="w-24 h-24 rounded-full border-4 border-green-300 mb-3"
                    />
                    <p className="text-lg font-medium text-gray-800">
                        {user.displayName || "No Name Set"}
                    </p>
                    <p className="text-gray-600">{user.email}</p>
                </div>

                <form onSubmit={handleUpdateProfile} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-1">Display Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your new name"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Photo URL</label>
                        <input
                            type="text"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            placeholder="Photo"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={updating}
                        className={`w-full py-2 rounded-xl font-medium text-white transition-colors ${updating
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-green-600 hover:bg-green-700"
                            }`}
                    >
                        {updating ? "Updating..." : "Update Profile"}
                    </button>
                </form>

                <ToastContainer position="top-center" />
            </div>
        </section>
    );
};

export default MyProfile;
