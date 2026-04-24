import React from 'react'
import { BsRobot } from "react-icons/bs";
import { IoSparkles } from "react-icons/io5";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';
import axios from 'axios';
import { ServerUrl } from '../App';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';

function Auth({ isModel = false }) {
  const dispatch = useDispatch();

  const handleGoogleAuth = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      let User = response.user;
      let name = User.displayName;
      let email = User.email;

      const result = await axios.post(
        ServerUrl + "/api/auth/google",
        { name, email },
        { withCredentials: true }
      );

      dispatch(setUserData(result.data));
    } catch (error) {
      console.log(error);
      dispatch(setUserData(null));
    }
  };

  return (
    <div
      className={`
      w-full min-h-screen flex items-center justify-center px-4
      bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]
    `}
    >
      {/* Glow Effect */}
      <div className="absolute w-[300px] h-[300px] bg-purple-500/30 blur-[120px] top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-cyan-400/30 blur-[120px] bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`
        relative w-full max-w-md p-8 rounded-3xl
        bg-white/10 backdrop-blur-2xl
        border border-white/20 shadow-2xl
      `}
      >
        {/* Logo */}
        <div className='flex items-center justify-center gap-3 mb-6'>
          <div className='bg-gradient-to-tr from-purple-500 to-cyan-400 text-white p-3 rounded-xl shadow-lg'>
            <BsRobot size={20} />
          </div>
          <h2 className='font-semibold text-xl text-white tracking-tight'>
            InterviewIQ<span className='text-gray-400'>.AI</span>
          </h2>
        </div>

        {/* Heading */}
        <h1 className='text-2xl font-semibold text-center text-white mb-4 leading-snug'>
          Start your{" "}
          <span className='bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text'>
            AI Interview Journey
          </span>
        </h1>

        {/* Description */}
        <p className='text-gray-300 text-center text-sm leading-relaxed mb-8'>
          Practice with AI, track performance, and boost your confidence
          with smart interview insights.
        </p>

        {/* Button */}
        <motion.button
          onClick={handleGoogleAuth}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className='w-full flex items-center justify-center gap-3 py-3 
          bg-gradient-to-r from-purple-500 to-cyan-400 
          text-white rounded-full shadow-lg 
          hover:opacity-90 transition-all duration-300'
        >
          <FcGoogle size={22} />
          <span className='font-medium'>Continue with Google</span>
        </motion.button>

        {/* Footer */}
        <p className='text-center text-xs text-gray-400 mt-6'>
          Secure login powered by Google
        </p>
      </motion.div>
    </div>
  );
}

export default Auth;