// NavBar links and names
let navLinks = ["#header", "#courses", "#about-us", "#contact", "#about-me"];
let navNames = ["Home", "Courses", "About us", "Contact", "About me"];

// Create links function
function createLinks(linkArray, nameArray, elementName) {
  for (const link in linkArray) {
    let createLiTemp = document.createElement("li");
    let createATemp = document.createElement("a");
    createATemp.setAttribute("href", linkArray[link]);
    if (linkArray[link] == "#about-me") {
      createATemp.setAttribute("class", "about-me-link");
    }
    let createATempContent = document.createTextNode(nameArray[link]);
    createATemp.appendChild(createATempContent);
    createLiTemp.appendChild(createATemp);
    elementName.appendChild(createLiTemp);
  }
}

// Navbar
let navbar = document.getElementById("navbar");
let navbarContent = document.createElement("div");
navbarContent.setAttribute("class", "wrapper");
navbar.appendChild(navbarContent);
let navLogoA = document.createElement("a");
navLogoA.setAttribute("href", "index.html");
let navLogo = document.createElement("img");
navLogo.setAttribute("id", "logo");
navLogo.setAttribute("src", "assets/img/logo.svg");
navLogo.setAttribute("alt", "logo");
navLogoA.appendChild(navLogo);
navbarContent.appendChild(navLogoA);
let navbarUlList = document.createElement("ul");
navbarUlList.setAttribute("id", "navbar-container");
navbarUlList.setAttribute("class", "navbar-list");
navbarContent.appendChild(navbarUlList);
createLinks(navLinks, navNames, navbarUlList);
let navbarCloseContainer = document.createElement("div");
navbarCloseContainer.setAttribute("id", "nav-close-container");
let navbarClose = document.createElement("div");
navbarClose.setAttribute("id", "nav-close");
navbarClose.setAttribute("class", "close");
navbarCloseContainer.appendChild(navbarClose);
navbarContent.appendChild(navbarCloseContainer);
let arrowContainer = document.createElement("div");
arrowContainer.setAttribute("id", "arrow-container");
let arrow = document.createElement("div");
arrow.setAttribute("class", "arrow");
arrowContainer.appendChild(arrow);
navbar.appendChild(arrowContainer);

// JQuery set sticky navbar
$(window).scroll(function () {
  if ($(this).scrollTop()) {
    $("#navbar").addClass("sticky-navbar");
    $('#arrow-container').fadeIn();
  } else {
    $("#navbar").removeClass("sticky-navbar");
    $('#arrow-container').fadeOut();
  }
});

// JQuery Scroll with Scroll To Top
$("#arrow-container").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});

// Slick - JQuery plugin
$("#logo-sponsors").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  arrows: false,
  dots: false
});

// Burger menu
var burger = document.getElementById("nav-close-container");
burger.addEventListener("click", () => {
  document.getElementById("nav-close").classList.toggle("cross");
  document.getElementById("navbar-container").classList.toggle("nav-active");
});

// About me
let aboutMeExit = document.getElementById("about-me-close");
aboutMeExit.addEventListener("click", removeAboutMe);
let aboutMeModalRemoved = true;
function removeAboutMe() {
  document.getElementById("about-me-container").style.display = "none";
  aboutMeModalRemoved = true;
  clearInterval(quoteGeneratorInterval);
}
var aboutMeModal = document.querySelectorAll(".about-me-link");
aboutMeModal.forEach(item => item.addEventListener("click", () => {
  document.getElementById("about-me-container").style.display = "block";
  console.log(1);
  if (aboutMeModalRemoved) {
    aboutMeModalRemoved = false;
    quoteGeneratorInterval = setInterval(quoteGenerator, 2000);
  }
}));

// Quote list 
var quoteList = [
  {
    quote: '"Knowledge is power."',
    author: "Francis Bacon",
  },
  {
    quote: '"First, solve the problem. Then, write the code."',
    author: "John Johnson",
  },
  {
    quote: '"Code is like humor. When you have to explain it, it’s bad."',
    author: "Cory House",
  },
  {
    quote: '"Talk is cheap. Show me the code."',
    author: "Linus Torvalds",
  },
  {
    quote: '"If you don’t love it, you’re going to fail."',
    author: "Steve Jobs",
  },
  {
    quote: '"Before software can be reusable it first has to be usable."',
    author: "Ralph Johnson",
  },
];
// Quote generator
var random1;
var random2;

