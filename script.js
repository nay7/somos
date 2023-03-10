//this is for the navigation scrolling effect
const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
      entries, 
      sectionOneObserver
  ) {
    entries.forEach(entry => {
      //when the user has scrolled passed the home intro activate nav bar block
      if(!entry.isIntersecting) {
        header.classList.add('nav-scrolled');
      //if the user ends up scrolling back up then remove nav bar block
      } else {
        header.classList.remove("nav-scrolled");
      }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

//Lets paralax this shit up 
let logo = document.getElementById('logo');
let Clouds = document.getElementById('1Clouds');
let AClouds = document.getElementById('2Clouds');
let BBackground = document.getElementById('3Backgroundhills');
let CBackground = document.getElementById('4Backgroundhills');
let DBackground = document.getElementById('5Backgroundhills');
let EBackground = document.getElementById('6Backgroundhills');
let FBackground = document.getElementById('7Backgroundhills');
let GBackground = document.getElementById('8Backgroundhills');
let HBackground = document.getElementById('9Backgroundhills');
let IForeground = document.getElementById('10Foregroundhills');
let JForeground = document.getElementById('11Foregroundhills');
let KForeground = document.getElementById('12Foregroundhills');
let LTress = document.getElementById('14Trees');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  
  
  logo.style.marginTop = value* 2.5 + 'px';
})