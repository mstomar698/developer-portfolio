// Effects
// To Use tsParticle.js

window.onload = function () {
  tsParticles.load('tsparticles', Particles1); // you can try other free styles provided from no. 1 to 7
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

// Particles Example
const Particles1 = {
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
    detectsOn: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'trail',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
      trail: {
        delay: 0.005,
        quantity: 5,
        pauseOnStop: true,
      },
    },
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
};

const Particles2 = {
  fullScreen: {
    enable: true,
    zIndex: 100,
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 0,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ff0000',
      animation: {
        enable: true,
        speed: 180,
        sync: true,
      },
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'https://cdn.matteobruni.it/images/particles/github.svg',
        width: 100,
        height: 100,
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
      value: 15,
      random: {
        enable: true,
        minimumValue: 5,
      },
      animation: {
        enable: true,
        speed: 5,
        minimumValue: 5,
        sync: true,
        startValue: 'min',
        destroy: 'max',
      },
    },
    links: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 3.5,
      direction: 'none',
      random: false,
      straight: false,
      outMode: 'destroy',
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detectsOn: 'window',
    events: {
      onhover: {
        enable: true,
        mode: 'trail',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
      trail: {
        delay: 0.005,
        quantity: 5,
        pauseOnStop: true,
      },
    },
  },
  retina_detect: true,
};

const Particles3 = {
  preset: 'big-circles',
  color: 'green',
  // To color backround of balls
  // backgroundMask: {
  //   enable: false,
  //   cover: {
  //     value: {
  //       r: 60,
  //       g: 179,
  //       b: 113
  //     }
  //   }
  // },
  background: {
    image: "url('../assets/bg-images/bgcard.gif')",
    // background: 'var(--main-color)',
    size: '100% 100%',
    repeat: 'no-repeat',
  },
  particles: {
    opacity: {
      value: 1,
      random: {
        enable: true,
        minimumValue: 0.05,
      },

      animation: {
        enable: true,
        speed: 1.5,
        minimumValue: 0.05,
      },
    },
    size: {
      value: 20,
    },
    color: {
      value: '#7CFC00',
      animation: {
        enable: true,
        speed: 20,
        sync: true,
      },
    },
  },
};

