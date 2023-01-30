//Business Logic
export default function Entry(title, entry) {
  this.title = title;
  this.entry = entry;
  this.title = this.title.toLowerCase();
  this.entry = this.entry.toLowerCase();
}

Entry.prototype.vowels = function () {
  const countVowels1 = this.title.match(/[aeiou]/gi).length;
  const countVowels2 = this.entry.match(/[aeiou]/gi).length;
  let countVowel = countVowels1 + countVowels2;
  return countVowel;
};

Entry.prototype.consonants = function () {
  const countConsonants1 = this.title.match(/(?![aeiou])[a-z]/gi).length;
  const countConsonants2 = this.entry.match(/(?![aeiou])[a-z]/gi).length;
  let countConsonants = countConsonants1 + countConsonants2;
  return countConsonants;
};

Entry.prototype.short = function () {
  const shortPreview = this.entry.split(/\s+/).slice(0, 8).join(" ");
  return shortPreview;
};


