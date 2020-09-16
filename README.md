# cafci-api
Scripts para obtener información de la API de la [CAFCI](https://www.cafci.org.ar/) (Cámara Argentina de Fondos Comunes de Inversión)

## Funciones

* *getYield* permite obtener el rendimiento de una clase de un fondo entre 2 fechas.
* *getDailyYield* permite obtener el rendimiento de una clase de un fondo el día actual. (Si la ejecutan antes de las 21hs es probable que la información sea la del día anterior)

## Cómo se usa?

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

Hay que crear el script ([getYield](../master/getYield.gs) o [getDailyYield](../master/getDailyYield.gs))  en el archivo donde se quiere utilizar la fórmula con el código en https://script.google.com/home. Si están en el documento pueden entrar a través del menú *Herramientas -> Editor de secuencias de comandos*. Una vez creado tienen que ir al menú menú *Ver -> Mostrar archivo de manifiesto*. Les va a aparecer _appsscript.json_ y tienen que agregar esta línea 

`"oauthScopes": ["https://www.googleapis.com/auth/script.external_request"]`
 
para que pueda hacer request a la api del CAFCI. Por defecto no tiene el permiso para consultar APIs.

Luego de esto en cualquier celda de la hoja de cálculo con la que relacionaron el proyecto escriben `=getYield(` o `=getDailyYield` y van a ver la ayuda de como se usa.

![getYieldHelp](https://i.imgur.com/ICpGh1Q.png)

Siguiendo con el fondo de ejemplo si escribimos `=getYield(847;2409;"2020-08-31";TODAY())` vamos a obtener el rendimiento del fondo desde principios de septiembre hasta la fecha actual
