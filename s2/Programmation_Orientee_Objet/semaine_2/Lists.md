# Lists

A list is a **dynamic collection** that allows the storage and management of items in an organized manner.  

Here are the main characteristics:  
	1. **Dynamic Size**: Unlike a table, the size can be modified.  
	2. **Indexable**: The elements of a list can be accessed by using their index.  
	3. **Generic Type**: May be declared to contain any type of variable.  
	4. **Base Functionality**: Supports operations such as adding, deleting, searching, and sorting.  

## Operations on lists
### Creation

It is represented by a **Generic Class** of type **List<T>**. "T" is the type of element contained in the list.

### Empty List Creation
~~~c#
List <int> vide = new List<int> ();
~~~

### Pre-filled Integer List
~~~c#
List<int> entiers = new List<int> { 0, 5, 15, 20, 25 };
~~~

### Pre-filled String List
~~~c#
List<string> dinosaures = new List<string> { "Tyrannosaurus", "Amargasaurus", "Mamenchisaurus", "Brachiosaurus" };
~~~

## Operations on Lists

These examples use the **Dinosaur String Array** above...  

### Return of element in second position 2 (indice 1)
~~~c#
string dino = dinosaures[1];
Console.WriteLine(dino);
~~~

#### Output
~~~c#
dino = Amargasaurus
~~~

### Adding an element at the end of the list
~~~c#
dinosaures.Add("Compsognathus");
~~~

### Printing out the last element of a list
~~~c#
string dernierDino = dinosaures.Last();
Console.WriteLine(dernierDino);
~~~

#### Output
~~~c#
dernierDino = Compsognathus
~~~

### Modifying the second element of a List
~~~c#
dinosaures[1] = "Mamenchisaurus";
~~~

#### New List
~~~c#
dinosaures == { "Tyrannosaurus", "Mamenchisaurus", "Mamenchisaurus", "Brachiosaurus", "Compsognathus" }
~~~

### Remove element with according to its index
We will be removing an element at the 3rd position
~~~c#
dinosaures.RemoveAt(2);
~~~

### Remove element with according to its value
We will be removing an element with the value "Compsognathus".
~~~c#
dinosaures.Remove("Compsognathus");
~~~

### Inserting a value into a List
We will be inserting an element at the second index
~~~c#
dinosaures.Insert(1, "Amargasaurus");
~~~

### Getting the index of an element
~~~c#
int index = dinosaures.IndexOf("Mamenchisaurus");
Console.WriteLine($"Index du Mamenchisaurus : {index}");
~~~

#### Output
~~~c#
Index du Mamenchisaurus : 2
~~~

### Check if a list contains a value
~~~c#
bool contient = dinosaures.Contains("Compsognathus");
Console.WriteLine($"La liste contient Compsognathus ? {contient}");
~~~

#### Output
~~~c#
La liste contient Compsognathus ? false
~~~

### Counting the elements of a list
~~~c#
int nbElements = dinosaures.Count;
Console.WriteLine($"Nombre d'éléments dans la liste : {nbElements} ");
~~~

#### Output
~~~c#
Nombre d'éléments dans la liste: 4
~~~

### Sort elements in a list
Lists with letters are sorted alphabetically, whereas numerically from smallest value to the biggest.
~~~c#
dinosaures.Sort();
~~~

#### Output
~~~c#
dinosaures == { "Amargasaurus", "Brachiosaurus", "Mamenchisaurus", "Tyrannosaurus" }
~~~

### Deleting a List
~~~c#
dinosaures.Clear();
~~~
## Browsing a list
### For Loop
~~~c#
for (int i = 0; i < dinosaures.Count; i++)
{
	Console.WriteLine(dinosaures[i]);
}
~~~

### Foreach Loop
- It is the preferred method
~~~c#
foreach(string dino2 in dinosaures)
{
	Console.WriteLine(dino2);
}
~~~
