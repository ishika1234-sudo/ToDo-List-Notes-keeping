console.log("WELCOME");
showNotes();

//if user adds a note, add it to local storage

let addBtn = document.getElementById('addButton');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addText");
    let notes = localStorage.getItem("notes"); //to get any notes that's been stored to local storage
    if (notes == null) { //notesobj is an array
        notesObj = []
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value)
    localStorage.setItem("notes", JSON.stringify(notesObj)); //to update the local storage after pushing
    addTxt = ""; //to clear the feild everytime you add a note and submit
    console.log(notesObj);
    showNotes();
})

//function to show elements from local storage
function showNotes() {
    let notes = localStorage.getItem("notes"); //to get any notes that's been stored to local storage
    if (notes == null) { //notesobj is an array
        notesObj = []
    } else {
        notesObj = JSON.parse(notes)
    }
    let htmll = "";
    notesObj.forEach(function (element, index) {
        htmll += `<div class="cardNote my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">note ${index +1}</h5>
                <p class="card-text">${element + 1}</p>
                <button id=${index} onclick="deleteNote(this.id)" href="#" class="btn btn-primary">delete</button>
                </div>
                </div>`

    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != null) {
        notesElm.innerHTML = htmll;
    } else {
        notesElm.innerHTML = `Nothing to show to you , please use the "add note" section above`;
    }
}

//fucntion to dlete notes
function deleteNote(index) {
    console.log('i am deleting note', index);
    let notes = localStorage.getItem("notes"); //to get any notes that's been stored to local storage
    if (notes == null) { //notesobj is an array
        notesObj = []
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj)); //to update the local storage after pushing
    showNotes();


}

let search = document.getElementById('searchTxt');

search.addEventListener('input', function () {
    let inputVal = search.value.toLowerCase();
    console.log('INPUT EEVNT FIRED', inputVal);
    let noteCards = document.getElementsByClassName('cardNote');

    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText; //innertext is done to make cardtxt eleemtn a string;
        console.log("ENTERED HERE");
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
        console.log(cardTxt);
    })
})