

// const replaceImages = () =>{
//   console.log("Clicked")
//     let all_images = document.body.getElementByTagName("img")
//     for (let image of all_images) {
//       image.src = images;
//         }
//     console.log("Replaced")
// }

// scripts.js
// const updateColor = (color) => {
//   let elems = document.getElementsByTagName("div"); // will return *every* div element on the page
//   for (let e of elems) {
//     e.style.color = color;
//   }
// };

function replaceImages() {
    let images = document.body.getElementsByTagName('img');
    for (let i = images.length - 1; i >= 0; i--) {
        let image = images[i];
        if (image.alt) {
            let text = document.createTextNode(image.alt);
            image.parentNode.replaceChild(text, image)
        }
    }
}