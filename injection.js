const target = document.querySelector("body");
const config = { attributes: true };

console.log("Injected");

//Deleting starter login banner at the bottom
let loginBanner = document.querySelector(".glyphsSpriteGrey_Close.u-__7")
if(loginBanner) loginBanner.click();


let checker = function () {
  target.style.overflow = "scroll";
  let presentations = document.querySelectorAll("[role=presentation]");
  presentations.forEach((elem) => {
    if (elem.children.length === 2) {
      elem.remove();
    }
  });
};

// document.addEventListener("click", (e) => {
//   console.log(
//     document.querySelectorAll("[role=menuitem]")[0].childNodes[0].innerHTML
//   );
// });

//Закрыть/Закрити/Close

const observer = new MutationObserver(checker);

observer.observe(target, config);