function quoteGenerator() {
  if (!aboutMeModalRemoved) {
    random1 = Math.floor(Math.random() * quoteList.length);
    while (random1 == random2) {
      random1 = Math.floor(Math.random() * quoteList.length);
    }
    document.getElementById("quote").innerHTML = quoteList[random1].quote;
    document.getElementById("author").innerHTML = quoteList[random1].author;
    random2 = random1;
  } else {
    clearInterval(quoteGeneratorInterval);
  }
}

// Contact form
let contactSubmit = document.getElementById("contact-submit");
contactSubmit.addEventListener("click", () => {
  let regularFullName = /^[A-ZČĆŽĐŠ][a-zćčžđš]{1,14}\s([A-ZČĆŽĐŠ][a-zćčžđš]{1,14})?\s?[A-ZČĆŽŠĐ][a-zćčžđš]{1,19}$/;
  let fullNameField = document.getElementById("fullName");
  let fullNameFieldValue = fullNameField.value;
  if (regularFullName.test(fullNameFieldValue)) {
    fullNameField.nextElementSibling.innerHTML = "";
    fullNameField.nextElementSibling.setAttribute("class", "good-form-element");
  } else {
    fullNameField.nextElementSibling.innerHTML = "Full Name is not as expected";
    fullNameField.nextElementSibling.setAttribute("class", "bad-form-element");
  }
  let regularMail = /^[a-zA-Z0-9]([a-z]|[0-9])+\.?-?_?([a-z]|[0-9])*\.?([a-z]|[0-9])*\@[a-z]{3,}\.([a-z]{2,4}\.)?([a-z]{2,4})$/g;
  let mailField = document.getElementById("email");
  let mailFieldFieldValue = mailField.value;
  if (regularMail.test(mailFieldFieldValue)) {
    mailField.nextElementSibling.innerHTML = "";
    mailField.nextElementSibling.setAttribute("class", "good-form-element");
  } else {
    mailField.nextElementSibling.innerHTML = "E-mail is not as expected!";
    mailField.nextElementSibling.setAttribute("class", "bad-form-element");
  }
  let course = document.getElementById("courseChose");
  if (course.value == "blank") {
    course.nextElementSibling.innerHTML = "Chose your course!";
    course.nextElementSibling.setAttribute("class", "bad-form-element");
  } else {
    course.nextElementSibling.innerHTML = "";
    course.nextElementSibling.setAttribute("class", "good-form-element");
  }
  let messageBox = document.getElementById("message");
  if (messageBox.value.length > 450) {
    messageBox.nextElementSibling.innerHTML = "Message can't be longer than 450 characters!";
    messageBox.nextElementSibling.setAttribute("class", "bad-form-element");
  } else if (messageBox.value == "" || messageBox.value == null || messageBox.value.length == 0) {
    messageBox.nextElementSibling.innerHTML = "Message can't be empty!";
    messageBox.nextElementSibling.setAttribute("class", "bad-form-element");
  } else {
    messageBox.nextElementSibling.innerHTML = "";
    messageBox.nextElementSibling.setAttribute("class", "good-form-element");
  }
});

// Courses list
let categoryList = document.getElementById("category-list");
const categoryItems = [
  {
    dataFilter: 'web',
    itemName: "Web programming Basic",
    itemDescription: "This is a basic web programming course. In this course, you will learn technologies like HTML, CSS, JS.",
    imgItem: 'assets/img/code.jpg',
    altItem: 'code',
    itemPrice: '150'
  },
  {
    dataFilter: 'design',
    itemName: "Graphic Design Basic",
    itemDescription: "This is a basic graphic design course. In this course, you will learn essential graphic design principles and basics in Photoshop and Illustrator.",
    imgItem: 'assets/img/graphic-design-desk.jpg',
    altItem: 'code2',
    itemPrice: '110'
  },
  {
    dataFilter: 'video',
    itemName: "Video Production Basic",
    itemDescription: "This is a basic video production course. In this course, you will learn essential video production principles and basic video editing in Premiere Pro.",
    imgItem: 'assets/img/video-production-desk.jpg',
    altItem: 'code3',
    itemPrice: '130'
  },
  {
    dataFilter: 'web',
    itemName: "Web programming Advance",
    itemDescription: "This is advanced web programming course. On this course you will learn advanced technologies like JS, Node.JS, MySQL.",
    imgItem: 'assets/img/web-developer-desktop-with-laptop.jpg',
    altItem: 'code2',
    itemPrice: '350'
  },
  {
    dataFilter: 'design',
    itemName: "Graphic Design Advanced",
    itemDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero explicabo cum quibusdam ipsum eligendi ex.",
    imgItem: 'assets/img/graphic-designer-sketch-design-logo.jpg',
    altItem: 'code2',
    itemPrice: '270'
  },
  {
    dataFilter: 'video',
    itemName: "Video Production Advanced",
    itemDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero explicabo cum quibusdam ipsum eligendi ex.",
    imgItem: 'assets/img/laptop-showing-typesetting-software-graphic-designer-workspace.jpg',
    altItem: 'code2',
    itemPrice: '290'
  }
];

