// defining global variables to assist in manipulating DOM
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleText = document.getElementsByClassName('toggle-text')[0];
const toggleIcon = document.getElementsByClassName('fa-solid')[0];
const textBox = document.getElementById('text-box');
const navBar = document.getElementById('nav');

// defining global variables to identify the embedded images and change them based on light or dark mode theme.
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

// checking if color theme defined on local storage in browser or set at OS level.
let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");


// if condition above returns dark (storedTheme = 'dark) then change toggle switch text, icon and position to be in line with dark mode style.
if(storedTheme === 'dark'){
 toggleSwitch.checked = true;
 toggleLightAndDarkMode(storedTheme);
}


// set images based on color theme
function imageMode(mode) {
  image1.src = `img/undraw_proud_coder_${mode}.svg`;
  image2.src = `img/undraw_feeling_proud_${mode}.svg`;
  image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}

function toggleLightAndDarkMode(mode) {
  navBar.style.backgroundColor = mode === 'light' ? 'rgba(255,255,255, 0.5)' : 'rgba(0,0,0, .5)';
  textBox.style.backgroundColor = mode === 'light' ? 'rgba(0,0,0, .5)' : 'rgba(255,255,255, 0.5)';
  document.documentElement.setAttribute('data-theme', mode)
  toggleText.innerHTML = `${mode.charAt(0).toUpperCase()}${mode.slice(1)} Mode`;
  toggleIcon.classList.toggle('fa-moon');
  localStorage.setItem('theme', mode);
  imageMode(mode);
}

// switch Theme Dynamically
function switchTheme(event) {
event.target.checked ? toggleLightAndDarkMode('dark') : toggleLightAndDarkMode('light')
}
 // Event Listener for when the toggle button is changed.
toggleSwitch.addEventListener('change', switchTheme);