document.writeln('<h1>Objects</h1>');

//Object Literal
var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
}

//Retreival
var airline = flight['airline'];
var arrival = flight.arrival.city;

document.writeln('<br />' + airline + '<br />' + arrival);

// Update
flight.airline = "Delta";
flight['number'] = 747;
flight.altitude = "10 Thousand Feet";
flight['departure.city'] = 'Fargo';
flight.departure.city = "Bismarck"
flight['destination'] = function (a, b){return a+b};

// delete flight.arrival.city;
// delete value from object ^

document.writeln('<br /><br />' + airline + '<br />'  + flight['number'] + '<br />' + flight['altitude'] + '<br />' + flight['departure.city'] + '<br />'+ flight.departure.city + '<br />' + flight.arrival['city']);

//Reflection
var flightType = typeof flight['number']
//flight.hasOwnProperty('number')

document.writeln('<br /><br /> City is a: ' + typeof flight.arrival['city']);
document.writeln('<br /><br /> Destination: ' + typeof flight.arrival.city);
document.writeln('<br /> Flight number is a: ' + flightType + '<br /><br />');


var golf_players = {
    name: "Chuck",
    handycap: function (a, b) {return a + b;},
    course: "Pebble Beach"
}

var details;
for (details in golf_players){
    if (typeof golf_players[details] !== 'function') {
        document.writeln('Details : ' + golf_players[details] + '<br />');
    }
}

//Enumeration
document.writeln('<br />');
var i;
var teams = [
    'St. Thomas',
    'St. Johns',
    'NDSU'
];
var position = [
    'home',
    'away',
    'neutral'
];

for (i = 0; i < teams.length; i += 1) {
    document.writeln(teams[i] + ': ' + position[i] + '<br />');
}


document.writeln('<br /><br /><h1>Functions</h1>');

//function literal
var add = function (a, b) {
    return a + b;
};


// Method Invocation Pattern
// Create myObject. It has a value and an increment
// method. The increment method takes an optional
// parameter. If the argument is not a number, then 1
// is used as the default.

var newTeams = {
    teams: 5,
    increment: function(inc) {
        this.teams += typeof inc === 'number' ? inc: 10;
    }
};
// Increases each time its called because the variable is stored
newTeams.increment(0);
document.writeln(newTeams.teams + '  Original Teams <br />');
newTeams.increment('Thursday');
document.writeln(newTeams.teams + '  After 1 Year <br />');
newTeams.increment(20);
document.writeln(newTeams.teams + '  After 5 Years <br />');


//Invocation Pattern
var Quo = function (string) {
    this.status = string;
};

Quo.prototype.get_status = function ( ) {
    return this.status;
};
//var myQuo = new Quo("confused");
//document.writeln(myQuo.get_status( ));


var array = [3, 4];
var sum = add.apply(null, array); // sum is 7
var statusObject = {
    status: 'A-OK'
};

var status = Quo.prototype.get_status.apply(statusObject);
document.writeln('<br /> The sum of the array is ' + sum + " and that's " + status + '<br />');

//Arguments & Return
var total = function ( ) {
    var i,
    total = 0;
    for (i = 0; i < arguments.length; i += 1) {
        total += arguments[i];
    }
    return total;
};
document.writeln('The variables added up are: ' + total(4, 8, 0, 16, 23, 42) + '<br />'); // 93

//Exceptions
var combine = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        };
    }
    return a + b
}
var orange = 'banana';
document.writeln(combine(17,orange));