// Course items
for (let x of categoryItems) {
  let categoryInfoBox = document.createElement("div");
  categoryInfoBox.setAttribute("data-filter", x.dataFilter);
  categoryInfoBox.setAttribute("class", "category-info-box");
  categoryList.appendChild(categoryInfoBox);
  let imgDiv = document.createElement("div");
  imgDiv.setAttribute("class", "img-div");
  let imgSrc = document.createElement("img");
  imgDiv.appendChild(imgSrc);
  imgSrc.setAttribute("src", x.imgItem);
  imgSrc.setAttribute("alt", x.altItem);
  let imgP = document.createElement("p");
  let imgPText = document.createTextNode(x.itemName);
  imgP.appendChild(imgPText);
  imgDiv.appendChild(imgP);
  let categoryInfo = document.createElement("div");
  categoryInfo.setAttribute("class", "category-info-text");
  let courseName = document.createElement("p");
  let courseNameText = document.createTextNode(x.itemName);
  courseName.appendChild(courseNameText);
  categoryInfo.appendChild(courseName);
  let courseDescription = document.createElement("p");
  let courseDescriptionText = document.createTextNode(x.itemDescription);
  courseDescription.appendChild(courseDescriptionText);
  categoryInfo.appendChild(courseDescription);
  let priceContainer = document.createElement("p");
  priceContainer.setAttribute("class", "price-text");
  let priceContainerText = document.createTextNode("Price: ");
  priceContainer.appendChild(priceContainerText);
  let priceSpan = document.createElement("span");
  priceSpan.setAttribute("class", "price");
  let priceSpanContent = document.createTextNode(x.itemPrice);
  priceSpan.appendChild(priceSpanContent);
  priceContainer.appendChild(priceSpan);
  let priceCurency = document.createTextNode("$");
  priceContainer.appendChild(priceCurency);
  let courseAButton = document.createElement("a");
  courseAButton.setAttribute("href", "#contact");
  courseAButton.setAttribute("class", "buy-now");
  let courseAButtonText = document.createTextNode("Buy");
  courseAButton.appendChild(courseAButtonText);
  categoryInfo.appendChild(priceContainer);
  priceContainer.appendChild(courseAButton);
  categoryInfoBox.appendChild(imgDiv);
  categoryInfoBox.appendChild(categoryInfo);
}

// Filter course

const filterList = document.querySelectorAll(".filter-list");
const filterItems = document.querySelectorAll(".category-info-box");
var temp = filterList[0];
for (let list of filterList) {
  list.addEventListener('click', () => {
    if (list.dataset.filter == 'all') {
      temp.classList.remove("filter-list-active");
      list.classList.add("filter-list-active");
      temp = list;
      for (let i of filterItems) {
        i.style.display = "block";
      }
    } else if (list.dataset.filter == 'web') {
      temp.classList.remove("filter-list-active");
      list.classList.add("filter-list-active");
      temp = list;
      for (let i of filterItems) {
        i.style.display = "none";
        if (i.dataset.filter == 'web') {
          i.style.display = "block";
        }
      }
    } else if (list.dataset.filter == 'design') {
      temp.classList.remove("filter-list-active");
      list.classList.add("filter-list-active");
      temp = list;
      for (let i of filterItems) {
        i.style.display = "none";
        if (i.dataset.filter == 'design') {
          i.style.display = "block";
        }
      }
    } else if (list.dataset.filter == 'video') {
      temp.classList.remove("filter-list-active");
      list.classList.add("filter-list-active");
      temp = list;
      for (let i of filterItems) {
        i.style.display = "none";
        if (i.dataset.filter == 'video') {
          i.style.display = "block";
        }
      }
    }
  });
}

