/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () { headerShadow() };

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Full-Stack Developer"],
  loop: false,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })


/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 })

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    } else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}
function navigateTo(sectionId) {
  // Assuming sectionId is the ID of the section you want to navigate to
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the section
  }
}

function showExperienceDetails(type) {
  var modal = document.getElementById('experienceModal-'+type);
  if (modal) {
    modal.style.display = 'flex'; // Display the modal
  }
  // Get the details element corresponding to the type
  var details = document.querySelector('.experience-box-details-' + type);
  if (details) {
    // Toggle the visibility of the details element
    details.classList.toggle('show-details');
  }
}

function closeExperienceDetails(type) {
  var modal = document.getElementById('experienceModal-'+type);
  if (modal) {
    modal.style.display = 'none'; // Hide the modal
  }
  var details = document.querySelector('.experience-box-details-' + type);
  if (details) {
    // Toggle the visibility of the details element
    details.classList.toggle('show-details');
  }
}

function showProjectDetails(type) {
  var modal = document.getElementById('projectModel-'+type);
  if (modal) {
    modal.style.display = 'flex'; // Display the modal
  }
  // Get the details element corresponding to the type
  var details = document.querySelector('.project-box-details-' + type);
  if (details) {
    // Toggle the visibility of the details element
    details.classList.toggle('show-details');
  }
}

function closeProjectDetails(type) {
  var modal = document.getElementById('projectModel-'+type);
  if (modal) {
    modal.style.display = 'none'; // Hide the modal
  }
  var details = document.querySelector('.project-box-details-' + type);
  if (details) {
    // Toggle the visibility of the details element
    details.classList.toggle('show-details');
  }
}

function redirectTo(platform) {
  // Define the URLs for different social media platforms
  var urls = {
    'linkedin': 'https://www.linkedin.com/in/venkatasaipunnam',
    'github': 'https://github.com/venkatasaipunnam',
    'instagram': 'https://www.instagram.com/venkata_sai_p'
  };

  // Get the URL corresponding to the platform
  var url = urls[platform];

  // Open the URL in a new tab
  if (url) {
    window.open(url, '_blank');
  }
}

function downloadResume() {
  // Replace 'resume.pdf' with the path to your resume file
  var resumeUrl = 'assets/files/VenkataSaiReddy_Punnam_Resume.pdf';

  // Open the resume URL in a new tab
  window.open(resumeUrl, '_blank');
}

var slideIndex = 0;
showSlidesP1();

function showSlidesP1() {
    var i;
    var slides = document.getElementsByClassName("mySlides-p1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "flex";
    setTimeout(showSlidesP1, 5000); // Change image every 2 seconds (2000 milliseconds)
}

var slideIndexP2 = 0;
showSlidesP2();
function showSlidesP2() {
    var i;
    var slides = document.getElementsByClassName("mySlides-p2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexP2++;
    if (slideIndexP2 > slides.length) { slideIndexP2 = 1 }
    slides[slideIndexP2 - 1].style.display = "flex";
    setTimeout(showSlidesP2, 5000); // Change image every 2 seconds (2000 milliseconds)
}

function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Construct the email body
  var body = message;

  // Open user's email client with pre-filled email
  window.location.href = "mailto:" + "venkatasai1478@gmail.com" + "?subject=Message from " + name + "&body=" + encodeURIComponent(body);
}

window.addEventListener('scroll', scrollActive)
window.addEventListener('navigate', navigateTo)