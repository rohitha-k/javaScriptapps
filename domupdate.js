//to uptate dom-document object model
document.getElementById("info").innerHTML = "An ISO 9001:2015 Certified";
document.getElementById("demo").style.color = "red";
const text = document.createElement("h2");
text.innerText = "welcome to CSE";
document.body.appendChild(text);
document.getElementById("info").setAttribute("class", "democlass");
