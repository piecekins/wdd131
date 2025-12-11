const mainImages = [
    'images/smoker_door_night.png',
    'images/night_smoker.jpg',
    'images/smoker_side_night.png',
    'images/inside_fire.jpg'
]
const childImages = [
    'images/box_body.jpg',
    'images/box_part.jpg',
    'images/chimney_part.png',
    'images/door_part.jpg'
]


function SlideShow(array){
    // AI helped with how to just change the src I was deleting it and creating it over and
    // over and it was broken, it also showed me the setTimeout and how to use the index with it
    //also reminded me about the forEach
    const slide = document.querySelector(".slideshow")
    array.forEach((element, index) => {

        setTimeout(() => {
        slide.src = element;
        //console.log(slide)
        },index * 5000); // 5000 milliseconds = 5 seconds
        
    });
    
}


    


let dialog = document.querySelector(".viewer");
const gallery = document.querySelector(".slideshow");


function galleryhandler(event){
    const img = document.querySelector(".slideshow")

    //console.log(img)
    img.classList.toggle("slideshow");
    img.classList.toggle("images");
    //dialog.innerHTML = `<img src="`+img+`" alt="picture"><button class="close-viewer">X</button>` 
    dialog.innerHTML = `${img.outerHTML}` + `<button class="close-viewer">X</button>`

    //console.log(dialog.innerHTML)
    dialog.showModal();
    img.classList.toggle("slideshow");
    img.classList.toggle("images");

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
function handlerResize(){
    if (window.innerWidth > 1000){
        menu.classList.remove("hide");
    }
    else{
        menu.classList.add("hide");
    }
}

function highlighter(){
    const slide = document.querySelector(".slideshow")
    let array = document.querySelectorAll(".part")
    let truearray = Array.from(array)
    truearray.forEach(element => {
        element.classList.remove("highlighted")
    });

    //console.log("hightighed body")
    //console.log(slide.getAttribute("src"))

    if (slide.getAttribute("src") === "images/box_body.jpg"){
        const part = document.getElementById("body")
        part.classList.add("highlighted")
    }

    else if (slide.getAttribute("src") === 'images/box_part.jpg'){
        const part = document.getElementById("box")
        part.classList.add("highlighted")
    }

    else if (slide.getAttribute("src") === 'images/chimney_part.png'){
        const part = document.getElementById("chimney")
        part.classList.add("highlighted")
    }

    else if (slide.getAttribute("src") === 'images/door_part.jpg'){
        const part = document.getElementById("door")
        part.classList.add("highlighted")
    }
}



if (document.body.id === "homepage"){
    SlideShow(mainImages);
    setInterval(() => {
    SlideShow(mainImages);
    }, 20000); // AI showed me setInterval

    gallery.addEventListener("click", galleryhandler);
}

if (document.body.id === "childpage"){

    SlideShow(childImages);
    setInterval(() => {
    SlideShow(childImages);
    }, 20000); // AI showed me setInterval

    gallery.addEventListener("click", highlighter);
}