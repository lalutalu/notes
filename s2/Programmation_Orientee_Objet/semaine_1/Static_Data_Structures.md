# TODOS
- [x] #oop take notes for first and second week due 📅 2023-02-13


# Unidimensional Tables
- Les tableaux sont des structures de données permettant de stocker plusieurs variables de même type. 

- Les tableaux unidimensionnels sont déclarés en spécifiant le type de données que vous souhaitez stocker, suivi de leur nom et de leur taille entre crochets.

- L’exemple suivant déclare un tableau de cinq entiers :

~~~c#
int[] array = new int[5];
~~~

- Les tableaux peuvent stocker n’importe quel type d’élément que vous spécifiez, comme l’exemple suivant qui déclare un tableau de chaines :

~~~c#
string[] stringArray = new string[6];
~~~

### Initialisation d'un tableau

- Vous pouvez également initialiser un tableau lors de sa déclaration, comme ceci :

~~~c#
int[] array1 = new int[] { 1, 3, 5, 7, 9 };

//Syntaxe courte**

int[] array2 = { 1, 3, 5, 7, 9 };
~~~

- Le code suivant montre une déclaration d’un tableau de chaines où chaque élément de tableau est initialisé par un nom d’un jour :

~~~c#
string[] weekDays = new string[] { "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" };
~~~

- Le spécificateur de longueur n’est pas nécessaire, car il est déduit par le nombre d’éléments dans la liste d’initialisation.

- Vous pouvez déclarer une variable de tableau sans la créer, mais vous devez utiliser l’opérateur new lorsque vous attribuez un nouveau tableau à cette variable. 

Par exemple :
~~~c#
int[] array3;

array3 = new int[] { 1, 3, 5, 7, 9 }; // OK

//array3 = {1, 3, 5, 7, 9}; // Erreur
~~~

### Accéder aux éléments d'un tableau

- Vous pouvez accéder aux éléments d'un tableau en utilisant leur index, qui commence à **0** et se termine par **n-1**, n représentant le nombre d’éléments dans le tableau.

- Par exemple, pour accéder au premier et au dernier élément du tableau array déclaré ci-dessus, vous pouvez utiliser la syntaxe suivante :

~~~c#
int[] array = new int[] { 1, 3, 5, 7, 9 }

int premierElement = array[0]; //Retourne 1

int dernierElement = array[4]; //Retourne 9

L'index permet donc de récupérer les données d'un tableau :  
  

string[] weekDays = { "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" }; Console.WriteLine(weekDays[0]);

Console.WriteLine(weekDays[1]);

Console.WriteLine(weekDays[2]);

Console.WriteLine(weekDays[3]);

