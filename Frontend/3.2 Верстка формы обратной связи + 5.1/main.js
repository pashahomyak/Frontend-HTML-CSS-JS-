//var line = 'Some text with last symbol';
//function last(string) {
//    var lastPosition = string.length - 1;
//    return string[lastPosition];
//}
//
//console.log('---', 'last');
//console.log(last(line));
//
//
//var line = 'Some text with last symbol';
//function withoutLast(string) {
//    var lastPosition = string.length - 1;
//    string = string.substr(0, lastPosition);
//    return string;
//}
//
//
//console.log('---', 'withoutLast');
//console.log(withoutLast(line));
//
//
//var line = 'Some text with last symbol';
//function reverse(string) {
//    var newString = '';
//    for (var i = string.length - 1; i >= 0; i--) { 
//        newString += string[i];
//    }
//    return newString;
//}
//
//console.log('---', 'reverse');
//console.log(reverse(line));
//
//
//var line = '   Some    text with      last,    symbol   ';
//function removeExtraBlanks(string) {
//    string = string.replace(/\s+/g,' ');
//    string = string.trim();
//    return string;
//}
//
//console.log('---', 'removeExtraBlanks');
//console.log(removeExtraBlanks(line));


var line = 'Some text with last symbol';
function last(string) {
    var lastPosition = string.length - 1;
    return string.slice(lastPosition);
}

console.log('---', 'last');
console.log(last(line));

var line = 'Some text with last symbol';
function withoutLast(string) {
    var lastPosition = string.length - 1;
    string = string.slice(0, lastPosition);
    return string;
}


console.log('---', 'withoutLast');
console.log(withoutLast(line));


var line = 'Some text with last symbol';
function reverse(string) {
    var newArray = string.split('');
    newArray.reverse();
    var newString = newArray.join('');
    return newString;
}

console.log('---', 'reverse');
console.log(reverse(line));




var line = '   Some    text with      last,    symbol   ';
function removeExtraBlanks(string) {    
    var newString = '';
    var array = string.split(' ');
    var newArray = [];
    newArray = array.filter(function(element) {
        return element != '';
    }); 
    
    newString = newArray.join(' ');    
    return newString;
}

console.log('---', 'removeExtraBlanks');
console.log(removeExtraBlanks(line));
