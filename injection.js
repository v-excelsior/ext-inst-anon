const target = document.querySelector("body");
const config = { attributes: true };

console.log("Injected");

let checker = function () {
  console.log("Body changed");
};

const observer = new MutationObserver(checker);

observer.observe(target, config);