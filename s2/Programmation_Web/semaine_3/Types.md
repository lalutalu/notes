# Strings

- One may use **''** or **""**
- Using an escape character is reccommended when using approstraphes
- Putting the _escape character_ before the character one wants to escape.
-

```js
var message = 'Nous allons voir l\'écriture des "quotes"';
var message = 'Nous allons voir l\'écriture des "quotes"';
```

## New Line

- There is also the \n which makes the rest of the string appear on the next line.

```js
var message =
  "Ceci est une phrase. \nEt celle-là est une phrase sure une autre ligne.";
```

## Tab before line

- **\t** adds a tab to the line. Approximately 8 spaces depending on technology used

```js
var message =
  "Ceci est une phrase.\tEt celle-là est une phrase sure une autre ligne.";
```

## Concatonation

```js
var text = "ceci est";
text += " un texte";
console.log(text);

// WILL NOT WORK. Only "ceci est" will be showed
var text = "ceci est";
text + " un texte";
console.log(text);
```

# Methods

## Length

- The **.Length()** method returns an integer which is the length of the specified object.
- Spaces count as spaces.
- **\n** is only one character, so is **\\**.

```js
var message = "Un texte à compter";
console.log(message.length);

// Returns
18;
```

## Subtring

- Javascript indexes are **zero-based** which means one must start counting at 0.
- Start index must always be inferior to ending parameter.

```js
var message = "les méthodes du string";
console.log("Le message initial: " + message);

var part = message.substring(4, 12);
console.log("La partie du message: " + part);

//Output
Le message initial: les méthodes du string
La partie du message(substring): méthodes
```

## Substr

- Substr, is written similiarly to substring but starts at the beginning index, it counts the number of characters after the start.
- Start index must always be inferior to ending parameter.

```js
var message = "les méthodes du string";

var part1 = message.substr(4, 12);
console.log("La partie du message(substr): " + part1);

//Output
La partie du message(substr): méthodes
```

## Replace

- Never replaces the original string. It simply returns a new one.
- Must put replace inside of a new variable.
- Replace is Case Sensitive.

### Replaces first Occurence

```js
var message = "Nous apprenons le C#";
var nouveauMessaage = message.replace("C#", "javascript");
console.log(nouveauMessaage);

//Output
Nous apprenons le javascript
```

### Replaces all Occurences -**\g**

```js
var message = "Nous apprenons le C# et le C#";
var nouveauMessaage = message.replace(/C#/g, "javascript");
```

### Insensitive Occurence Replacement

```js
var message = "Nous apprenons le C# et le C#";
var nouveauMessaage = message.replace(/C#/i, "javascript");

// Case Insensitive in Entire Document
var nouveauMessaage = message.replace(/C#/gi, "javascript");
```

## UpperCase and LowerCase

```js
var message = "Nous apprenons le C# et le C#";

//UpperCase
console.log(message.toUpperCase());

//LowerCase
console.log(message.toLowerCase());
```

## Concatonation Continued
