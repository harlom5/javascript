/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var array = ["bananna", "orange", "kiwi", "strawberry", "kiwi", "grape"];

var sorted_array = array.sort();

function test(){
    uniquelist = [];
    for (i = 0; i < array.length; i++){
        if (sorted_array[i + 1] != sorted_array[i]){
            uniquelist.push(sorted_array[i]);
        }
    }
    return uniquelist;
}

document.writeln( uniquelist + " = Blind Test: non duplicate array <br /><br />")