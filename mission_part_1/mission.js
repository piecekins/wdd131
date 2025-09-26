
const themeSelector = document.querySelector("#lightTheme")
const body = document.querySelector("body")
const newImage = document.querySelector("img")



function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
const theme = themeSelector.value
console.log(theme)

if (theme == "dark") {
    
    body.classList.add("dark");
    newImage.setAttribute("src", "mission_dirctory/byui-logo_white.png");
}

else {
    body.classList.remove("dark");
    newImage.setAttribute("src", "mission_dirctory/byui-logo_blue.webp");

}

// if the value is dark then:
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);