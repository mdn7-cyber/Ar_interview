import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { ServerUrl } from '../App'
import { FaArrowLeft } from 'react-icons/fa'
import { motion } from "framer-motion"

function InterviewHistory() {
  const [interviews, setInterviews] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getMyInterviews = async () => {
      try {
        const result = await axios.get(
          ServerUrl + "/api/interview/get-interview",
          { withCredentials: true }
        )
        setInterviews(result.data)
      } catch (error) {
        console.log(error)
      }
    }

    getMyInterviews()
  }, [])

  return (
    <div className='min-h-screen relative overflow-hidden 
    bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] 
    text-white py-10'>

      {/* Glow Effects */}
      <div className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-[120px] top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] bottom-10 right-10"></div>

      <div className='w-[90vw] lg:w-[70vw] max-w-[1000px] mx-auto relative z-10'>

        {/* Header */}
        <div className='mb-10 flex items-start gap-4 flex-wrap'>
          
          <button
            onClick={() => navigate("/")}
            className='p-3 rounded-full 
            bg-white/10 border border-white/20 
            backdrop-blur-xl hover:bg-white/20 transition'
          >
            <FaArrowLeft className='text-white' />
          </button>

          <div>
            <h1 className='text-3xl font-bold'>
              Interview History
            </h1>
            <p className='text-gray-300 mt-2'>
              Track your past interviews and performance reports
            </p>
          </div>
        </div>

        {/* Empty State */}
        {interviews.length === 0 ? (
          <div className='bg-white/10 backdrop-blur-xl 
          border border-white/20 p-10 rounded-2xl text-center shadow-lg'>
            <p className='text-gray-300'>
              No interviews found. Start your first interview.
            </p>
          </div>
        ) : (

          /* List */
          <div className='grid gap-6'>
            {interviews.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => navigate(`/report/${item._id}`)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className='cursor-pointer 
                bg-white/10 backdrop-blur-xl 
                border border-white/20 
                p-6 rounded-2xl shadow-lg 
                hover:shadow-2xl transition-all'
              >
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>

                  {/* LEFT */}
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.role}
                    </h3>

                    <p className="text-gray-300 text-sm mt-1">
                      {item.experience} • {item.mode}
                    </p>

                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  {/* RIGHT */}
                  <div className='flex items-center gap-6'>

                    {/* SCORE */}
                    <div className="text-right">
                      <p className="text-xl font-bold 
                      bg-gradient-to-r from-purple-400 to-cyan-400 
                      text-transparent bg-clip-text">
                        {item.finalScore || 0}/10
                      </p>
                      <p className="text-xs text-gray-400">
                        Overall Score
                      </p>
                    </div>

                    {/* STATUS */}
                    <span
                      className={`px-4 py-1 rounded-full text-xs font-medium ${
                        item.status === "completed"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {item.status}
                    </span>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default InterviewHistory;