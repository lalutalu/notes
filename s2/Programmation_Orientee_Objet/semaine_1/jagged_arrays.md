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