Console.WriteLine(weekDays[4]

Console.WriteLine(weekDays[5]);

Console.WriteLine(weekDays[6]);

/*Output:

Sun

Mon

Tue

Wed

Thu

Fri

Sat 
*/  
~~~

### Affecter/Modifier un élément un tableau

Pour affecter un élément au tableau, ou modifier la valeur d’un élément, on va également utiliser son index :

~~~c#
int[] array = new int[] { 1, 3, 5, 7, 9 };

array[1] = 4;

array[3] = 8;
~~~

### Parcourir les éléments d’un tableau

Il existe plusieurs façons de parcourir les éléments d’un tableau. Les deux approches les plus courantes sont :

-   La boucle **for**;
-   La boucle **foreach**.

La boucle for permet de parcourir les éléments d’un tableau en spécifiant la taille du tableau et en utilisant l'index pour accéder aux éléments un par un. Exemple :

~~~c#
string[] weekDays = { "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" };

//Lecture des éléments du tableau avec for

for(int i = 0; i< weekDays.Length; i++)

{

    Console.WriteLine(weekDays[i]);
}

La propriété **Length** permet d’obtenir la taille du tableau.

La boucle foreach est la façon la plus simple de parcourir les éléments d’un tableau. Foreach permet d’accéder aux éléments sans avoir à utiliser leur index. Exemple :

string[] weekDays = { "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" };

//Lecture des éléments du tableau avec foreach_**

foreach(string day in weekDays)

{

    Console.WriteLine(day);

}
~~~

### Quelques méthodes courantes utilisées pour manipuler les tableaux

Tous les tableaux en C# sont dérivés de la classe abstraite **System.Array** et offrent les méthodes/propriétés suivantes :

**Nom**

**Description**

**Length** 

Retourne la longueur du tableau

**Sum()**

Somme les éléments du tableau

**Max()**

Retourne la plus grande valeur du tableau

**Min()**

Retourne la plus petite valeur du tableau

**Average**

Somme les éléments du tableau

**Sort()**

Trie les éléments du tableau dans l’ordre croissant

**Reverse()**

Inverse l’ordre des éléments du tableau

**Clear()**

Efface tous les éléments du tableau

**Copy()**

Copie les éléments du tableau dans un autre tableau

**IndexOf()**

Retourne l’index de la première occurrence d’un élément spécifié

**LastIndexOf()**

Retourne l’index de la dernière occurrence d’un élément spécifié

**ToString()**

Convertit le tableau en chaine de caractères

  

### Exemples
~~~c#
//Obtenir la plus grande valeur du tableau

int max = array.Max();

Console.WriteLine($"La plus grande valeur du tableau est : {max}");_

//max==9_**

//Obtenir la moyenne du tableau

double average = array.Average();

Console.WriteLine($"La moyenne du tableau est : {average}");

//average==5_**

//Obtenir la somme des éléments du tableau

int sum = array.Sum();

Console.WriteLine($"La somme des éléments du tableau est : {sum}");

//sum==25

//Tri du tableau

Array.Sort(array);

//array=={1,3,5,7,9}

//Inverser l'ordre des éléments du tableau

Array.Reverse(array);

//arry=={9,7,5,3,1}

//Retourner l'index de la premiere occurrence d'un élément du tableau

int index = Array.IndexOf(array, 5);

Console.WriteLine($"L'index de la premiere occurrence de 5 est : {index}");

//index==2
~~~

# MultiDimensional Tables

- Un tableau multidimensionnel est un tableau qui contient des éléments adressés par deux indices ou plus (au lieu d'un seul dans les tableaux unidimensionnels).
![Tableau Multidimmmensionnel](../img/multidimensionnel.png)

La déclaration suivante crée un tableau à deux dimensions composé de trois lignes et deux colonnes.

int[,] array2D = new int[3, 2];

On peut ensuite remplir le tableau en utilisant les index comme suit :

**array2D[0,0] = 1;**

**array2D[0,1] = 2;**

**array2D[1,0] = 3;**

**array2D[1,1] = 4;**

**array2D[2,0] = 5;**

**array2D[2,1] = 6;**

Il est également possible d’initialiser le tableau lors de la création :

~~~c#
int[,] array2Da = new int[3, 2] { { 1, 2 },

                                  { 3, 4 },

                                  { 5, 6 }};

~~~

### Parcourir un tableau à plusieurs dimensions

Pour parcourir un tableau à plusieurs dimensions, il suffit d’utiliser une boucle par dimension. Pour un tableau à deux dimensions, il faut donc une boucle dans une boucle.

~~~c#
for (int i = 0; i < 3; i++)

{

    for (int j = 0; j < 2; j++)

    {

        _Console.WriteLine("array2D[{0},{1}] = {2}", i, j, array2D[i, j]);

    }

}
~~~

La boucle **foreach** offre une façon simple de parcourir un tableau à plusieurs dimensions.

~~~c#
foreach(int i in array2D)

{

    Console.WriteLine(i);

}
~~~

Toutefois, l’utilisation d’une boucle for imbriquée vous permet de mieux contrôler l’ordre dans lequel les éléments du tableau sont traités.

### Tableaux en escalier

Un tableau en escalier est un tableau dont les éléments sont des tableaux. Ce qui offre l’avantage de pouvoir définir des éléments des tableaux dont la taille pourra être différente.

Dans l’exemple ci-dessous, on définit un tableau unidimensionnel qui comporte trois éléments, chacun d’eux étant un tableau unidimensionnel d’entiers.

~~~c#
int[][] jaggedArray = new int[3][];
~~~

Pour utiliser le tableau, on doit initialiser ses éléments, qui pourront être des tableaux de différentes tailles :

~~~c#
jaggedArray[0] = new int[] { 1, 3, 5, 7, 9 };

jaggedArray[1] = new int[4];

jaggedArray[2] = new int[2];

//Afficher la valeur de chaque élément**

for (int i = 0; i < jaggedArray.Length; i++)

{

   for (int j = 0; j < jaggedArray[i].Length; j++)

    {

       Console.WriteLine("jaggedArray[{0}][{1}] = {2}", i, j, jaggedArray[i][j]);

    }

}
~~~

# Misc

- Writing in a value directly. 
- When there is a dollar sign, one may directly put variable inside the brackets.
~~~c#
// First Method
Console.WriteLine($"Le nombre maximal dans le tableau est: {arrayUserInput.Max()}");

// Second Method
Console.WriteLine("Le nombre maximal dans le tableau est: " + arrayUserInput.Max());
~~~

**Name Variables Correctly** so one may remove comments.
- Make sure the user experience is good in an application.
- 