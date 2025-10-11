handlerResize
let dialog = document.getElementById("viewer");
const buttionElement = document.getElementById("menu");
const menu = document.getElementById("menuItems");
const gallery = document.querySelector(".gallery");




let isVisible = true


function hide(){
    isVisible = !isVisible
    if (isVisible){
        menu.classList.add("hide");
    }

    else{
        menu.classList.remove("hide");
    }
}

function handlerResize(){
    if (window.innerWidth > 1000){
        menu.classList.remove("hide");
    }
    else{
        menu.classList.add("hide");
    }
}

function galleryhandler(event){
    img = event.target.closest("img")

     //img = img.src.split("-")[0]+ "-Full.jpeg";
     //console.log(img)
     
    //dialog.innerHTML = `<img src="`+img+`" alt="picture"><button class="close-viewer">X</button>` 
    dialog.innerHTML = viewerTemplate(img)
    dialog.showModal();


}

function viewerTemplate(img){
    img = img.src.split("-")[0]+ "-Full.jpeg";
    return template = `<img src="`+img+`" alt="picture">
    <button class="close-viewer">X</button>` 

}


// From the Cool Pics - part 2 assignment so I typed it out but did not write it, Okay I did end up writing some of this the stuff for the buttion
dialog.addEventListener("click", (event) => {
    const buttion = document.querySelector(".close-viewer")
    if (event.target === dialog) {
        dialog.close();
    }
    else if (event.target === buttion) {
        dialog.close();
    }
})



gallery.addEventListener("click", galleryhandler);
buttionElement.addEventListener("click",hide);
window.addEventListener("resize", handlerResize);

