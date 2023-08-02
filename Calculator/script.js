//selector
const output = document.querySelector(".output");
const result = document.querySelector(".result"); //here we use dot(.) symbol beacuse it is a class
const keys = document.querySelectorAll("button");

//eventlistener
keys.forEach((key) => {
  key.addEventListener("click", calcualte);
});
function calcualte() {
  let buttonText = this.innerText;
  if (buttonText === "C") {
    output.innerText = "";
    result.innerText = "0";
    result.style.animation = "";
    output.style.animation = "";
    return;
  }

  if (buttonText === "DEL") {
    output.textContent = output.textContent.slice(0, -1);
    return;
  }
  if (buttonText === "=") {
    result.innerText = eval(output.innerText);
    result.style.animation = "big 0.5s ease-in-out";
    output.style.animation = "small 0.5s ease-in-out";
    result.style.animationFillMode = "forwards";
    output.style.animationFillMode = "forwards";
  } else {
    output.textContent += buttonText;
    return;
  }
}


