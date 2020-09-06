# cafci-api
Scripts para obtener información de la API de la [CAFCI](https://www.cafci.org.ar/) (Cámara Argentina de Fondos Comunes de Inversión)

## Cómo se usa?
El script permite obtener información sobre el rendimiento de cualquier fondo común de inversión de Argentina entre 2 fechas
* Ingresar al sitio web del CAFCI https://www.cafci.org.ar/
* En el menú *Encuentre su fondo* ingresar a *Consulta de fondos*
![Consulta de fondos](https://imgur.com/a/3BfUwu7)
El acceso directo para entrar a la búsqueda por Administradora es https://www.cafci.org.ar/consultaAdministradora.html
* Seleccionar la administradora del fondo y hacer click en *Buscar*

![Selección de administradora](https://imgur.com/jo72OwU)

* Seleccionar el fondo de la lista y hacer click en *Ver*
* Tomar de la URL los 2 números que están separados por *;*. De este caso https://www.cafci.org.ar/ficha-fondo.html?q=847;2409 son 847 y 2409. El primero representa el fondo y el segundo la clase. Esto nos permite identificarlo y poder utilizarlo en la función
