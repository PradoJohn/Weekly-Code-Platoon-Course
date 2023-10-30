

<!-- To get specific tag -->

document.body.children[0].children[0].src

inspect console in web
<!-- Using getElementById -->

header = document.getElementById("<id>")

console.log(header.innerText)

header.innerText = "Text here"


<!-- CreateElement -->

parent = document.getElementById("<parent>")

h2 = document.CreateElement("h2")
parent.appendChild(h2)

<!-- Forms -->


const favoriteColor = (even) =>{

  const formData = Object.formEntries(new FormData(event.target))
}



