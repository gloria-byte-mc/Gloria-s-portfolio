document.getElementById('about-p').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default anchor behavior
  
  const aboutSection = document.getElementById('about-page');
  
  // Reset animation
  aboutSection.classList.remove('slideInRight');
  
  // Add animation class
  setTimeout(() => {
    aboutSection.classList.add('slideInRight');
  }, 10);
  
  // Smooth scroll to section
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('services-p').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default anchor behavior
  
  const servicesSection = document.getElementById('services-page');
  
  // Reset animation if you have one
  servicesSection.classList.remove('slideInRight');
  
  // Add animation class if you want
  setTimeout(() => {
    servicesSection.classList.add('slideInRight');
  }, 10);
  
  // Smooth scroll to section
  servicesSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('portfolio-p').addEventListener('click', function(e){
  e.preventDefault();

  const portfolioSection = document.getElementById('portfolio-page');

  portfolioSection.scrollIntoView({behavior: 'smooth'});
})

document.getElementById('home').addEventListener('click', function(e){
  e.preventDefault();

  const homeSection = document.getElementById('home-page');

  homeSection.scrollIntoView({behavior: 'smooth'});
})

document.getElementById('contact-p').addEventListener('click', function(e){
  e.preventDefault();

  const contactSection =document.getElementById('contact-page');

  contactSection.scrollIntoView({behavior: 'smooth'});
});

/*
document.getElementById('input').addEventListener('click', function(){
this.style.backgroundColor = '#ff6b6b';
this.style.border = none;
 this.style.outline = 'none';
 this.style.borderBottom = '2px solid #ff6b6b';
}); */

document.getElementById('sun').addEventListener('click', function() {
  const icon = this.querySelector('i');

  if (icon.classList.contains('fa-moon')) {
    icon.classList.remove('fa-moon');
  
    icon.classList.add('fa-sun');
    icon.style.color = '#ff6b6b';
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
   icon.style.color = 'black';
  }
});
/*
document.querySelector(".fa-sun").addEventListener('click', function(){

  const navbar = document.getElementById('nav');
   if(navbar.style.backgroundColor === 'white'){
  navbar.style.backgroundColor = '#0a1926'
   }else{
navbar.style.backgroundColor = 'white'
   }

   const name = document.getElementById('logo');
   if(name.style.color = '#2b4c7e'){
    name.style.color = '#ff6b6'
   }else{
    name.style.color = '#2b4c7e'
   }
}); */





document.querySelector(".fa-moon").addEventListener('click', function(){

  const navbar = document.getElementById('nav');
   navbar.classList.toggle('navbar2')

   const dark = document.getElementById('light')
   dark.classList.toggle('light2')
 
const sec = document.getElementById('home-page');
 sec.classList.toggle('section2')

 const about = document.getElementById('about-page')
 about.classList.toggle('about2')

 const services = document.getElementById('services-page')
 services.classList.toggle('services2')

 const portfolio = document.getElementById('portfolio-page')
 portfolio.classList.toggle('portfolio2')

 const grid = document.getElementById('grids')
 grid.classList.toggle('grida-container')

 const box = document.getElementById('grid1')
 box.classList.toggle('grid-a')

 const live = document.getElementById('view-live')
 live.classList.toggle('view-live2')

 const another = document.getElementById('grid3')
 another.classList.toggle('grid-b')

 const leave = document.getElementById('view-live')
 leave.classList.toggle('view-live3')

 const again = document.getElementById('grid5')
 again.classList.toggle('grid-c')
}); 
