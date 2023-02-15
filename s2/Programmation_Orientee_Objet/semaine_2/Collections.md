# Introduction
## Array Drawbacks
- Tables have one drawback: they are statically sized. They are only useful for a **fixed number**.
- Adding or removing values requires creating a new array of the right size or maintain a *counter* which shows the number of elements in an array.
## Collection Positives
- Collections are more flexible as they can *dynamically* change size depending on one's needs.

## When to use each?
- **Collections** are preferred when *storing* and *organizing* data in  a flexible way.
- **Tables or Arrays** are used for a fixed data set and they are also used when *better performance* is needed.

## Collection Types

| **Types**     | **Description**                                                                                               |
|---------------|---------------------------------------------------------------------------------------------------------------|
| *Description* | Represents a collection of key/value pairs organized by key. Similar to *Primary Keys*                        |
| *List*        | Represents a list of objects accessible by index. Provides methods for searching, sorting, and editing lists. |
| *Queue*       | Represents a collection of first-in, first-out (FIFO) objects.                                                |
| *Stack*       | Represents a collection of last-in, first-out (LIFO) objects.                                                 |

## Generic and Non-Generic Collection Types
| **Generic vs Non-Generic Collection in C#**                                                                                                                                                                                                                                                            |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A *Generic collection* is a class that provides type safety without having to derive from a base collection type and implement type-specific members.	A *Non-generic* collection is a specialized class for data storage and retrieval that provides support for stacks, queues, lists and hash tables. |
| **Namespace**                                                                                                                                                                                                                                                                                          |
| The *Generic Collection* classes are in the System. Collections. Generics namespace.	The *Non-generic Collection* classes are in the System. Collections namespace.                                                                                                                                    |
| **Type**                                                                                                                                                                                                                                                                                               |
| *A Generic Collection* is **strongly** typed.	A *Non-Generic Collection* is not strongly typed.                                                                                                                                                                                                                |
| **Storing Elements**                                                                                                                                                                                                                                                                                           |
| The *Generic Collections* store elements internally in arrays of their actual types.	The *Non-generic collections* store elements internally in object arrays so it can store any type of data.                                                                                                               |

## Which to Use?
- In this class, we will be using the **Generic Collection Types**. This is because they have an added layer of security by default.
