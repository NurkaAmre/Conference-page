const hamburger = document.querySelector('.hamburger');
const openMenu = document.querySelector('.mobile-option');
const extBtn = document.querySelector('.exit');

function show() {
  openMenu.style.display = 'block';
  openMenu.classList.toggle('open');
  hamburger.style.visibility = 'hidden';
  extBtn.style.visibility = 'visible';
}

function close() {
  openMenu.style.display = 'none';
  openMenu.classList.remove('open');
  hamburger.style.visibility = 'visible';
  extBtn.style.visibility = 'hidden';
}

hamburger.addEventListener('click', show);
extBtn.addEventListener('click', close);

openMenu.addEventListener('click', close);

//= ======
const projects = [{
  id: '1',
  name: 'Mr.Ahmad',
  degree: 'Bachelors Degree (BSc) Al-Azhar University (AU)',
  comment: 'I have been teaching Quran for the past eight years.',
  img: './assets/mobile/teach-m.png',
}, {
  id: '2',
  name: 'Mr.Adel Guiton',
  degree: 'Bachelors Degree (BSc) Al-Azhar University (AU)',
  comment: 'Its an honor to teach others how to recite properly.',
  img: './assets/mobile/teach-m.png',
}, {
  id: '3',
  name: 'Mr.Hocam Mahmut',
  degree: 'Bachelors Degree (BSc) Al-Azhar University (AU)',
  comment: 'I love to make the lessons easy to undesrtand.',
  img: './assets/mobile/teach-m.png',
}, {
  id: '4',
  name: 'Mr.Hami Andar',
  degree: 'Bachelors Degree (BSc) Al-Azhar University (AU)',
  comment: "I love to hearing about the student's goals and dreams.",
  img: './assets/mobile/teach-m.png',
}, {
  id: '5',
  name: 'Mrs.Israa Abdul-Aziz',
  degree: 'Bachelors Degree (BSc) Al-Azhar University (AU)',
  comment: 'I use simple, straightforward teaching methods.',
  img: './assets/mobile/t-f.png',
}, {
  id: '6',
  name: 'Mrs.Aisha Mohammed',
  degree: 'Bachelors Degree (BSc) Al-Azhar University (AU)',
  comment: 'I especially love teaching beginner levels.',
  img: './assets/mobile/teacger-f.png',
}];

const teachersList = document.querySelector('#list ul.flex');

for (let i = 0; i < projects.length; i += 1) {
  teachersList.innerHTML += `
        <li class="teachers">
        <img src="${projects[i].img}" alt="" width="200px" height="200px">
        <div>
        <h4 class="t-h4">${projects[i].name}</h4>
        <p class="t-p">${projects[i].degree}</p>
        <hr class="hr-g">
        <p class="p-t">${projects[i].comment}</p>
        </div>
        </li>`;
}
