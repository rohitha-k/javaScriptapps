function btnres() {
  alert("Hiiiii");
}
let btnVal = document.getElementById("demo");
btnVal.addEventListener("click", btnres);
const btnres1 = () => {
  alert("Hello");
};
let btnVal2 = document.getElementById("demo2");
btnVal2.addEventListener("click", btnres1);
//mouseover mouse out logic
let h2Value = document.getElementById("head");
const mouseOverLogic = () => {
  h2Value.style.color = "blue";
};
const mouseOutLogic = () => {
  h2Value.style.color = "";
};
h2Value.addEventListener("mouseover", mouseOverLogic);
h2Value.addEventListener("mouseout", mouseOutLogic);
