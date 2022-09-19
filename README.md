#Ejemplo de API RESS CRUD con Java y Spring boot
### Features

-La aplicacion consta de un API desarrollada en JAVA 18, con el framework Spring Boot WEB y una conexion a una base de datos MariaDB 

-El front end utiliza un template Generico cuyo unico proposito es visualizar las peticiones al API, este consta de un unico index.html, un archivo js con las funcionalidades y un archivo CSS.

-El API Consta de una unica clase llamada Usuario sobre la cual gira toda la aplicacion, se siguio el siguiente esquema para colocar la logica 


**Esquema**

[TOC]

# SRC/main/
## /java
###   /Controller
Se coloco el controlador referente al usuario para manegar las peticiones
###    /Model
Se coloco el modelo Usuario el cual consta de las siguientes propiedades
| Primar Key  | Type  | Name | Description |
| ------------: |:---------------| :-----:| :-----|
| pk     | int | ID  | Id del usuario, autoincrementado en la db|
| | String | Name| Nombre del usuario|
| | String | Email| Correo electronico, no validado por el API|
| | String | Address| Direccion del usuario.|
| | String | Phone| Numero del Usuario|

Cada propiedad cuenta con su setter y getter, implementados con Lombok
El modelo utiliza Hibernate para gestionar los registros de la base de datos
### /DAO
Se coloco la logica referente a la interface del usuario y se implemento en una clase Usuario donde se hace el llamado a las funciones del CRUD por medio de Hibernate\
##/recourses
###    AplicationPropetis 
Se coloco los datos necesarios para la conexion a la base de datos
###    /Static
####       index.html
####    /js
 ####      /css

