import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { motion } from "framer-motion";
import {
  BsRobot,
  BsMic,
  BsClock,
  BsBarChart,
  BsFileEarmarkText
} from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import AuthModel from '../components/AuthModel';

import hrImg from "../assets/HR.png";
import techImg from "../assets/tech.png";
import confidenceImg from "../assets/confi.png";
import creditImg from "../assets/credit.png";
import evalImg from "../assets/ai-ans.png";
import resumeImg from "../assets/resume.png";
import pdfImg from "../assets/pdf.png";
import analyticsImg from "../assets/history.png";
import Footer from '../components/Footer';

function Home() {
  const { userData } = useSelector((state) => state.user)
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate()

  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] text-white relative overflow-hidden'>

      <Navbar />

      {/* Glow Effects */}
      <div className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-[120px] top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] bottom-10 right-10"></div>

      <div className='flex-1 px-6 py-20 relative z-10'>
        <div className='max-w-6xl mx-auto'>

          {/* Badge */}
          <div className='flex justify-center mb-6'>
            <div className='bg-white/10 border border-white/20 text-gray-300 text-sm px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur'>
              <HiSparkles size={16} className="text-cyan-400" />
              AI Powered Smart Interview Platform
            </div>
          </div>

          {/* Hero */}
          <div className='text-center mb-28'>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto'
            >
              Practice Interviews with
              <span className='block mt-3 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text'>
                AI Intelligence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className='text-gray-300 mt-6 max-w-2xl mx-auto text-lg'
            >
              Role-based mock interviews with adaptive AI,
              real-time evaluation, and smart feedback.
            </motion.p>

            {/* Buttons */}
            <div className='flex flex-wrap justify-center gap-4 mt-10'>

              <motion.button
                onClick={() => {
                  if (!userData) return setShowAuth(true);
                  navigate("/interview")
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-10 py-3 rounded-full text-white 
                bg-gradient-to-r from-purple-500 to-cyan-400 
                shadow-lg hover:opacity-90 transition'
              >
                Start Interview
              </motion.button>

              <motion.button
                onClick={() => {
                  if (!userData) return setShowAuth(true);
                  navigate("/history")
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-10 py-3 rounded-full 
                border border-white/20 bg-white/10 backdrop-blur-xl
                hover:bg-white/20 transition'
              >
                View History
              </motion.button>

            </div>
          </div>

          {/* Steps */}
          <div className='flex flex-col md:flex-row justify-center items-center gap-10 mb-28'>
            {[
              {
                icon: <BsRobot size={24} />,
                step: "STEP 1",
                title: "Role & Experience Selection",
                desc: "AI adjusts difficulty based on selected job role."
              },
              {
                icon: <BsMic size={24} />,
                step: "STEP 2",
                title: "Smart Voice Interview",
                desc: "Dynamic follow-up questions based on your answers."
              },
              {
                icon: <BsClock size={24} />,
                step: "STEP 3",
                title: "Timer Based Simulation",
                desc: "Real interview pressure with time tracking."
              }
            ].map((item, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 + index * 0.2 }}
                whileHover={{ scale: 1.06 }}
                className='bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 w-80 shadow-xl transition-all'
              >
                <div className='text-center'>
                  <div className='text-cyan-400 mb-4 flex justify-center'>
                    {item.icon}
                  </div>
                  <div className='text-xs text-cyan-400 font-semibold mb-2 tracking-wider'>{item.step}</div>
                  <h3 className='font-semibold mb-3 text-lg'>{item.title}</h3>
                  <p className='text-sm text-gray-300'>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <div className='mb-32'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className='text-4xl font-semibold text-center mb-16'
            >
              Advanced AI{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                Capabilities
              </span>
            </motion.h2>

            <div className='grid md:grid-cols-2 gap-10'>
              {[
                { image: evalImg, title: "AI Answer Evaluation", desc: "Scores communication, technical accuracy and confidence." },
                { image: resumeImg, title: "Resume Based Interview", desc: "Project-specific questions based on uploaded resume." },
                { image: pdfImg, title: "Downloadable PDF Report", desc: "Detailed strengths and improvement insights." },
                { image: analyticsImg, title: "History & Analytics", desc: "Track progress with performance graphs." }
              ].map((item, index) => (
                <motion.div key={index}
                  whileHover={{ scale: 1.02 }}
                  className='bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-lg transition'
                >
                  <div className='flex flex-col md:flex-row items-center gap-8'>
                    <img src={item.image} className='w-full md:w-1/2 max-h-64 object-contain' />
                    <div>
                      <h3 className='font-semibold mb-3 text-xl'>{item.title}</h3>
                      <p className='text-gray-300 text-sm'>{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Modes */}
          <div className='mb-32'>
            <motion.h2 className='text-4xl font-semibold text-center mb-16'>
              Interview{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
                Modes
              </span>
            </motion.h2>

            <div className='grid md:grid-cols-2 gap-10'>
              {[
                { img: hrImg, title: "HR Interview Mode", desc: "Behavioral evaluation." },
                { img: techImg, title: "Technical Mode", desc: "Deep technical questions." },
                { img: confidenceImg, title: "Confidence Detection", desc: "Voice analysis insights." },
                { img: creditImg, title: "Credits System", desc: "Unlock premium sessions." }
              ].map((mode, index) => (
                <motion.div key={index}
                  whileHover={{ y: -6 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-lg transition"
                >
                  <div className='flex items-center justify-between gap-6'>
                    <div>
                      <h3 className="font-semibold text-xl mb-3">{mode.title}</h3>
                      <p className="text-gray-300 text-sm">{mode.desc}</p>
                    </div>
                    <img src={mode.img} className="w-24 h-24 object-contain" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}

      <Footer />
    </div>
  )
}

export default Home;