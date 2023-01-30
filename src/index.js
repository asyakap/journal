import Entry from './entry.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

//User Interface Logic

function handleFormSubmission(event) {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let entry = document.getElementById("body").value;
  let newEntry = new Entry(title, entry);
  document.getElementById("vowels").innerText = newEntry.vowels();
  document.getElementById("consonants").innerText = newEntry.consonants();
  document.getElementById("short").innerText = newEntry.short();
}


window.addEventListener("load", function () {
  document.querySelector("form#new-entry").addEventListener("submit", handleFormSubmission);
});

