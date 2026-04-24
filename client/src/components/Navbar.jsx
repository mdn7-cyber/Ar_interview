import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from "framer-motion"
import { BsRobot, BsCoin } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserAstronaut } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ServerUrl } from '../App';
import { setUserData } from '../redux/userSlice';
import AuthModel from './AuthModel';

function Navbar() {
  const { userData } = useSelector((state) => state.user)
  const [showCreditPopup, setShowCreditPopup] = useState(false)
  const [showUserPopup, setShowUserPopup] = useState(false)
  const [showAuth, setShowAuth] = useState(false);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      await axios.get(ServerUrl + "/api/auth/logout", { withCredentials: true })
      dispatch(setUserData(null))
      setShowCreditPopup(false)
      setShowUserPopup(false)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-center px-4 pt-6 relative z-50'>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className='w-full max-w-6xl 
        bg-white/10 backdrop-blur-xl 
        border border-white/20 
        rounded-2xl shadow-xl 
        px-6 py-4 flex justify-between items-center'
      >

        {/* LEFT LOGO */}
        <div
          onClick={() => navigate("/")}
          className='flex items-center gap-3 cursor-pointer'
        >
          <div className='bg-gradient-to-tr from-purple-500 to-cyan-400 text-white p-2 rounded-lg shadow-md'>
            <BsRobot size={18} />
          </div>

          <h1 className='font-semibold hidden md:block text-lg text-white tracking-wide'>
            Ar_Interview<span className='text-gray-400'>.Mock</span>
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className='flex items-center gap-4 relative'>

          {/* CREDIT BUTTON */}
          <div className='relative'>
            <button
              onClick={() => {
                if (!userData) return setShowAuth(true);
                setShowCreditPopup(!showCreditPopup);
                setShowUserPopup(false);
              }}
              className='flex items-center gap-2 
              bg-white/10 border border-white/20 
              px-4 py-2 rounded-full text-sm text-white 
              hover:bg-white/20 transition'
            >
              <BsCoin size={18} className="text-yellow-400" />
              {userData?.credits || 0}
            </button>

            {showCreditPopup && (
              <div className='absolute right-0 mt-3 w-64 
              bg-[#0f172a] border border-white/10 
              rounded-xl p-5 shadow-2xl backdrop-blur-xl'>

                <p className='text-sm text-gray-300 mb-4'>
                  Need more credits to continue interviews?
                </p>

                <button
                  onClick={() => navigate("/pricing")}
                  className='w-full py-2 rounded-lg text-sm text-white 
                  bg-gradient-to-r from-purple-500 to-cyan-400 
                  hover:opacity-90 transition'
                >
                  Buy Credits
                </button>
              </div>
            )}
          </div>

          {/* USER BUTTON */}
          <div className='relative'>
            <button
              onClick={() => {
                if (!userData) return setShowAuth(true);
                setShowUserPopup(!showUserPopup);
                setShowCreditPopup(false);
              }}
              className='w-9 h-9 
              bg-gradient-to-tr from-purple-500 to-cyan-400 
              text-white rounded-full flex items-center justify-center font-semibold shadow-md'
            >
              {userData
                ? userData?.name.slice(0, 1).toUpperCase()
                : <FaUserAstronaut size={16} />}
            </button>

            {showUserPopup && (
              <div className='absolute right-0 mt-3 w-52 
              bg-[#0f172a] border border-white/10 
              rounded-xl p-4 shadow-2xl backdrop-blur-xl'>

                <p className='text-sm text-cyan-400 font-medium mb-2'>
                  {userData?.name}
                </p>

                <button
                  onClick={() => navigate("/history")}
                  className='w-full text-left text-sm py-2 text-gray-300 hover:text-white transition'
                >
                  Interview History
                </button>

                <button
                  onClick={handleLogout}
                  className='w-full text-left text-sm py-2 flex items-center gap-2 text-red-400 hover:text-red-500 transition'
                >
                  <HiOutlineLogout size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>

        </div>

      </motion.div>

      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}
    </div>
  )
}

export default Navbar;