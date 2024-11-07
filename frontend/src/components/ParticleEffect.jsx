// import React from 'react';
// import Particles from 'react-tsparticles';

// export const ParticlesBackground = () => {
//   return (
//     <Particles
//       options={{
//         fullScreen: {
//           enable: true,
//           zIndex: -1,
//         },
//         particles: {
//           number: {
//             value: 80,
//             density: {
//               enable: true,
//               value_area: 800,
//             },
//           },
//           color: {
//             value: '#ffffff',
//           },
//           shape: {
//             type: 'circle',
//             stroke: {
//               width: 0,
//               color: '#000000',
//             },
//             polygon: {
//               nb_sides: 5,
//             },
//           },
//           opacity: {
//             value: 0.5,
//             random: false,
//             anim: {
//               enable: false,
//               speed: 1,
//               opacity_min: 0.1,
//               sync: false,
//             },
//           },
//           size: {
//             value: 5,
//             random: true,
//             anim: {
//               enable: false,
//               speed: 40,
//               size_min: 0.1,
//               sync: false,
//             },
//           },
//           line_linked: {
//             enable: true,
//             distance: 150,
//             color: '#ffffff',
//             opacity: 0.4,
//             width: 1,
//           },
//           move: {
//             enable: true,
//             speed: 6,
//             direction: 'none',
//             random: false,
//             straight: false,
//             out_mode: 'out',
//             bounce: false,
//             attract: {
//               enable: false,
//               rotateX: 600,
//               rotateY: 1200,
//             },
//           },
//         },
//         interactivity: {
//           detect_on: 'canvas',
//           events: {
//             onhover: {
//               enable: true,
//               mode: 'repulse',
//             },
//             onclick: {
//               enable: true,
//               mode: 'push',
//             },
//             resize: true,
//           },
//           modes: {
//             grab: {
//               distance: 400,
//               line_linked: {
//                 opacity: 1,
//               },
//             },
//             bubble: {
//               distance: 400,
//               size: 40,
//               duration: 2,
//               opacity: 8,
//               speed: 3,
//             },
//             repulse: {
//               distance: 200,
//               duration: 0.4,
//             },
//             push: {
//               particles_nb: 4,
//             },
//             remove: {
//               particles_nb: 2,
//             },
//           },
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// };






import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from "tsparticles";

const ParticleEffect = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          color: { value: "#8B5CF6" },
          move: {
            direction: "outside",
            enable: true,
            outModes: "bounce",
            random: false,
            speed: 6,
            straight: false
          },
          number: { density: { enable: true, area: 800 }, value: 80 },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 10,
        display: "none",
      }}
    />
  );
};

export default ParticleEffect;