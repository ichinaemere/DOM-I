const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//NAVIGATION
let nav = document.querySelectorAll("a");

nav[0].textContent = siteContent.nav[`nav-item-1`];
nav[1].textContent = siteContent.nav[`nav-item-2`];
nav[2].textContent = siteContent.nav[`nav-item-3`];
nav[3].textContent = siteContent.nav[`nav-item-4`];
nav[4].textContent = siteContent.nav[`nav-item-5`];

//Navlinks to Green

nav.forEach(navLink => navLink.style.color = "green");

//Prepend to Navbar
const beyonce = document.createElement("a");
beyonce.textContent = "Beyonce";

//Append to Navbar
const knowles = document.createElement("a");
knowles.textContent = "Knowles";

//Adding new links to Nav
const newNavLinks = document.querySelector("nav");
newNavLinks.prepend(beyonce);
newNavLinks.appendChild(knowles);

//CTA

//CTA H1
const ctaH1 = document.querySelector('.cta h1');
ctaH1.textContent = siteContent.cta["h1"];

//CTA Button
const ctaButton = document.querySelector('.cta button');
ctaButton.textContent = siteContent.cta['button'];

//CTA Img
let mainImg = document.getElementById("cta-img");
mainImg.setAttribute('src', siteContent["cta"]["img-src"]);

//MAIN CONTENT

//Top Content
const topContentH4 = document.querySelectorAll('.top-content .text-content h4');
topContentH4[0].textContent = siteContent['main-content']['features-h4'];
topContentH4[1].textContent = siteContent['main-content']['about-h4'];

//Top Content Text
const topContentText = document.querySelectorAll('.top-content .text-content p');
topContentText[0].textContent = siteContent['main-content']['features-content'];
topContentText[1].textContent = siteContent['main-content']['about-content'];

//Middle Image
const middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Bottom Content
const bottomContentH4 = document.querySelectorAll('.bottom-content .text-content h4');
bottomContentH4[0].textContent = siteContent['main-content']['services-h4'];
bottomContentH4[1].textContent = siteContent['main-content']['product-h4'];
bottomContentH4[2].textContent = siteContent['main-content']['vision-h4'];

//Bottom Content Text
const bottomContentText = document.querySelectorAll('.bottom-content .text-content p');
bottomContentText[0].textContent = siteContent['main-content']['services-content'];
bottomContentText[1].textContent = siteContent['main-content']['product-content'];
bottomContentText[2].textContent = siteContent['main-content']['vision-content'];

//CONTACT

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

const contactText = document.querySelectorAll('.contact p')
contactText[0].textContent = siteContent['contact']['address'];
contactText[1].textContent = siteContent['contact']['phone'];
contactText[2].textContent = siteContent['contact']['email'];

let addressArray = siteContent['contact']['address'].split(' ');
addressArray.splice(4, 0, '\r\n');
contactText[0].innerText = addressArray.join(' ');

//FOOTER

const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];
