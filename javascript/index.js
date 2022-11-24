// Effects
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

document.addEventListener('DOMContentLoaded', function () {
  // For Mode Switch
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // for project cards
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

document.addEventListener('DOMContentLoaded', function () {
  //  for skill cards
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
