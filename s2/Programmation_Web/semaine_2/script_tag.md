# Class 2: Script Tag

## Script Tag
~~~html
<script></script>
~~~
- Is loaded in a sequential order: For example, the script tag in the head is loaded before the script tag in the body.
- The *Script tag* in the body is able to access the html as it is loaded after. If the *Script tag* is in the body, the html elements are able to load.

## SRC Attribute
- Is used inside the *script* tag.
- Is used to link to an external javascript file. Same sequential order of script tags is in effect. 
 
## Defer
- Added to the *<script>* tag *AFTER* **src**.
- Only applies to *external* File. 
- Loads *javascript* after *HTML*. It is then able to access *HTML* elements even though text *tag* is in the header.
~~~html
<head>
	<script src="example.js" defer></script>
</head>
~~~

## Onload
- The *onload* event occurs when an object has been loaded.
- *Onload* is most often used within the <body> element to execute a script once a web page has completely loaded all content (including images, script files, CSS files, etc.).
- The *onload* event can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information.

**Example:**
~~~html
<!DOCTYPE html>
<html>
<body onload="checkCookies()">
<h1>HTML DOM Events</h1>
<h2>The onload Event</h2>

<p id="demo"></p>

<script>
function checkCookies() {
	var text = "";
	if (navigator.cookieEnabled == true) {
		text = "Cookies are enabled.";
	} else {
		text = "Cookies are not enabled.";
	}
	document.getElementById("demo").innerHTML = text;
}
</script>
</body>
</html> 
~~~


## Alert Tag
- Is the first thing that is loaded. If the button on the alert is not pressed, the rest of the website **does not load**
~~~html
<script>
	alert("Hello");
</script>
~~~

## Misc
- **Functions** must be loaded. They will not be executed by themselves. Even though the functions are loaded.
