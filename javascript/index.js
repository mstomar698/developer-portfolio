// Effects
// To Use tsParticle.js
window.onload = function () {
  tsParticles.load('tsparticles', {
    fpsLimit: 60,
    // To change Effect
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#7CFC00',
        animation: {
          enable: true,
          speed: 10,
          sync: true,
        },
      },
      shape: {
        type: 'triangle',
        stroke: {
          width: 0,
          color: '#7CFC00',
        },
        polygon: {
          nb_sides: 5,
        },
       
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 3,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: false,
          speed: 14,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 40,
        color: 'random',
        opacity: 0.4,
        width: 1,
        triangle: {
          enable: true,
          color: '#7CFC00',
          opacity: 0.1,
        },
      },
      move: {
        enable: true,
        speed: 4,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    // to Enable Or Disable Mouse trail
    interactivity: {
      detectsOn: "window",
      events: {
        onhover: {
          enable: true,
          mode: "trail"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
        repulse: {
          distance: 200
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        },
        trail: {
          delay: 0.005,
          quantity: 5,
          pauseOnStop: true
        }
      }
    },
    // interactivity: {
    //   detect_on: 'canvas',
    //   events: {
    //     onhover: {
    //       enable: true,
    //       mode: 'repulse',
    //     },
    //     onclick: {
    //       enable: true,
    //       mode: 'push',
    //     },
    //     resize: true,
    //   },
    //   modes: {
    //     grab: {
    //       distance: 400,
    //       line_linked: {
    //         opacity: 1,
    //       },
    //     },
    //     bubble: {
    //       distance: 400,
    //       size: 40,
    //       duration: 2,
    //       opacity: 0.8,
    //       speed: 3,
    //     },
    //     repulse: {
    //       distance: 200,
    //     },
    //     push: {
    //       particles_nb: 4,
    //     },
    //     remove: {
    //       particles_nb: 2,
    //     },
    //   },
    // },
    retina_detect: true,
    // To change or edit Background
    background: {
      color: 'var(--projects-section)',
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover',
    },
  });
};

// To Use Particle.js
// window.onload = function () {
//   Particles.init({
//     selector: '.background',
//     connectParticles: true,
//     color: '#0cf442',
//     sizeVariations: 10,
//     maxParticles: 200,
//     speed: 1,
//     minDistance: 200,
//     responsive: [
//       {
//         breakpoint: 768,
//         options: {
//           maxParticles: 200,
//           minDistance: 80,
//           color: '#48F2E3',
//           connectParticles: true,
//         },
//       },
//       {
//         breakpoint: 425,
//         options: {
//           maxParticles: 100,
//           minDistance: 50,
//           connectParticles: true,
//         },
//       },
//       {
//         breakpoint: 320,
//         options: {
//           maxParticles: 0,
//         },
//       },
//     ],
//   });
// };

// For Mode Switch
document.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');
  modeSwitch.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
  });
});

// For NavBar
const hamburger_menu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('header nav');
const links = document.querySelectorAll('.links a');

function closeMenu() {
  navbar.classList.remove('open');
  document.body.classList.remove('stop-scrolling');
}

hamburger_menu.addEventListener('click', () => {
  if (!navbar.classList.contains('open')) {
    navbar.classList.add('open');
    document.body.classList.add('stop-scrolling');
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener('click', () => closeMenu()));

// for project card
document.addEventListener('DOMContentLoaded', function () {
  var projectListView = document.querySelector('.project-list-view');
  var projectGridView = document.querySelector('.project-grid-view');
  var projectsList = document.querySelector('.project-boxes');

  projectListView.addEventListener('click', function () {
    projectGridView.classList.remove('active');
    projectListView.classList.add('active');
    projectsList.classList.remove('jsGridView');
    projectsList.classList.add('jsListView');
  });

  projectGridView.addEventListener('click', function () {
    projectGridView.classList.add('active');
    projectListView.classList.remove('active');
    projectsList.classList.remove('jsListView');
    projectsList.classList.add('jsGridView');
  });
});

//  for skill cards
document.addEventListener('DOMContentLoaded', function () {
  var listView = document.querySelector('.list-view');
  var gridView = document.querySelector('.grid-view');
  var skillsList = document.querySelector('.skill-boxes');

  listView.addEventListener('click', function () {
    gridView.classList.remove('active');
    listView.classList.add('active');
    skillsList.classList.remove('jsGridView');
    skillsList.classList.add('jsListView');
  });

  gridView.addEventListener('click', function () {
    gridView.classList.add('active');
    listView.classList.remove('active');
    skillsList.classList.remove('jsListView');
    skillsList.classList.add('jsGridView');
  });
});
