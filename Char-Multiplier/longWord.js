let text = "heell";

const longText = (phrase, times) => {
 return phrase.replace(/[aeiou]/gi, "$&".repeat(times));
};

console.log(longText(text, 2))
