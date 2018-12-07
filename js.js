
function stringLength(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    console.log(longestWord[0]);

}

stringLength('Entry Level Web Development Careers');