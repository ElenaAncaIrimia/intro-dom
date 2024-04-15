let projectContainer = document.querySelector(".projectContainer");
let imageURLFromLocalStorage = localStorage.getItem("imageURL");

if (imageURLFromLocalStorage) {
    projectContainer.innerHTML += `<div class='redSquare'><img src='${imageURLFromLocalStorage}'></div>`
}

function change() {
    let imageURLFromInput = document.querySelector(".form-image").value;
    console.log(imageURLFromInput);
    localStorage.setItem("imageURL", imageURLFromInput);
    
    projectContainer.innerHTML += `<div class='redSquare'><img src='${imageURLFromLocalStorage}'></div>`
}