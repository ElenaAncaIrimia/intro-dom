function change() {
    // your code goes here
    const titleByClassName = document.querySelector(".titleName");
    const titleTextByClass = titleByClassName.textContent;
    const titleTextById = document.querySelector("#titleId").textContent;
    
    
    console.log("Title text by class name:", titleTextByClass);
    console.log (titleTextById);
}
