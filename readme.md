# Journal by Asia Kaplanyan and Carl Sustrich

## Technologies Used

* _HTML_
* _CSS_
* JavaScript

## Description

_Practice webpacks. This webpage takes user's input for Journal, counts vowels and consonants and outputs first 8 words of the entry._


## Setup/Installation Requirements

* _You need a web browser_


## Known Bugs

* _No known bugs_


## License

_If you run into a problem or in case you have any ideas or concerns please contact me._

Copyright (c) _01/30/2023_ _Asia Kaplanyan and Carl Sustich_

## Tests

Describe: Entry()

Test: "It should return an Entry object with two properties for title and entry"
Code: let newEntry = new Entry(title, entry);
Expected Output: Entry {title: "title", entry: "entry"}



Describe: Entry.prototype.vowels()

Test: "It should return a number of vowels in a title and entry combined"
Code: document.getElementById("vowels").innerText = newEntry.vowels();
Expected Output: number of vowels

Describe: Entry.prototype.consonants()

Test: "It should return a number of consonants in a title and entry combined"
Code: document.getElementById("consonants").innerText = newEntry.consonants();
Expected Output: number of consonants

Describe: Entry.prototype.short()

Test: "It should return first eight words of the entry"
Code: document.getElementById("short").innerText = newEntry.short();
Expected Output: first eight words of the entry