const Particles4 = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 13,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#7CFC00',
    },
    shape: {
      type: 'polygon',
      stroke: {
        width: 12,
        color: '#7CFC00',
      },
      polygon: {
        sides: 3,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 9,
      random: true,
      anim: {
        enable: true,
        speed: 6,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 4,
      direction: 'top-right',
      random: false,
      straight: true,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'windows',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 150,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

const Particles5 = {
  fpsLimit: 60,
  particles: {
    groups: {
      z5000: {
        number: {
          value: 70,
        },
        zIndex: {
          value: 5000,
        },
      },
      z7500: {
        number: {
          value: 30,
        },
        zIndex: {
          value: 75,
        },
      },
      z2500: {
        number: {
          value: 50,
        },
        zIndex: {
          value: 25,
        },
      },
      z1000: {
        number: {
          value: 40,
        },
        zIndex: {
          value: 10,
        },
      },
    },
    number: {
      value: 200,
      density: {
        enable: false,
        value_area: 800,
      },
    },
    color: {
      value: '#fff',
      animation: {
        enable: false,
        speed: 20,
        sync: true,
      },
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 1,
      random: false,
      animation: {
        enable: false,
        speed: 3,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
    },
    links: {
      enable: false,
      distance: 100,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      angle: {
        value: 10,
        offset: 0,
      },
      enable: true,
      speed: 5,
      direction: 'right',
      random: false,
      straight: true,
      outModes: {
        default: 'out',
      },
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
    zIndex: {
      value: 5,
      opacityRate: 0.5,
    },
  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onHover: {
        enable: false,
        mode: 'repulse',
      },
      onClick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
      },
      repulse: {
        distance: 200,
      },
      push: {
        quantity: 4,
        groups: ['z5000', 'z7500', 'z2500', 'z1000'],
      },
      remove: {
        quantity: 2,
      },
    },
  },
  detectRetina: true,
  background: {
    color: '#000000',
    image: '',
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
  },
  emitters: {
    position: {
      y: 55,
      x: -30,
    },
    rate: {
      delay: 7,
      quantity: 1,
    },
    size: {
      width: 0,
      height: 0,
    },
    particles: {
      shape: {
        type: 'images',
        options: {
          images: [
            {
              src: 'https://particles.js.org/images/amongus_blue.png',
              width: 205,
              height: 267,
            },
            {
              src: 'https://particles.js.org/images/amongus_cyan.png',
              width: 207,
              height: 265,
            },
            {
              src: 'https://particles.js.org/images/amongus_green.png',
              width: 204,
              height: 266,
            },
            {
              src: 'https://particles.js.org/images/amongus_lime.png',
              width: 206,
              height: 267,
            },
            {
              src: 'https://particles.js.org/images/amongus_orange.png',
              width: 205,
              height: 265,
            },
            {
              src: 'https://particles.js.org/images/amongus_pink.png',
              width: 205,
              height: 265,
            },
            {
              src: 'https://particles.js.org/images/amongus_red.png',
              width: 204,
              height: 267,
            },
            {
              src: 'https://particles.js.org/images/amongus_white.png',
              width: 205,
              height: 267,
            },
          ],
        },
      },
      size: {
        value: 40,
      },
      move: {
        speed: 10,
        outModes: {
          default: 'destroy',
          left: 'none',
        },
        straight: true,
      },
      zIndex: {
        value: 0,
      },
      rotate: {
        value: {
          min: 0,
          max: 360,
        },
        animation: {
          enable: true,
          speed: 10,
          sync: true,
        },
      },
    },
  },
};

const Particles6 = {
  // background: {
  //   color: {
  //     value: "#000"
  //   },
  //   position: "50% 50%",
  //   repeat: "no-repeat",
  //   size: "cover"
  // },
  // fullScreen: {
  //   zIndex: 1
  // },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onDiv: {
        selectors: '#repulse-div',
        mode: 'repulse',
      },
      onHover: {
        enable: true,
        mode: 'bubble',
        parallax: {
          enable: true,
          force: 60,
        },
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      grab: {
        distance: 400,
      },
    },
  },
  motion: {
    disable: true,
  },
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: true,
        },
        value: {
          min: 0.1,
          max: 1,
        },
      },
      vertical: {
        random: {
          enable: true,
        },
        value: {
          min: 0.1,
          max: 1,
        },
      },
    },
    color: {
      value: '#7CFC00',
    },
    links: {
      distance: 150,
      enable: true,
      opacity: 0.4,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
      path: {},
      outModes: {
        bottom: 'out',
        left: 'out',
        right: 'out',
        top: 'out',
      },
      spin: {},
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      random: {
        enable: true,
      },
      value: {
        min: 0.1,
        max: 1,
      },
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.2,
      },
    },
    rotate: {
      animation: {
        enable: true,
        speed: 5,
      },
      direction: 'random',
    },
    shape: {
      options: {
        character: {
          fill: false,
          font: 'Verdana',
          style: '',
          value: '*',
          weight: '400',
        },
        char: {
          fill: false,
          font: 'Verdana',
          style: '',
          value: '*',
          weight: '400',
        },
        polygon: {
          sides: 5,
        },
        star: {
          sides: 5,
        },
        image: [
          {
            src: 'https://i.imgur.com/VFTFsom.png',
            width: 32,
            height: 32,
          },
          {
            src: 'https://i.imgur.com/6ea46Xt.png',
            width: 32,
            height: 32,
          },
        ],
        images: [
          {
            src: 'https://i.imgur.com/VFTFsom.png',
            width: 32,
            height: 32,
          },
          {
            src: 'https://i.imgur.com/6ea46Xt.png',
            width: 32,
            height: 32,
          },
        ],
      },
      type: 'image',
    },
    size: {
      random: {
        enable: true,
      },
      value: {
        min: 1,
        max: 16,
      },
      animation: {
        speed: 40,
        minimumValue: 0.1,
      },
    },
    stroke: {
      color: {
        value: '#7CFC00',
        animation: {
          h: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
        },
      },
    },
    twinkle: {
      lines: {
        frequency: 0.95,
      },
      particles: {
        frequency: 0.95,
      },
    },
  },
};

const Particles7 = {
  fpsLimit: 60,
  backgroundMode: {
    enable: true,
    zIndex: 0,
  },
  particles: {
    number: {
      value: 150,
      density: {
        enable: false,
        area: 1000,
      },
    },
    color: {
      value: ['#56b3b4', '#ea5e5e', '#f7ba3e', '#bf85bf'],
    },
    shape: {
      type: 'circle',
      options: {
        polygon: {
          sides: 5,
        },
        image: {
          src: 'https://cdn.matteobruni.it/images/particles/github.svg',
          width: 100,
          height: 100,
        },
      },
    },
    stroke: {
      width: 0,
    },
    opacity: {
      value: 1,
      random: false,
      animation: {
        enable: false,
        speed: 3,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3.5,
      minimumvalue: 2.5,
      random: true,
      animation: {
        enable: false,
        speed: 20,
        minimumValue: 1,
        sync: false,
      },
    },
    links: {
      enable: true,
      distance: 100,
      color: '#334651',
      blink: false,
      consent: false,
      opacity: 1,
      width: 2,
      triangles: {
        enable: false,
        opacity: 0.05,
      },
    },
    move: {
      warp: true,
      enable: true,
      speed: 4,
      direction: 'none',
      random: false,
      straight: false,
      outMode: 'out',
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detectsOn: 'windows',
    events: {
      onHover: {
        enable: false,
        mode: '',
      },
      onClick: {
        enable: false,
        mode: '',
      },
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1,
        },
      },
      connect: {
        radius: 1000,
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
      },
      repulse: {
        distance: 50,
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
    },
  },
  detectRetina: true,
  background: {
    color: 'var(--main-color)',
    // image: "",
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
  },
};
