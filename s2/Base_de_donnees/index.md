# TODOS

- [ ] Install Azure SQL and do homework 📅 2023-02-10 

# Week 1
## Review

- Sequence creation which allows for **Unique Identifiers**.

~~~ SQL
CREATE SEQUENCE dbo.seqStudents START WITH 1 INCREMENT BY 1; 

CREATE SEQUENCE dbo.seqDepartments START WITH 1 INCREMENT BY 1; 

CREATE SEQUENCE dbo.seqClasses START WITH 1 INCREMENT BY 1;
~~~

- Table Creation with Primary Key

~~~ SQL
CREATE TABLE Students 
( 
ID INT NOT NULL, 
FirstName NVARCHAR(200) NOT NULL, 
LastName NVARCHAR(200) NOT NULL 
CONSTRAINT PK_Students PRIMARY KEY (ID) 
) 

CREATE TABLE Departments 
( 
ID INT NOT NULL, 
[Name] NVARCHAR(50) NOT NULL 
CONSTRAINT PK_Departments PRIMARY KEY (ID) 
)
~~~

- Table Creation with Primary Key and Foreign Keys
~~~ SQL

~~~