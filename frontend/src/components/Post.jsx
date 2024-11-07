
// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { toast } from 'react-toastify';
// import { Copy, Send } from 'lucide-react';

// const Post = ({ id, message, timestamp, vpnEnabled: initialVpnEnabled, isNew = false, isHighlighted = false, onSubmit }) => {
//   const [vpnEnabled, setVpnEnabled] = useState(initialVpnEnabled);
//   const [localMessage, setLocalMessage] = useState(message);
//   const postRef = useRef(null);

//   useEffect(() => {
//     if (isHighlighted && postRef.current) {
//       postRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   }, [isHighlighted]);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(message);
//     toast.success('Copied to clipboard!', { position: 'bottom-right', autoClose: 2000 });
//   };

//   const handleSend = () => {
//     if (isNew && onSubmit) {
//       onSubmit({ url: localMessage, requiresVpn: vpnEnabled });
//       setLocalMessage('');
//       setVpnEnabled(false);
//     } else {
//       toast.success('Post sent!', { position: 'bottom-right', autoClose: 2000 });
//     }
//   };

//   return (
//     <motion.div
//       ref={postRef}
//       className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4 ${
//         isHighlighted ? 'ring-2 ring-purple-500' : ''
//       }`}
//       initial={isHighlighted ? { scale: 0.95 } : {}}
//       animate={isHighlighted ? { scale: 1 } : {}}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="flex items-center justify-between mb-3 h-1">
//         <span className="text-xl font-bold text-purple-600 dark:text-purple-400">#{id}</span>
//         <div className="flex items-center">
//           <span className="mr-2 text-sm text-gray-500 dark:text-gray-400 ">VPN</span>
//           <motion.button
//             className={`w-12 h-6 flex items-center rounded-full p-1 w-2 h-2 ${vpnEnabled ? 'bg-purple-600' : 'bg-gray-300'}`}
//             onClick={() => isNew && setVpnEnabled(!vpnEnabled)}
//             whileTap={{ scale: 0.9 }}
//           >
//             <motion.div
//               className={`bg-white w-5 h-5 rounded-full shadow-md transform ${vpnEnabled ? 'translate-x-6' : ''}`}
//               layout
//               transition={{ type: "spring", stiffness: 700, damping: 30 }}
//             />
//           </motion.button>
//         </div>
//       </div>
//       <div className="flex items-center">
//         <div className="flex-grow mr-2">
//           <textarea
//             className="w-full h-10 p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//             value={isNew ? localMessage : message}
//             onChange={(e) => isNew && setLocalMessage(e.target.value)}
//             readOnly={!isNew}
//             style={{ resize: 'none' }}
//             rows={3}
//           />
//         </div>
//         <motion.button
//           className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={isNew ? handleSend : handleCopy}
//         >
//           {isNew ? <Send size={20} /> : <Copy size={17} />}
//         </motion.button>
//       </div>
//       <div className="text-xs text-gray-500 dark:text-gray-400 mt-0">
//         {isNew?"Click send to post":<>Posted:{timestamp}</>}
//       </div>
//     </motion.div>
//   );
// };

// export default Post;








import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Copy, Send } from 'lucide-react';

const Post = ({ id, message, timestamp, vpnEnabled: initialVpnEnabled, isNew = false, isHighlighted = false, onSubmit }) => {
  const [vpnEnabled, setVpnEnabled] = useState(initialVpnEnabled);
  const [localMessage, setLocalMessage] = useState(message);
  const postRef = useRef(null);

  useEffect(() => {
    if (isHighlighted && postRef.current) {
      postRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isHighlighted]);

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    // Tooltip notification will be handled by parent
  };

  const handleSend = () => {
    if (isNew && onSubmit && localMessage.trim()) {
      onSubmit({ url: localMessage, requiresVpn: vpnEnabled });
      setLocalMessage('');
      setVpnEnabled(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (isNew) {
        handleSend();
      }
    }
  };

  return (
    <motion.div
      ref={postRef}
      className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4 ${
        isHighlighted ? 'ring-2 ring-purple-500' : ''
      }`}
      initial={isHighlighted ? { scale: 0.95 } : {}}
      animate={isHighlighted ? { scale: 1 } : {}}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
          #{id}
        </span>
        <div className="flex items-center">
          <span className="mr-2 text-sm text-gray-500 dark:text-gray-400">VPN</span>
          <motion.button
            className={`w-2 h-6 flex items-center rounded-full p-1 ${vpnEnabled ? 'bg-purple-600' : 'bg-gray-300'}`}
            onClick={() => isNew && setVpnEnabled(!vpnEnabled)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform ${vpnEnabled ? 'translate-x-6' : ''}`}
              layout
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
            />
          </motion.button>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          className="flex-grow mr-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded border-none focus:ring-0 focus:outline-none"
          value={isNew ? localMessage : message}
          onChange={(e) => isNew && setLocalMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          readOnly={!isNew}
          placeholder={isNew ? "Enter your message..." : undefined}
        />
        <motion.button
          className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={isNew ? handleSend : handleCopy}
        >
          {isNew ? <Send size={20} /> : <Copy size={17} />}
        </motion.button>
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        {isNew ? "Press Enter to post" : `Posted: ${timestamp}`}
      </div>
    </motion.div>
  );
};

export default Post;



