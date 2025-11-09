

function participantTemplate(count){

        par = par+1
        count = count+1
        
        const part = document.querySelector(".participant1");
        let participant = part.cloneNode(true);
        
        participant.class = "partcipant" + count;

        let p = participant.querySelector("p");
        p.innerHTML = `Participant ${count}`
        

        let el = participant.querySelector("#fname");
        let label = participant.querySelector("label[for='fname']");
        el.id = "fname" + count;
        label.setAttribute("for", "fname" + count);

        el = participant.querySelector("#activity");
        label = participant.querySelector("label[for='activity']");
        el.id = "activity" + count;
        label.setAttribute("for", "activity" + count);

        el = participant.querySelector("#fee");
        label = participant.querySelector("label[for='fee']");
        el.id = "fee" + count;
        label.setAttribute("for", "fee" + count);

        el = participant.querySelector("#date");
        label = participant.querySelector("label[for='date']");
        el.id = "date" + count;
        label.setAttribute("for", "date" + count);


        
        
        add.insertAdjacentHTML("beforebegin", participant.outerHTML)
        if (par == 2){ 
                const style = document.createElement("style");

                        style.textContent =   `@media (min-width: 1000px) {
                .participants{
                display: grid;
                grid-template-columns: 1fr 1fr;

                }
                .participant1{
                display: block;
                }
                #add{
                grid-column: 1/3;
                }`

                document.head.appendChild(style);
        }
}
const main = document.querySelector(".participants")
const add = document.querySelector("button")
const form = document.querySelector("form")



let par = 1
form.addEventListener("submit", submitForm)

add.addEventListener("click", () => {
  participantTemplate(par);
})


function submitForm(event) {
 event.preventDefault();
 // do the rest of the stuff
        const name = document.getElementById("adult_name");
        
        const info = [name.value, totalFees(), par]
        
        document.querySelector("form").style.display = "none";
        
        successTemplate(info)
        
 }

function successTemplate(info){
        const summary = document.getElementById("summary")
        summary.outerHTML = '<section id="summary">Thank you ' + info[0] + ' for registering. You have registered ' + info[2] + ' participants and owe $' +info[1]+ " in Fees.</section>"

        document.querySelector(".testbox").append(summary)

}

function totalFees() {
// the selector below lets us grab any element that has an id that begins with "fee"
let feeElements = document.querySelectorAll("[id^=fee]");

// querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
// The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
// The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
feeElements = [...feeElements];
// sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
// Remember that the text that was entered into the input element will be found in the .value of the element.

let total = 0
feeElements.forEach(element => {
        total = total + parseInt(element.value);
        
});

// once you have your total make sure to return it!
return total;


}




