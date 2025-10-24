import React, { useState } from "react";
import {
    createUserWithEmailAndPassword,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        photoURL: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const isValidPassword = (password) => {
        return /[A-Z]/.test(password) && /[a-z]/.test(password) && password.length >= 6;
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, photoURL, email, password } = formData;

        if (!isValidPassword(password)) {
            toast.error(
                "Password must contain uppercase, lowercase, and be at least 6 characters."
            );
            return;
        }

        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(result.user, {
                displayName: name,
                photoURL: photoURL,
            });

            toast.success("Signup successful! Welcome");
            navigate("/");
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleGoogleSignup = async () => {
        try {
            await signInWithPopup(auth, provider);
            toast.success("Signed up with Google");
            navigate("/");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <section className="bg-green-50 min-h-screen flex justify-center items-center px-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">
                    Create an Account
                </h2>

                <form onSubmit={handleSignup} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Photo URL</label>
                        <input
                            type="text"
                            name="photoURL"
                            value={formData.photoURL}
                            onChange={handleChange}
                            placeholder="photo"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                        />
                    </div>

                    <div className="relative">
                        <label className="block text-gray-700 mb-1">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none pr-10"
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-9 cursor-pointer text-gray-500 hover:text-green-600"
                        >
                            {showPassword ? <GoEyeClosed className="text-xl" /> : <RxEyeOpen className="text-xl" />}
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-xl font-medium hover:bg-green-700 transition-colors"
                    >
                        Signup
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-green-600 font-medium hover:underline">
                        Login
                    </Link>
                </p>

                <div className="mt-6 text-center">
                    <button
                        onClick={handleGoogleSignup}
                        className="w-full border border-gray-300 py-2 rounded-xl hover:bg-green-50 transition-colors"
                    >
                        Continue with Google
                    </button>
                </div>

                <ToastContainer position="top-center" />
            </div>
        </section>
    );
};

export default Signup;
