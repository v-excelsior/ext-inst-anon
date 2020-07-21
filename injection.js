const target = document.querySelector("body");
const config = { attributes: true };

console.log("Injected");

let checker = function () {
  target.style.overflow = "scroll";
  let presentations = document.querySelectorAll("[role=presentation]");
  presentations.forEach((elem) => {
    console.log("x", elem.children);
    if (elem.children.length === 2) {
      elem.remove();
    }
  });
};

document.addEventListener("click", (e) => {
  console.log(
    document.querySelectorAll("[role=menuitem]")[0].childNodes[0].innerHTML
  );
});

const observer = new MutationObserver(checker);

observer.observe(target, config);
