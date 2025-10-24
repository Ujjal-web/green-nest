import React, { useState } from "react";
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const provider = new GoogleAuthProvider();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Logged in successfully!");
            navigate(from, { replace: true });
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
            toast.success("Welcome! Logged in with Google");
            navigate(from, { replace: true });
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleForgotPassword = async () => {
        if (!email) {
            toast.warn("Please enter your email first.");
            return;
        }
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success("Password reset email sent! Check your inbox.");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <section className="bg-green-50 min-h-screen flex justify-center items-center px-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-semibold text-green-800 mb-6 text-center">
                    Login to Your Account
                </h2>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                        />
                    </div>

                    <div className="relative">
                        <label className="block text-gray-700 mb-1">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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

                    <div className="text-right text-sm">
                        <button
                            type="button"
                            onClick={handleForgotPassword}
                            className="text-green-600 hover:underline"
                        >
                            Forgot Password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-xl font-medium hover:bg-green-700 transition-colors"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-4">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-green-600 font-medium hover:underline">
                        Sign Up
                    </Link>
                </p>

                <div className="mt-6 text-center">
                    <button
                        onClick={handleGoogleLogin}
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

export default Login;
