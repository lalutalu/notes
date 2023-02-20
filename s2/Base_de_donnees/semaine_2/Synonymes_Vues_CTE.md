# Normes

- Keep *keywords* CAPITALIZED.
- *Table* names are singular.
- Seperator of two words is an "_"
- All ID'S are numeric values.

## VUES
- vw_vue_*name*

## Foreign Keys
- fk_foreign_key_name

## Index
- ix_index_name

#  Schemas
- Sort of like a *container* of a *namespace* in csharp
- Makes maintaining user rights and copying easier.
- Compared to making a new db, *schemas* are more cost effective.

## Creation
~~~SQL
CREATE SCHEMA <schema_name> [AUTHORIZATION owner_name]
CREATE SCHEMA comptabilite AUTHORIZATION gisele
~~~

By default, tables use "dbo".  
The following table uses the comptabilite Schema.  

~~~SQL
CREATE TABLE comptabilite.client (
id int,
last_name varchar(255),
first_name varchar(255),
city varchar(255)
);
~~~

# Constraint
- Used for adding other unique identifier in database.
- 
