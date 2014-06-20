
//example with numbers
var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
var sorted_arr = arr.sort(); // You can define the comparing function here. 
                             // JS by default uses a crappy string compare.
var arr_length = arr.length;                             
var results = [];
for (var i = 0; i < arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
}
document.writeln(results + " = matching items from the array with full array length of: " + arr_length  + "<br /> <br />");


//custom function with objects
var array = ["bananna", "orange", "kiwi", "strawberry", "kiwi", "grape"];
var sorted_array = array.sort();
var decending_array = array.reverse();
var duplicates = [];
var array_length = array.length;
for (var i = 0; i < array.length; i++) {
    if (sorted_array[i + 1] == sorted_array[i]) {
        duplicates.push(sorted_array[i]);
    }
}

document.writeln (duplicates + " = duplicates from the list<br /><br />");

document.writeln (sorted_array + " = .sort() sort in alphabetic order<br /><br />");

document.writeln (array_length + " = length of the fruits array <br /><br />");

document.writeln (array[6 - 1] + " = pick one out of the list<br /><br />");

cleanlist = [];
for (var i = 0; i < array.length; i++) {
    if (sorted_array[i + 1] != sorted_array[i]) {
        cleanlist.push(sorted_array[i]);
    }
}

document.writeln (cleanlist + " = array without duplicates<br /><br />");

document.writeln (array + " = full array list<br /><br />");

document.writeln (decending_array + " = decending full array list<br /><br />");


var points = [9, 9, 111, 2, 3, 4, 4, 5, 7];

var points_list = points.sort(function(a,b){return(a-b);});

document.writeln (points_list + " = accending points list<br /><br />");

var points_list = points.sort(function(a,b){return(b-a);});

document.writeln (points_list + " = decending points list <br /><br />");

words = new Array("limit","lines","finish","complete","In","Out");
spliced_words = words.splice(3, 2, "done", "On");

document.writeln (words + " = words array with spliced terms added <br /><br />");
document.writeln (spliced_words + " = spliced list <br /><br />");

var candies_array = ["M&M", "red hot", "rasin"];
var nuts_array = [9, 2, 3, 6];
var mixed_nuts = candies_array.concat(nuts_array);
var digit = 9;
var what_kind = typeof digit; 

if (what_kind == "number"){
    document.writeln("what_kind shows up as a number <br /><br />");
}

document.writeln(what_kind + " = kind of object <br /><br />");

document.writeln(mixed_nuts + " = concat two arrays <br /><br />");

var sorted_nuts = mixed_nuts.sort();
var nuts = [];
var candy = [];
for (i = 0; i < sorted_nuts.length; i++){
    snack_type = sorted_nuts[i];
    if (typeof snack_type == "number"){
        nuts.push(sorted_nuts[i]);
    }else {
        candy.push(sorted_nuts[i]);
    }
}
if (sorted_array[i + 1] != sorted_array[i]) {
        cleanlist.push(sorted_array[i]);
    }

document.writeln(candy + " = different candies/string in the bowl <br /><br />");
document.writeln(nuts + " = different nuts/number in the bowl <br /><br />");

words = new Array("limit","lines","finish","complete","In","Out");
spliced_words = words.splice(3, 2, "done", "On");

document.writeln (words + " = array with spliced terms added<br /><br />");
document.writeln (points_list + " = spliced list<br /><br />");

var fruits = ["bananna", "orange", "kiwi", "strawberry", "kiwi", "grape"];

var fruit_basket = fruits.splice(4, 0, "mango");

document.writeln (fruits + " = mango added after the 4th item<br /><br />");

var joined_fruits = fruits.join(', and ');

document.writeln (joined_fruits + " = seperate with a word or spacing<br /><br />");

//.pop() = last
//.shift() = first
//.unshift('value') = add first

