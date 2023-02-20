# Introduction to Lambda functions

- Generic Collections offer multiple methods for *filters*, *transformations*,*data aggregation*, *research*, and much more. 
- To use these useful methods, one must become familiar with Lambda Expressions.

## Lambda Expressions
- *Lambda expressions* can be used with lists to perform operations such as filtering, transformation, and data aggregation. For example, you can use a lambda expression to filter a list of objects based on a given condition, or to apply a transformation to each item in the list.

Lambda expressions will therefore make it possible to write methods for filtering lists of elements in a more readable way rather than having to resort to loops and, potentially, nesting loops.

The syntax of a lambda expression in C# is as follows:
>**(parameters) => expression or statements**
- **Parameters** are variables defined in parentheses that can be used in the expression or statements that follow;
- The **arrow (=>)**, called Lambda's operator, separates parameters from expression or statements
- The **expression or statements** represent the body of the lambda expression.

The following code is an example of a *lambda expression* in use:

~~~c#
List<Employe> employesTI = employes.FindAll(e => e.Department == "TI");

Console.WriteLine("Liste des employés du département TI");

foreach (Employe emp in employesTI)
{
    Console.WriteLine(emp.Nom);
}
~~~

- The *Lambda Expression* **e ==> e.Departement == "TI"** filters the employees list returning only employees belonging to the "TI" department.
- **e** is for **employees**, it can be changed depending on the list. One can change the name like in a *Foreach* Loop.






~~~python
print("Hello World!");
~~~
