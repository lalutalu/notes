# Using Lambda Functions on Collections
## Elemental Functions
| Function          | Description                                                                                                                                      |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| First()           | Returns the first element that matches the Lambda expression. Throws an exception if the element does not exist.                                 |
| FirstOrDefault()  | Returns the first element that matches the Lambda expression. Returns null if the element does not exist.                                        |
| Single()          | Returns the element that respects the Lambda expression. Throws an exception if the element does not exist or if more than one element exists.   |
| SingleOrDefault() | Returns element that respects the Lambda expression. Throws an exception if more than one element exists and null if the element does not exist. |
| Last()            | Returns the last element that matches the Lambda expression. Throws an exception if the element does not exist.                                  |
| LastOrDefault()   | Returns the last element that matches the Lambda expression. Returns null if the element does not exist.                                         |

### Examples:
~~~c#
//Obtenir le nom de l'employer avec ID 104

string nomEmploye104 = employes.Single(e => e.ID == 104).Nom;

Console.WriteLine("Nom de l'employé avec ID 104 : " + nomEmploye104);

//nomEmploye == "Julie"

//Premier employé dont le nom commence par J

Employe premierEmployeJ = employes.First(e => e.Nom.StartsWith("J"));

Console.WriteLine("Premier employé dont le nom commence par J : " + premierEmployeJ.Nom);

//premierEmployeJ.Nom == "Jule"

//Premier employé dont le nom commence par J

Employe premierEmployeJ2 = employes.Single(e => e.Nom.StartsWith("J"));

//Produit une exception
~~~

## Aggregation Functions
| Function  | Description                                |
|-----------|--------------------------------------------|
| Count()   | Returns number of elements in collection   |
| Min()     | Returns smallest value in collection       |
| Max()     | Returns highest value in collection        |
| Average() | Returns the average of a collection        |
| Sum()     | Calculates the sum of a property in a list |

### Examples:
~~~c#
//Plus petit salaire

int plusPetitSalaire = employes.Min(e => e.Salaire);

Console.WriteLine("Plus petit salaire : " + plusPetitSalaire);

//plusPetitSalaire == 4500

//Plus grand salaire

int plusGrandSalaire = employes.Max(e => e.Salaire);

Console.WriteLine("Plus grand salaire : " + plusGrandSalaire);

//plusGrandSalaire == 7000

//Somme des salaires

int sommeSalaires = employes.Sum(e => e.Salaire);

Console.WriteLine("Somme des salaires : " + sommeSalaires);

//sommeSalaires == 25500

//Moyenne des salaires

double moyenneSalaires = employes.Average(e => e.Salaire);

Console.WriteLine("Moyenne des salaires : " + moyenneSalaires);

//moyenneSalaires == 5100
~~~

## Sorting Functions

| Function            | Description                                                                      |
|---------------------|----------------------------------------------------------------------------------|
| OrderBy()           | Sorts items in a list in ascending order based on a given property               |
| OrderByDescending() | Sorts elements of a list in descending order based on a given property           |
| ThenBy()            | Sorts items in a list in ascending order based on a given secondary property     |
| ThenByDescending()  | Sorts elements of a list in descending order based on a given secondary property |

### Examples: 
~~~c#
//Tri croissant des employés par nom

List<Employe> employesTries = employes.OrderBy(e => e.Nom).ToList();

//Tri décroissant des employés par nom

List<Employe> employesTriesDecroissant = employes.OrderByDescending(e => e.Nom).ToList();

//Tri croissant des employés par département et par nom

List<Employe> employesTriesParDepartementEtNom = employes.OrderBy(e => e.Department).ThenBy(e => e.Nom).ToList();
~~~

## Quantfier Functions

| Function   | Description                                                                              |
|------------|------------------------------------------------------------------------------------------|
| All()      | Returns true if all items in the list meet the given condition, otherwise false          |
| Any()      | Returns true if at least one item in the list meets the given condition, otherwise false |
| Contains() | Returns true if the specified object is present in the list, otherwise false             |

### Examples:
~~~c#
//Tous les employés ont-ils un salaire supérieur à 4000

bool tousEmployesSalaireSuperieur4000 = employes.All(e => e.Salaire > 4000);

Console.WriteLine("Tous les employés ont-ils un salaire supérieur à 4000 ? " + tousEmployesSalaireSuperieur4000);

//Au moins un employé a-t-il un salaire supérieur à 4000

bool auMoinsUnEmployeSalaireSuperieur4000 = employes.Any(e => e.Salaire > 4000);

Console.WriteLine("Au moins un employé a-t-il un salaire supérieur à 4000 ? " + auMoinsUnEmployeSalaireSuperieur4000);
~~~

## Set Functions

| Function   | Description                                                                              |
|------------|------------------------------------------------------------------------------------------|
| All()      | Returns true if all items in the list meet the given condition, otherwise false          |
| Any()      | Returns true if at least one item in the list meets the given condition, otherwise false |
| Contains() | Returns true if the specified object is present in the list, otherwise false             |

### Examples:
~~~c#
//Tous les employés de la liste employesA et la liste employesB

List<Employe> tousLesEmployes = employesA.Concat(employesB).ToList();

//Tous les employés de la liste employesA et la liste employesB sans doublons

List<Employe> employesUniques = employesA.Union(employesB).ToList();

//Tous les employés qui sont présents dans la liste employesA et la liste employesB

List<Employe> employesCommun = employesA.Intersect(employesB).ToList();

//Tous les employés qui sont la liste employesA mais pas dans la liste employesB

List<Employe> employesAExclusEmployesB = employesA.Except(employesB).ToList();
~~~

## Projection Functions

| Function   | Description                                                                              |
|------------|------------------------------------------------------------------------------------------|
| All()      | Returns true if all items in the list meet the given condition, otherwise false          |
| Any()      | Returns true if at least one item in the list meets the given condition, otherwise false |
| Contains() | Returns true if the specified object is present in the list, otherwise false             |

### Examples: 
~~~c#
//Obtenir le nom de tous les employés

var nomEmployes = employes.Select(e => e.Nom).ToList();

//Obtenir le nom et le salaire des employés dans un nouvel objet. Le resultat est une liste de type anonyme

var nomSalaireEmployes = employes.Select(e => new {e.Nom, e.Salaire }).ToList();
~~~

## Data Filtering Functions
| Function   | Description                                                                              |
|------------|------------------------------------------------------------------------------------------|
| All()      | Returns true if all items in the list meet the given condition, otherwise false          |
| Any()      | Returns true if at least one item in the list meets the given condition, otherwise false |
| Contains() | Returns true if the specified object is present in the list, otherwise false             |

### Examples: 
~~~c#
//Obtenir la liste des employés du département TI

List<Employe> employesTI2 = employes.Where(e => e.Department == "TI").ToList();

//Obtenir les employés du département TI et RH

List<Employe> employesA = employes.FindAll(e => e.Department == "TI" || e.Department == "RH");
~~~
