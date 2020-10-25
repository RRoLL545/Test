//DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const target = document.getElementById('target');
const date = document.getElementById('date');
const preTarget = document.getElementById('pre-target');

// Options
const showAmPm = true;

// Show Time
function showTimeAndDate() {
  let currentTime = new Date();
  let hour = currentTime.getHours();
  let min = currentTime.getMinutes();
  let sec = currentTime.getSeconds();

  let dayOfWeek = currentTime.getDay();
  let dateOfMonth = currentTime.getDate();
  let month = currentTime.getMonth();

  // Set Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  // Set Date
  date.innerHTML = `${dayOfWekkNaming(dayOfWeek)}, ${dateOfMonth} ${monthNaming(month)}`;

  setTimeout(showTimeAndDate, 1000);
}

// Add Zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let currentTime = new Date(),
    hour = currentTime.getHours();

  if ( hour < 6 ) {
    //Night
    document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = 'Good night, ';
    document.body.style.color = 'white';
  } else if ( hour < 12 ) {
    // Morning
    document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = 'Good Morning, ';
    document.body.style.color = 'black';
  } else if ( hour < 18 ) {
    // Afternoon
    document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon, ';
    document.body.style.color = 'black';
  } else {
    // Evening
    document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            if ( e.target.innerText === '' ) {
                getName();
            } else {
                localStorage.setItem('name', e.target.innerText);
            }
            name.blur();
        }
    } else {
        if ( e.target.innerText === '' ) {
            getName();
        } else {
            localStorage.setItem('name', e.target.innerText);
        }
    }
}

// Get Target
function getTarget() {
  if (localStorage.getItem('target') === null) {
    target.textContent = '[Enter Target]';
  } else {
    target.textContent = localStorage.getItem('target');
  }
}

// Set Target
function setTarget(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            if ( e.target.innerText === '' ) {
                getTarget();
            } else {
                localStorage.setItem('target', e.target.innerText);
            }
            target.blur();
        }
    } else {
        if ( e.target.innerText === '' ) {
            getTarget();
        } else {
            localStorage.setItem('target', e.target.innerText);
        }
    }
}

// Prepare Input Name
function prepareInputName() {
    name.innerText = '     ';
}
// Prepare Input Target
function prepareInputTarget() {
    target.innerText = '     ';
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('focus', prepareInputName);
target.addEventListener('keypress', setTarget);
target.addEventListener('blur', setTarget);
target.addEventListener('focus', prepareInputTarget);

// Name of day of week
function dayOfWekkNaming(num) {
    switch (num) {
        case 0:
            return 'Воскресенье';
        case 1:
            return 'Понедельник';
        case 2:
            return 'Вторник';
        case 3:
            return 'Среда';
        case 4:
            return 'Четверг';
        case 5:
            return 'Пятница';
        case 6:
            return 'Суббота';
        default:
            return '';
    }
}

// Name of the month
function monthNaming(num) {
    switch (num) {
        case 0:
            return 'января';
        case 1:
            return 'февраля';
        case 2:
            return 'марта';
        case 3:
            return 'апреля';
        case 4:
            return 'мая';
        case 5:
            return 'июня';
        case 6:
            return 'июля';
        case 7:
            return 'августа';
        case 8:
            return 'сентября';
        case 9:
            return 'октября';
        case 10:
            return 'ноября';
        case 11:
            return 'декабря';
        default:
            return '';
    }
}

// Run
showTimeAndDate();
setBgGreet();
getName();
getTarget();