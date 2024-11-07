


// import React, { useState, useEffect } from 'react';

// const Loader = ({ onLoadingComplete }) => {
//   const [animationStage, setAnimationStage] = useState(0);

//   useEffect(() => {
//     // Start the pulsating animation
//     const pulsateTimer = setTimeout(() => setAnimationStage(1), 500);

//     // Start the split animation
//     const splitTimer = setTimeout(() => setAnimationStage(2), 2000);

//     // Finish loading after animations
//     const loadingTimer = setTimeout(() => {
//       setAnimationStage(3);
//       onLoadingComplete();
//     }, 3000);

//     return () => {
//       clearTimeout(pulsateTimer);
//       clearTimeout(splitTimer);
//       clearTimeout(loadingTimer);
//     };
//   }, [onLoadingComplete]);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-purple-900">
//       <div className="relative flex h-screen w-full overflow-hidden">
//         <div
//           className={`absolute inset-0 flex items-center justify-center bg-purple-900 transition-transform duration-1000 ease-in-out ${
//             animationStage === 2 ? '-translate-x-full' : ''
//           }`}
//         >
//           <div className="text-9xl font-bold text-purple-300">p</div>
//         </div>
//         <div
//           className={`absolute inset-0 flex items-center font-extrabold justify-center bg-purple-900 transition-transform duration-1000 ease-in-out ${
//             animationStage === 2 ? 'translate-x-full' : ''
//           }`}
//         >
//           <div className="text-9xl font-bold text-purple-300">L.in</div>
//         </div>
//         <div
//           className={`absolute inset-0 flex items-center font-extrabold justify-center bg-purple-900 transition-opacity duration-500 ${
//             animationStage === 2 ? 'opacity-0' : 'opacity-100'
//           }`}
//         >
//           <div
//             className={`text-9xl font-bold font-extrabold text-purple-300 ${
//               animationStage === 1 ? 'animate-pulse' : ''
//             }`}
//           >
//             pL.in
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loader;





import React, { useState, useEffect } from 'react';

const Loader = ({ onLoadingComplete }) => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const pulsateTimer = setTimeout(() => setAnimationStage(1), 500);
    const splitTimer = setTimeout(() => setAnimationStage(2), 2000);
    const loadingTimer = setTimeout(() => {
      setAnimationStage(3);
      onLoadingComplete();
    }, 3000);

    return () => {
      clearTimeout(pulsateTimer);
      clearTimeout(splitTimer);
      clearTimeout(loadingTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      <div className="relative flex h-screen w-full">
        <div
          className={`absolute inset-0 flex items-center justify-center bg-purple-900 transition-transform duration-1000 ease-in-out ${
            animationStage === 2 ? '-translate-x-full' : ''
          }`}
        >
          <div className="text-9xl font-bold text-purple-300">p</div>
        </div>
        <div
          className={`absolute inset-0 flex items-center font-extrabold justify-center bg-purple-900 transition-transform duration-1000 ease-in-out ${
            animationStage === 2 ? 'translate-x-full' : ''
          }`}
        >
          <div className="text-9xl font-bold text-purple-300">L.in</div>
        </div>
        <div
          className={`absolute inset-0 flex items-center font-extrabold justify-center bg-purple-900 transition-opacity duration-500 ${
            animationStage === 2 ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div
            className={`text-9xl font-bold font-extrabold text-purple-300 ${
              animationStage === 1 ? 'animate-pulse' : ''
            }`}
          >
            pL.in
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;







