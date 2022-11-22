document.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
  });

  var listView = document.querySelector('.list-view');
  var gridView = document.querySelector('.grid-view');
  var projectsList = document.querySelector('.project-boxes');

  listView.addEventListener('click', function () {
    gridView.classList.remove('active');
    listView.classList.add('active');
    projectsList.classList.remove('jsGridView');
    projectsList.classList.add('jsListView');
  });

  gridView.addEventListener('click', function () {
    gridView.classList.add('active');
    listView.classList.remove('active');
    projectsList.classList.remove('jsListView');
    projectsList.classList.add('jsGridView');
  });

  document
    .querySelector('.messages-btn')
    .addEventListener('click', function () {
      document.querySelector('.messages-section').classList.add('show');
    });

  document
    .querySelector('.messages-close')
    .addEventListener('click', function () {
      document.querySelector('.messages-section').classList.remove('show');
    });
});

// Particle JS
window.onload = function () {
  Particles.init({
    selector: '.background',
    connectParticles: true,
    color: '#ffffff',
    sizeVariations: 2,
    maxParticles: 120,
    speed: 0.5,
    minDistance: 100,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 100,
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
          maxParticles: 0, // disables particles.js
        },
      },
    ],
  });

  $('.t-input').blur(function () {
    tmpval = $(this).val();
    if (tmpval == '') {
      $(this).addClass('empty');
      $(this).removeClass('not-empty');
    } else {
      $(this).addClass('not-empty');
      $(this).removeClass('empty');
    }
  });
};

// $(document).ready(function () {
//   $('.btn-sub').click(function () {
//     alert('Sorry mate! Form not yet working.');
//   });
//   // Smooth Scroll
//   // Select all links with hashes
//   $('a[href*="#"]')
//     // Remove links that don't actually link to anything
//     .not('[href="#"]')
//     .not('[href="#0"]')
//     .click(function (event) {
//       // On-page links
//       if (
//         location.pathname.replace(/^\//, '') ==
//           this.pathname.replace(/^\//, '') &&
//         location.hostname == this.hostname
//       ) {
//         // Figure out element to scroll to
//         var target = $(this.hash);
//         target = target.length
//           ? target
//           : $('[name=' + this.hash.slice(1) + ']');
//         // Does a scroll target exist?
//         if (target.length) {
//           // Only prevent default if animation is actually gonna happen
//           event.preventDefault();
//           $('html, body').animate(
//             {
//               scrollTop: target.offset().top - 90,
//             },
//             1000,
//             function () {
//               // Callback after animation
//               // Must change focus!
//               var $target = $(target);
//               $target.focus();
//               if ($target.is(':focus')) {
//                 // Checking if the target was focused
//                 return false;
//               } else {
//                 $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
//                 $target.focus(); // Set focus again
//               }
//             }
//           );
//         }
//       }
//     });
// });
