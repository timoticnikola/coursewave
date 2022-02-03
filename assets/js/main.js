// NavBar

let navLinks = ["#header", "#courses", "#about-us", "#contact", "#about-me"];
let navNames = ["Home", "Courses", "About us", "Contact", "About me"];

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
for (const number in navLinks) {
  let navLiTemp = document.createElement("li");
  let navATemp = document.createElement("a");
  navATemp.setAttribute("href", navLinks[number]);
  if (number == 4) {
    navATemp.setAttribute("class", "about-me-link");
    // navATemp.setAttribute("id", "about-me-link");
  }
  let navATempContent = document.createTextNode(navNames[number]);
  navATemp.appendChild(navATempContent);
  navLiTemp.appendChild(navATemp);
  navbarUlList.appendChild(navLiTemp);
}
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



// JQuery Scroll with Scroll To Top

$(window).scroll(function () {
  if ($(this).scrollTop()) {
    $("#navbar").addClass("sticky-navbar");
    $('#arrow-container').fadeIn();
  } else {
    $("#navbar").removeClass("sticky-navbar");
    $('#arrow-container').fadeOut();
  }
});

$("#arrow-container").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});

// Burger menu
var burger = document.getElementById("nav-close-container");
burger.addEventListener("click", () => {
  document.getElementById("nav-close").classList.toggle("cross");
  document.getElementById("navbar-container").classList.toggle("nav-active");
});

// Promeni
// Ovaj isti kod mozes modifikovati i time ga koristiti i za footer navigaciju

// dodati skrolovanje i active class za određenu poziciju na stranici

// About me

let aboutMeExit = document.getElementById("about-me-close");

aboutMeExit.addEventListener("click", removeAboutMe);
let aboutMeModalRemoved = true;
function removeAboutMe() {
  document.getElementById("about-me-container").style.display = "none";
  aboutMeModalRemoved = true;
  clearInterval(quoteGeneratorInterval);
}
// var aboutMeModal = document.getElementById("about-me-link");
var aboutMeModal = document.querySelectorAll(".about-me-link");
aboutMeModal.forEach(item => item.addEventListener("click", () => {
  document.getElementById("about-me-container").style.display = "block";
  if (aboutMeModalRemoved) {
    aboutMeModalRemoved = false;
    quoteGeneratorInterval = setInterval(quoteGenerator, 2000);
  }
}));
// aboutMeModal.addEventListener("click", () => {
//   document.getElementById("about-me-container").style.display = "block";
//   if (aboutMeModalRemoved) {
//     aboutMeModalRemoved = false;
//     quoteGeneratorInterval = setInterval(quoteGenerator, 2000);
//   }
// });
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

// Contact form

let contactSubmit = document.getElementById("contact-submit");
contactSubmit.addEventListener("click", () => {
  let regularFullName = /^[A-ZČĆŽĐŠ][a-zćčžđš]{1,14}\s([A-ZČĆŽĐŠ][a-zćčžđš]{1,14})?\s?[A-ZČĆŽŠĐ][a-zćčžđš]{1,19}$/;
  let fullNameField = document.getElementById("fullName");
  let fullNameFieldValue = fullNameField.value;
  if (regularFullName.test(fullNameFieldValue)) {
    fullNameField.nextElementSibling.innerHTML = "It's ok!";
    fullNameField.nextElementSibling.setAttribute("class", "good-form-element");
  } else {
    fullNameField.nextElementSibling.innerHTML = "Full Name is not as expected";
    fullNameField.nextElementSibling.setAttribute("class", "bad-form-element");
  }
  let regularMail = /^[a-zA-Z0-9]([a-z]|[0-9])+\.?-?_?([a-z]|[0-9])*\.?([a-z]|[0-9])*\@[a-z]{3,}\.([a-z]{2,4}\.)?([a-z]{2,4})$/g;
  let mailField = document.getElementById("email");
  let mailFieldFieldValue = mailField.value;
  if (regularMail.test(mailFieldFieldValue)) {
    mailField.nextElementSibling.innerHTML = "It's ok!";
    mailField.nextElementSibling.setAttribute("class", "good-form-element");
  } else {
    mailField.nextElementSibling.innerHTML = "E-mail is not as expected!";
    mailField.nextElementSibling.setAttribute("class", "bad-form-element");
  }
  let course = document.getElementById("courseChose");
  if (course.value == "blank") {
    course.nextElementSibling.innerHTML = "Chose your course!";
  } else {
    course.nextElementSibling.innerHTML = "It's ok!";
  }
  let messageBox = document.getElementById("message");
  if (messageBox.value.length > 450) {
    mailField.nextElementSibling.innerHTML = "Text can't be longer than 450 characters!";
  } else if (messageBox.value == "" || messageBox.value == null || messageBox.value.length == 0) {
    mailField.nextElementSibling.innerHTML = "Don't leave this empty!";
  } else {
    mailField.nextElementSibling.innerHTML = "It's ok!";
  }
});

// Courses

let categoryList = document.getElementById("category-list");
const categoryItems = [
  {
    dataFilter: 'web',
    itemName: "Web programming Basic",
    itemDescription: "This is basic web programming course. On this course you will learn technologies like HTML, CSS, JS.",
    imgItem: 'assets/img/code.jpg',
    altItem: 'code',
    itemPrice: '100'
  },
  {
    dataFilter: 'design',
    itemName: "Graphic Design Basic",
    itemDescription: "This is basic graphic design course. On this course you will learn essential graphic design principles and basic in Photoshop and Illustrator.",
    imgItem: 'assets/img/graphic-design-desk.jpg',
    altItem: 'code2',
    itemPrice: '150'
  },
  {
    dataFilter: 'video',
    itemName: "Video Production Basic",
    itemDescription: "This is basic video production course. On this course you will learn essential video production principles and basic video editing in Premiere Pro.",
    imgItem: 'assets/img/video-production-desk.jpg',
    altItem: 'code3',
    itemPrice: '300'
  },
  {
    dataFilter: 'web',
    itemName: "Web programming Advance",
    itemDescription: "This is advanced web programming course. On this course you will learn advanced technologies like JS, Node.JS, MySQL.",
    imgItem: 'assets/img/web-developer-desktop-with-laptop.jpg',
    altItem: 'code2',
    itemPrice: '150'
  },
  {
    dataFilter: 'design',
    itemName: "Graphic Design Advanced",
    itemDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero explicabo cum quibusdam ipsum eligendi ex.",
    imgItem: 'assets/img/graphic-designer-sketch-design-logo.jpg',
    altItem: 'code2',
    itemPrice: '150'
  },
  {
    dataFilter: 'video',
    itemName: "Video Production Advanced",
    itemDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero explicabo cum quibusdam ipsum eligendi ex.",
    imgItem: 'assets/img/laptop-showing-typesetting-software-graphic-designer-workspace.jpg',
    altItem: 'code2',
    itemPrice: '150'
  }
];

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
  // 
  courseAButton.setAttribute("class", "buy-now");
  // 
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

// Add event listener

// var buyNow = document.querySelectorAll(".buy-now");
// console.log(buyNow);
// buyNow.addEventListener("click", () => {
//   console.log(1);
// });

// for (let i = 0; i < buyNow.length; i++) {
//   buyNow[i].addEventListener("click", function () {
//     console.log(buyNow[i]);
//   });
// }

// Problem pravi "pointer-events:none;" 