// let logoClicks = 0;
// const logo = document.getElementById("logo");
// const secretLink = document.getElementById("secretLink");

// logo.addEventListener("click", () => {
//   logoClicks++;
//   if (logoClicks >= 5) {
//     secretLink.style.display = "inline";
//     alert("You found the hidden game!");
//     window.open(secretLink.href, "_blank");
//     logoClicks = 0;
//   }
//   setTimeout(() => logoClicks = 0, 2000); // reset if too slow
// });

let nameClicks = 0;
const nameElement = document.getElementById("secretName");
const secretLink = document.getElementById("secretLink");

nameElement.addEventListener("click", () => {
  nameClicks++;
  if (nameClicks >= 2) {
    secretLink.style.display = "inline";
    alert("You found the hidden game!");
    window.open(secretLink.href, "_blank");
    nameClicks = 0;
  }
  setTimeout(() => nameClicks = 0, 2000); // reset if too slow
});
