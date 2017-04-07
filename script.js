var text = "Nazar ";
var test = "Lorem ipsum dolor sit amet";
var newArray = [];
function addToArray(word) {
    var charSeperetor = [];
    var joinWord;
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) === " " || i === word.length - 1) {
            if (i === word.length - 1) {
                charSeperetor.push(word.charAt(i));
            }
            joinWord = charSeperetor.join("");
            newArray.push(joinWord);
            charSeperetor = [];
            continue;
        }
        charSeperetor.push(word.charAt(i));
    }
    return newArray;
}
addToArray(test);
document.write(newArray.length);
