// skills js
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
