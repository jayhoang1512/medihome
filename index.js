const leavesContainer = document.getElementById("falling-leaves");
const leafImages = [
  "images/leaf1.png",
  "images/leaf2.png",
  "images/leaf3.png",
  "images/leaf4.png",
  "images/leaf5.png",
];

const maxLeaves = 13;
let currentLeaves = 0;

function createFallingLeaf() {
  if (currentLeaves < maxLeaves) {
    const leaf = document.createElement("div");
    leaf.classList.add("leaf");

    const leafImage = leafImages[Math.floor(Math.random() * leafImages.length)];
    leaf.style.backgroundImage = `url(${leafImage})`;

    const leafSize = Math.random() * 30 + 15;
    leaf.style.width = `${leafSize}px`;
    leaf.style.height = `${leafSize}px`;

    const animationDuration = Math.random() * 5 + 5;
    leaf.style.animationDuration = `${animationDuration}s`;

    const randomTop = Math.random() * -100;
    const randomLeft = Math.random() * 100;
    leaf.style.top = `${randomTop}px`;
    leaf.style.left = `${randomLeft}%`;

    leavesContainer.appendChild(leaf);

    currentLeaves++;

    leaf.addEventListener("animationend", () => {
      leaf.remove();
      currentLeaves--;
    });
  }
}

setInterval(createFallingLeaf, 500);

// show comment
function showInfo(imageId) {
  for (let i = 1; i <= 4; i++) {
    document.getElementById("comment__" + i).style.display = "none";
  }

  const commentId = "comment__" + imageId.slice(-1);
  document.getElementById(commentId).style.display = "block";
}

// auto click comment
document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.querySelector("#demo");
  const carouselInstance = new bootstrap.Carousel(carouselElement, {
    interval: 6000,
  });

  carouselElement.addEventListener("slid.bs.carousel", function () {
    const activeSlide = document.querySelector(".carousel-item.active");
    const imageId = activeSlide.querySelector("img").id;
    const number = imageId.split("__")[1];
    showInfo(number);
  });

  function showInfo(imageId) {
    const number = imageId.split("__")[1];
    const comment = document.querySelector(`#comment__${number} .item-cmt`);

    if (number) {
      // showInfo(number).click();
    }
  }
});
