
// defining global variables to assist in manipulating DOM
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleText = document.getElementsByClassName('toggle-text')[0];
const toggleIcon = document.getElementsByClassName('fa-solid')[0];

// checking if color theme defined on local storage in browser or set at OS level.
let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");


// if condition above returns dark (storedTheme = 'dark) then change toggle switch text, icon and position to be in line with dark mode style.
if(storedTheme === 'dark'){
  document.documentElement.setAttribute('data-theme', storedTheme);
  toggleSwitch.checked = true;
  toggleText.innerHTML = 'Dark Mode';
  toggleIcon.classList.add('fa-moon');
}

// switch Theme Dynamically
function switchTheme(event){
  if(event.target.checked){
    document.documentElement.setAttribute('data-theme', 'dark')
    toggleText.innerHTML = 'Dark Mode';
    toggleIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleText.innerHTML = 'light Mode';
    toggleIcon.classList.remove('fa-moon');
    localStorage.setItem('theme', 'light');
  }  
   
}


 // Event Listener for when the toggle button is changed.
toggleSwitch.addEventListener('change', switchTheme);