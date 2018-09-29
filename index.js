/* Enter the code to remove the main node element under this comment */
// body.removeChild(body.querySelector('#main'));
const testVar = "hi"
document.querySelector("main#main").remove();
/* Create your new element here and assign it to newHeader */
// const newHeader = null;
// document.body.appendChild(h1)
// document.createElement(h1)
// var h = document.createElement ("H1") (id='victory');
// var t = document.createTextNode ("Emily is the champion");
// h.appendChild(t);
// document.body.appendChild(h);

const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerText = "Emily is the champion!";
newHeader.className = "victory";