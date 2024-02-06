const body = document.body
body.append("hi")
const div = document.createElement("div")
body.append(div)
const button = document.createElement("button")
button.append("hello tanu")
body.append(button)
const strong = document.createElement("strong")
strong.innerText = "love you tanu"
body.append(strong)


const spanHi = document.querySelector("#hi")
spanHi.setAttribute("id","shi")
console.log(spanHi.getAttribute("id"));

const btn = document.querySelector("#sub_btn")
btn.remove()

var p = document.querySelector(".para")
p.innerHTML = "My love"
body.append(p)

