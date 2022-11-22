window.onload = function () {
  Particles.init({
    selector: '.background',
    connectParticles: true,
    color: '#0cf442',
    sizeVariations: 10,
    maxParticles: 200,
    speed: 1,
    minDistance: 200,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 200,
          minDistance: 80,
          color: '#48F2E3',
          connectParticles: true,
        },
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 100,
          minDistance: 50,
          connectParticles: true,
        },
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 0, 
        },
      },
    ],
  });
};
