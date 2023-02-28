//var message = 'Nous allons voir l\'écriture des "quotes" et les \\ backslash';
//console.log(message);

//var message =
//  "Ceci est une phrase.\tEt celle-là est une phrase sure une autre ligne.";
//console.log(message);

//var text = "ceci est";
//text += " un texte";
//console.log(text);

//var message = "les méthodes du string";
//console.log("Le message initial: " + message);

//var part = message.substring(4, 12);
//console.log("La partie du message(substring): " + part);

//var part1 = message.substr(4, 12);
//console.log("La partie du message(substr): " + part1);

//var message = "Nous apprenons le C# et le C#";
//var nouveauMessaage = message.replace(/C#/g, "javascript");
//console.log(nouveauMessaage);

//var message = "Nous apprenons le C# et le C#";
//console.log(message.toUpperCase());
//console.log(message.toLowerCase());

//var text = "message";
//console.log(text.padStart(10, "x"));
//console.log(text.padEnd(10, "x"));

//var message = "il faut trouver le terme 'Trouver' dans le message";
//console.log("Première Occurence: " + message.indexOf("trouver"));
//console.log("Dernière Occurence: " + message.lastIndexOf("Trouver"));

/* Numbers! 
//var x = 5;
//var y = 2;
//var z = x ** y;
//console.log(z);

// WORKS FOR -- ALSO...
//POST FIX INCREMENT
var x = 5;
console.log(x++);
console.log(x);

//PRE FIX INCREMENT
var x = 5;
console.log(++x);
console.log(x);

var x = 0.1;
var y = 0.2;
var z = (x * 10 + y * 10) / 10;
console.log(z);

var x = 10.5;
console.log(x + 4);
console.log(x.toString() + 4);
*/

// Exercise solutions
// Solution 1
//var message = "Nous etudions le javascript";
//var indexPremierVide = message.indexOf(" "); 
//var indexPremierMot = indexPremierVide + 1;
//var indexDeuxiemeVide = message.indexOf(" ", indexPremierMot);
//var deuxiemeMot = message.substring(indexPremierMot, indexDeuxiemeVide);

//console.log(deuxiemeMot);

//Solution 2

//var message = "Nous etudions le javascript";
//var indexPremierVide = message.indexOf(" "); 
//var premierMot = message.substring(0, indexPremierVide); 
//var messageRemplace = message.replace(premierMot, "").trim();
//var indexPremierVideRemplace = messageRemplace.indexOf(" "); 
//var premierMotRemplace = messageRemplace.substring(0, indexPremierVideRemplace);
//console.log(premierMotRemplace)


//var date = new Date();
//console.log(date)

//date.setFullYear(2000)
//date.setMonth(1)
//date.setDate(date)
//date.setHours(1)
//date.setMinutes(1)
//date.setSeconds(1)

//console.log(date.toString());
//console.log(date.toLocaleString());
//console.log(date.toDateString());
//console.log(date.toLocaleDateString());
//console.log(date.toTimeString());
//console.log(date.toLocaleTimeString());
//console.log(date)


