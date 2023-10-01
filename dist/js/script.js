// Functionality for mobile hamburger menu

const hamburgar = document.querySelector('#hamburgar');
const header = document.querySelector('header');
const nav = document.querySelector('#nav');
const hero = document.querySelector('hero-section');
const contactBtn = document.querySelectorAll('.ct-btn');
console.log(`🚀 ~ contactBtn:`, contactBtn);



hamburgar.addEventListener('click', () => {
    header.classList.toggle('active');
    nav.classList.toggle('activex');
  

    if (header.classList.contains('active')) {
        // hero.classList.add = "";
        
    }
});


// contactBtn.forEach(function (button) {
//   console.log(button)
//     button.addEventListener('mouseover', () => {
//         button.classList.add('active');
//       });
     
// });
    

contactBtn.forEach(function(button) {
  button.addEventListener('mouseover', function() {
    contactBtn.forEach(function(btn) {
      btn.classList.remove('active');
    });
    button.classList.add('active');
  });
});