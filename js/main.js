const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

let imgContainer = document.querySelector(".my-carousel-images");
let thumbContainer = document.querySelector(".my-thumbnails")
images.forEach((curObj) => {
  console.log(curObj.image);
  imgContainer.innerHTML +=
    `
  <div class="my-carousel-item" carousel-item="1">
                  <img
                    class="img-fluid"
                    src="./${curObj.image}"
                    alt=${curObj.text + "picture"}
                  />
                  <div class="item-description px-3">
                    <h2>Marvel's Spiderman Miles Morale</h2>
                    <p>
                    ${curObj.text}
                    </p>
                  </div>
                </div>
`
// THUMBNAILS

thumbContainer.innerHTML += 
`<img
class="img-fluid my-thumbnail"
src="./${curObj.image}"
alt="${curObj.text + "picture"}"
/>`
})

// control to check if the order must be forward or backwards
let orderFlag = false;

  // ORDER BUTTON
  let orderBtn = document.getElementById("my-order-button").addEventListener("click", myOrder)
  function myOrder() {
    if (orderFlag === false) {
      orderFlag = true;
    } else {
      orderFlag = false;
    }
    console.log(orderFlag);
  }

  let nextBtn;
  let prevBtn;

if (orderFlag === false) {
  nextBtn = document.getElementById("next_btn").addEventListener("click", nextObj);
  prevBtn = document.getElementById("previous_btn").addEventListener("click", prevObj);
} else if (orderFlag === true) {
  nextBtn = document.getElementById("next_btn").addEventListener("click", prevObj);
  prevBtn = document.getElementById("previous_btn").addEventListener("click", nextObj);
}
// select every DOM obj already created
const allCards = document.querySelectorAll(".my-carousel-item");
// select every DOM obj thumb already created
const allThumbs = document.querySelectorAll(".my-thumbnail")
// variable to set the index value of active img
let activeImg = 0;
// variable to set the index value of active thumbnail
let activeThumb = 0;
// add the class active when the index is 0
allCards[activeImg].classList.add("active")
allThumbs[activeThumb].classList.add("active")



/**
 * remove the active class from the first element, and add to the next index
 */
function nextObj() {
  allCards[activeImg].classList.remove("active");
  allThumbs[activeThumb].classList.remove("active")
  if (activeImg < images.length - 1) {
  activeImg++;
  activeThumb++;
  } else {
    activeImg = 0;
  activeThumb = 0;
  }
  allCards[activeImg].classList.add("active");
  allThumbs[activeThumb].classList.add("active")
}

function prevObj() {
  allCards[activeImg].classList.remove("active")
  allThumbs[activeThumb].classList.remove("active")
  if (activeImg < images.length && activeImg !== 0) {
    activeImg--;
    activeThumb--;
  } else if (activeImg <= 0) {
    activeImg = images.length -1;
    activeThumb = images.length -1;
  }
  allCards[activeImg].classList.add("active");
  allThumbs[activeThumb].classList.add("active");
}

// START STOP 
let time;
let flag = false;
// btn to start-pause autoplay
const playPauseBtn = document.getElementById("my-stop-button").addEventListener("click", playPause)
function playPause() {
  if (flag === false) {
    time = setInterval(nextObj,1000);
    flag = true;
    console.log(time);  
  } else {
    clearInterval(time);
    flag = false;
    console.log(time);  
  }
  } 