// Discount
const countDiscountTimer = new Date("Feb 31, 2022 11:38:59").getTime();
const currentDate = new Date().getTime();
const discountTimer = () => {
  const currentDate = new Date().getTime();
  const gap = countDiscountTimer - currentDate;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const daysLeft = Math.floor(gap / day);
  const hoursLeft = Math.floor((gap % day) / hour);
  const minutesLeft = Math.floor((gap % hour) / minute);
  const secondsLeft = Math.floor((gap % minute) / second);
  if (currentDate < countDiscountTimer) {
    document.querySelector("#timer").innerText = `${daysLeft}d ${hoursLeft}:${minutesLeft}:${secondsLeft}`;
  } else {
    clearInterval(discountInterval);
    discountBar.remove();
    for (let itemNumber in categoryItems) {
      priceOld[itemNumber].innerHTML = categoryItems[itemNumber].itemPrice;
    }
  }
};
if (currentDate < countDiscountTimer) {
  var discountBar = document.getElementById("sale");
  let discountContentText = document.createElement("p");
  discountContentText.setAttribute("class", "sale-text");
  let discountContentTextP = document.createTextNode("Get courses for 30% off for a limited time | A special offer for new students Ends in ");
  discountContentText.appendChild(discountContentTextP);
  discountBar.appendChild(discountContentText);
  let timerSpan = document.createElement("span");
  timerSpan.setAttribute("id", "timer");
  discountContentText.appendChild(timerSpan);
  var priceOld = document.querySelectorAll(".price");
  for (let price of priceOld) {
    let priceNew = price.innerText - price.innerText * 0.3;
    price.innerHTML = priceNew;
  }
  var discountInterval = setInterval(discountTimer, 1000);
}

// Footer links
let footerSocialLinks = ["https://www.facebook.com", "https://www.instagram.com", "https://www.linkedin.com"];
let footerSocialIcons = ["fab fa-facebook-square", "fab fa-instagram-square", "fab fa-linkedin"];
let footerLinks = ["robots.txt", "rss.xml", "sitemap.xml", "/assets/doc/nikolatimotic-documentation.pdf"];
let footerLinksName = ["Robots", "RSS", "Sitemap", "Documentation"];

// Footer
let footerWrapper = document.createElement("div");
footerWrapper.setAttribute("class", "wrapper");
let footerUp = document.createElement("div");
footerUp.setAttribute("id", "footer-up");
let footerSocial = document.createElement("div");
footerSocial.setAttribute("id", "footer-social");
let footerSocialP = document.createElement("p");
let footerSocialPContent = document.createTextNode("Social");
footerSocialP.appendChild(footerSocialPContent);
footerSocial.appendChild(footerSocialP);
let footerSocialUl = document.createElement("ul");
for (const number in footerSocialLinks) {
  let footerSocialLiTemp = document.createElement("li");
  let footerSocialLiATemp = document.createElement("a");
  let footerSocialLiAITemp = document.createElement("i");
  footerSocialLiATemp.setAttribute("href", footerSocialLinks[number]);
  footerSocialLiAITemp.setAttribute("class", footerSocialIcons[number]);
  footerSocialLiATemp.appendChild(footerSocialLiAITemp);
  footerSocialLiTemp.appendChild(footerSocialLiATemp)
  footerSocialUl.appendChild(footerSocialLiTemp);
}
footerSocial.appendChild(footerSocialUl);
footerUp.appendChild(footerSocial);
let footerNavigation = document.createElement("div");
footerNavigation.setAttribute("id", "footer-navigation");
let footerNavigationP = document.createElement("p");
let footerNavigationPContent = document.createTextNode("Navigation");
footerNavigationP.appendChild(footerNavigationPContent);
footerNavigation.appendChild(footerNavigationP);
let footerNavigationUl = document.createElement("ul");
createLinks(navLinks, navNames, footerNavigationUl);
footerNavigation.appendChild(footerNavigationUl);
footerUp.appendChild(footerNavigation);
footerWrapper.appendChild(footerUp);
let footerLink = document.createElement("div");
footerLink.setAttribute("id", "footer-link");
let footerLinkP = document.createElement("p");
let footerLinkPContent = document.createTextNode("Links");
footerLinkP.appendChild(footerLinkPContent);
footerLink.appendChild(footerLinkP);
let footerLinkUl = document.createElement("ul");
createLinks(footerLinks, footerLinksName, footerLinkUl);
footerLink.appendChild(footerLinkUl);
footerUp.appendChild(footerLink);
let footerDown = document.createElement("div");
footerDown.setAttribute("id", "footer-down");
let footerP = document.createElement("p");
let footerPContent = document.createTextNode("© Copyright 2022");
footerP.appendChild(footerPContent);
footerDown.appendChild(footerP);
footerWrapper.appendChild(footerDown);
document.getElementById("footer").appendChild(footerWrapper);