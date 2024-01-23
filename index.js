// 1
const p1 = document.createElement("p")
p1.innerText = "Eat dinner"
document.getElementsByClassName("list")[0].appendChild(p1)

/**
 * Get the bucket list by using the class name,
 * then appendChild it which adds it last.
 */

// 2
const p2 = document.createElement("p")
p2.innerText = "Shower in water"
p1.insertAdjacentElement("afterend", p2)

/**
 * beforeend and afterend seems to work
 * but beforeend puts it inside
 */

// 1
// console.log(document.getElementsByClassName("list")[0].innerHTML)

// 2
const newHTML = "<p>Add stuff to bucket list</p>"

// 1
// document.getElementsByClassName("list")[0].innerHTML = newHTML

/**
 * Elements are replaced.
 */

// 2
// document.getElementsByClassName("list")[0].innerHTML += newHTML
// works

document.getElementsByClassName("list")[0].insertAdjacentHTML("beforeend", newHTML)
// but this is probably the intended solution

// 3
const tasks = ["Swim", "Exercise", "Sleep"]

for (task of tasks) {
    element = document.createElement("p")
    element.innerText = task
    document.getElementsByClassName("list")[0].insertAdjacentElement("beforeend", element)
}

// 4
console.log(document.getElementsByClassName("list")[0].children.length)

// 5
document.getElementsByTagName("h2")[0].innerText = "Marcus' Bucket List"

// 6
const list = document.getElementsByClassName("list")[0]
const newNode = document.createElement("p")
newNode.innerText = "Do something new"
// list.replaceChild(newNode, list.firstChild)
list.children[0].replaceWith(newNode)

// 7
const newNode2 = document.createElement("p")
newNode2.innerText = "Do something new again"
list.children[Math.round(list.children.length/2) - 1].replaceWith(newNode2)

// 8
list.removeChild(list.lastChild)