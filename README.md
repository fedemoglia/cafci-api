# cafci-api
Scripts para obtener información de la API de la [CAFCI](https://www.cafci.org.ar/) (Cámara Argentina de Fondos Comunes de Inversión)

## Cómo se usa?
El script permite obtener información sobre el rendimiento de cualquier fondo común de inversión de Argentina entre 2 fechas
* Ingresar al sitio web del CAFCI https://www.cafci.org.ar/
* En el menú *Encuentre su fondo* ingresar a *Consulta de fondos*
![Consulta de fondos](https://i.imgur.com/je0bIfx.png)
El acceso directo para entrar a la búsqueda por Administradora es https://www.cafci.org.ar/consultaAdministradora.html
* Seleccionar la administradora del fondo y hacer click en *Buscar*

![Selección de administradora](https://i.imgur.com/jo72OwU.png)

* Seleccionar el fondo de la lista y hacer click en *Ver*
![Selección de fondo](https://i.imgur.com/UUGa4YU.png)

* Tomar de la URL los 2 números que están separados por *;*. De este caso https://www.cafci.org.ar/ficha-fondo.html?q=847;2409 son 847 y 2409. El primero representa el fondo y el segundo la clase. Esto nos permite identificarlo y poder utilizarlo en la función

### Agregar la función 

Hay que crear el script en el archivo donde se quiere utilizar la fórmula con el código en https://script.google.com/home. Si están en el documento pueden entrar a través del menú *Herramientas -> Editor de secuencias de comandos*. Una vez creado tienen que ir al menú menú *Ver -> Mostrar archivo de manifiesto*. Les va a aparecer _appsscript.json_ y tienen que agregar esta línea 

`"oauthScopes": ["https://www.googleapis.com/auth/script.external_request"]`
 
para que pueda hacer request a la api del CAFCI. Por defecto no tiene el permiso para consultar APIs. De no hacerlo cuando la quieran ejecutar les va a aparecer un popup como este 

![scriptPrivileges](https://i.imgur.com/awmQL3e.png)

Y si hacen click en *Revisar permisos* van a llegar a una pantalla como esta donde tienen que hacer click en _Permitir_

![script.external_request](https://i.imgur.com/wKixkdu.png)

Luego de esto en cualquier celda de la hoja de cálculo con la que relacionaron el proyecto escriben `=getYield` y van a ver la ayuda de como se usa. 
![getYieldHelp](https://imgur.com/zipR0B5)
