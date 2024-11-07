


import React from 'react'
import { motion } from 'framer-motion'
import { Copy, AlertCircle} from 'lucide-react'

const Modal = ({ isOpen, onClose, result }) => {
  if (!isOpen) return null

  const isLinkNotFound = !result || !result.linkId

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-md mx-4 border border-gray-200 dark:border-gray-700"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {isLinkNotFound ? (
          <div className="flex flex-col items-center justify-center py-6">
            <AlertCircle size={50} color='#a859f2'></AlertCircle>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">

              Link not found
            </h3>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                #{result.linkId}
              </h3>
              <button
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                onClick={onClose}
              >
             
              </button>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-72">VPN</span>
              <motion.button
                className={`w-2 h-6 flex items-center rounded-full p-1 ${result.requiresVpn ? 'bg-purple-600' : 'bg-gray-300'}`}
                disabled
              >
                <motion.div
                  className={`bg-white w-5 h-5 rounded-full shadow-md transform ${result.requiresVpn ? 'translate-x-6' : ''}`}
                  layout
                  transition={{ type: 'spring', stiffness: 700, damping: 30 }}
                />
              </motion.button>
            </div>

            <div className="flex items-center justify-between mb-3">
              
            </div>

            <div className="flex items-center">
              <input
                type="text"
                className="flex-grow mr-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded border-none focus:ring-0 focus:outline-none"
                value={result.url}
                readOnly
              />
              <motion.button
                className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigator.clipboard.writeText(result.url)}
              >
                <Copy size={17} />
              </motion.button>
            </div>

            <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Posted: {result.createdAt ? new Date(result.createdAt).toLocaleString() : 'Invalid Date'}
            </div>
          </>
        )}
      </motion.div>
    </div>
  )
}

export default Modal
