---
layout: default
title: 'Iniciando desde GRASS'
clase: '02'
---

Sesión introductoria al GIS GRASS
---------------------------------

Abrir la terminal de comandos.

Aparece esto que quiere decir que se puede introducir una orden:

{% highlight text linenos=table %}
usuario@equipo:~ $
{% endhighlight %}

Orden para iniciar grass en la terminal:

{% highlight bash linenos=table %}
grass
{% endhighlight %}

![Ventana de inicio del GIS GRASS]({{ site.baseurl }}/images/grass_startup_screen.png)


Aparece la ventana de inicio del GIS GRASS, con un recuadro para LOCATIONS y otro para MAPSETS.

Durante este curso vamos a utilizar el location CursoGrass y el mapset con el mismo nombre. Seleccionamos el location y el mapset e iniciamos el GIS GRASS.

Ahora en la terminal aparece esto que quiere decir que ahora podemos introducir comandos de GRASS:

{% highlight text linenos=table %}
GRASS 6.4.2 (CursoGrass):~ >
{% endhighlight %}

Para poder desplegar mapas debemos abrir un monitor, podemos utilizar el siguiente comando, que le dice a GRASS que despliegue el monitor x0:

{% highlight bash linenos=table %}
d.mon x0
{% endhighlight %}

La estructura de una orden en Linux y Grass:

`comando -opcion1 parametro1 parametro2=valor --opcion2`

Un **comando** es un escrito (*script*) que especifica la realización de una actividad en el GIS.

Las **opciones** permiten ejecutar el comando de una forma u otra, o formatear la salida de información en la terminal de comandos.

Los **parámetros** en ocasiones son opcionales, normalmente en GRASS se utilizan para definir mapas de entrada y de salida.

### ¿Cómo responde GRASS cuando no existe el comando o cuando no existe el archivo?

- Existe el comando pero no existe el archivo:
{% highlight bash linenos=table %}
make love
{% endhighlight %}
`make: *** No hay ninguna regla para construir el objetivo «love». Alto.`

- No existe el comando y tampoco el archivo:
{% highlight bash linenos=table %}
hacer algo
{% endhighlight %}
`hacer: orden no encontrada`

#### Otro ejemplo

- GRASS "sabe" que el comando existe y es valido pero no existe el archivo:
{% highlight bash linenos=table %}
d.rast monitor_cualquiera
{% endhighlight %}
`ERROR: Mapa ráster <monitor_cualquiera> no encontrado`

- GRASS no conoce el comando y es suficiente (no hace juicio respecto del archivo):
{% highlight bash linenos=table %}
Mostrar monitor
{% endhighlight %}
`Mostrar: orden no encontrada`

### La taxonomía de comandos en GRASS

Los comandos en GRASS se organizan de acuerdo con la función que realizan:

__g.*__ Comandos **generales**, con ellos se realizan operaciones generales a los archivos.

__d.*__ Comandos de **despliegue**, permiten visualizar una orden produciendo una salida gráfica.

__r.*__ Comandos de procesamiento 2D en archivos de tipo **raster**.

__v.*__ Comandos de procesamiento de archivos de tipo **vectorial**.

__i.*__ Comandos de procesamiento de **imágenes**.

__db.*__ Comandos para el manejo de **bases de datos**.

### ¿Cuáles serían los comandos mas básicos estando en GRASS?

- Conocer que archivos raster hay en el sistema para trabajar.  
**GENERAL**

{% highlight bash linenos=table %}
g.list rast
{% endhighlight %}

- Activar un un monitor para observar un mapa.  
**DESPLIEGUE**

{% highlight bash linenos=table %}
d.mon x3
{% endhighlight %}

- Desplegar un archivo raster en el monitor desplegado.  
**DESPLIEGUE**

{% highlight bash linenos=table %}
d.rast porcecito
{% endhighlight %}

- Ampliar un sector particular del mapa desplegado.  
**DESPLIEGUE**

{% highlight bash linenos=table %}
d.zoom
{% endhighlight %}

- Borrar el archivo desplegado en el monitor activo.  
**DESPLIEGUE**

{% highlight bash linenos=table %}
d.erase
{% endhighlight %}

- Copiar un archivo que se encuentra en el mapset `PERMANENT` para tenerlo disponible en el mapset donde se encuentra el usuario. (En el mapset `PERMANENT` deberían estar los mapas básicos sin operar en ellos para evitar daños irreparables.)  
**GENERAL**

{% highlight bash linenos=table %}
g.copy rast=porcecito,porcecito
{% endhighlight %}

- Cambiarle el nombre a un archivo raster (un mapa).  
**GENERAL**

{% highlight bash linenos=table %}
g.rename rast=porcecito, porcecito_copia
{% endhighlight %}

- Borrar un mapa (archivo) del mapset activo.  
**GENERAL**

{% highlight bash linenos=table %}
g.remove rast=porcecito_copia
{% endhighlight %}

- Si el monitor para desplegar los mapas se puede ajustar a la región de cada mapa, es un comando básico aquel que define la región a desplegar.  
**GENERAL**

{% highlight bash linenos=table %}
g.region rast=porcecito
{% endhighlight %}

### La región de trabajo

Hacer esto, implica manejar el concepto de región de trabajo. Se puede cambiar de una región a otra, siempre y cuando, las regiones que se desean desplegar estén arropadas o cubiertas por la zona seleccionada inicialmente en la definición del location.

Teniendo la región predeterminada que se define para el location "CursoGrass", utilizando la opción `-d`, desplegar los tres mapas que se tienen en el mapset `PERMANENT`:

{% highlight bash linenos=table %}
g.region -d
d.rast porcecito
d.rast -o ituango
d.rast -o riogrande_sup
{% endhighlight %}

![Despliegue de varios mapas simultáneamente]({{ site.baseurl }}/images/cursograss.png)

La opción `-o` se utiliza para desplegar mapas superpuestos en el monitor activo.

Los tres mapas o archivos se pueden desplegar en el monitor y pueden salir porque la región con que se define el location "CursoGrass" abarca una región mas amplia.

Ahora vamos a modificar la región de trabajo para que todo el espacio del monitor de visualización esté ocupado por uno de los mapas que se seleccione.

{% highlight bash linenos=table %}
g.region rast=porcecito
d.rast porcecito
{% endhighlight %}

![Porcecito]({{ site.baseurl }}/images/porcecito.png)

{% highlight bash linenos=table %}
g.region rast=ituango
d.rast ituango
{% endhighlight %}

![Ituango]({{ site.baseurl }}/images/ituango.png)

### Consulta del historial de los comandos usados

El historial no se conserva cuando se trabaja con la interfaz gráfica. Desde la terminal se puede consultar con el siguiente comando:

{% highlight bash linenos=table %}
history
{% endhighlight %}

Y si se quiere almacenar en un archivo de texto para su posterior
consulta:

{% highlight bash linenos=table %}
history > clase1.txt
{% endhighlight %}

### Consultar la documentación de los comandos

Se puede consultar la documentación de los comandos para saber qué parámetros requieren y cuales son opcionales, así como sus funciones.

{% highlight bash linenos=table %}
g.copy help
d.rast help
r.in.gdal help
{% endhighlight %}

De igual manera se puede abrir una documentación más completa en el
navegador web con el comando `g.manual`:

{% highlight bash linenos=table %}
g.manual -i &
{% endhighlight %}

Esto abre el índice (parámetro `-i`) de la documentación, el ampersand "&" se utiliza para poder continuar escribiendo comandos sin que se cierre el navegador.

También se pueden abrir directamente los manuales de comandos específicos:

{% highlight bash linenos=table %}
g.manual g.copy &
g.manual d.rast &
g.manual r.in.gdal &
{% endhighlight %}

Iniciamos trabajo
-----------------

- Abrir la maquina virtual.
- Iniciar el GIS GRASS.
- Ubicarse en el mapset *CursoGrass*
- ¿Existen mapas en este lugar de almacenamiento? ¿SI? ¿NO?
- Evitar la realización de operaciones con los archivos almacenados en el mapset `PERMANENT`.

### Crear una copia de un archivo que se encuentra en el mapset PERMANENT

Se crean dos mapas (solamente como procedimiento de aprendizaje).

Un primer mapa lo vamos a denominar `porcecito1` y el otro como `porcecito_temp`.

{% highlight bash linenos=table %}
g.copy rast=porcecito,porcecito1
g.copy rast=porcecito,porcecito_temp
{% endhighlight %}

### Borrar un mapa del mapset activo

{% highlight bash linenos=table %}
g.remove porcecito_temp
{% endhighlight %}

Comprobar si se removió el archivo no deseado. ¿Cómo hacerlo?

### Cambiarle el nombre a un archivo raster (un mapa)

El archivo que se encuentra en el mapset `CursoGrass` se llama `porcecito1` pero quisiera ponerle otro nombre cualquiera. Por ejemplo añadirle ese "1" para diferenciarlo del mapa que se encuentra en el mapset `PERMANENT`. Son dos mapas ubicados en dos sitios diferentes. También podría denominarlo `porcecito_copia`.

Si se le asigna el mismo nombre que se tiene en `PERMANENT`, el sistema envía una advertencia subrayando este hecho: similitud de nombres.

{% highlight bash linenos=table %}
g.rename rast=porcecito1,porcecito
{% endhighlight %}

Cambiemos el nombre y luego lo recuperamos.

{% highlight bash linenos=table %}
g.rename rast=porcecito1,porcecito_copia
{% endhighlight %}

Comprobar:

{% highlight bash linenos=table %}
g.list rast
{% endhighlight %}

Volvamos al nombre inicial para economizar tiempo de escritura.

{% highlight bash linenos=table %}
g.rename rast=porcecito_copia,porcecito1
{% endhighlight %}

El uso de ayudas para comprender lo que hace un comando
-------------------------------------------------------

De manera intuitiva ya sabemos que escribimos la orden `d.mon x0` se despliega el monitor identificado con el nombre `x0`. Existen 8 monitores disponibles, desde el `x0` hasta el `x7`.

### El contenido de un comando

Si escribimos la siguiente orden, vamos a recibir información resumida acerca de lo que se puede hacer con este comando.

{% highlight bash linenos=table %}
d.mon help
{% endhighlight %}

Colocando al final de cada comando de GRASS la palabra "help", obtenemos información acerca de lo que puede realizar cada comando.

La ayuda incluye:

**Descripción:** En pocas palabras dice lo que se puede hacer con el comando.

**Palabras claves:** Palabras indicadoras de la operación que realiza el comando.

**Uso:** Indica la manera como se debe escribir la orden para que el computador la comprenda y la pueda llevar a cabo. El uso es por lo tanto la sintaxis del comando: La manera como deben ir las letras, las palabras, los signos y los espacios para que el mensaje pueda entenderse por el sistema GRASS.

**Opciones:** El SIG GRASS emplea el signo ‘-’ acompañado de letras como opciones para el usuario si desea que se despliegue el resultado de una acción o que no se despliegue.

**Parámetros:** Hace referencia a una acción o a un objeto (archivo) que se desea hacer o desplegar respectivamente.

### Explorar las potencialidades del comando d.mon

Vamos a explorar algunas de las acciones que se pueden realizar con el comando `d.mon`.

- Mostrar todas las opciones que se pueden realizar: crear archivos PNG, desplegar monitores, etc.
{% highlight bash linenos=table %}
d.mon -l
{% endhighlight %}

- Indicar cuales acciones están activas y cuales están inactivas.
{% highlight bash linenos=table %}
d.mon -L
{% endhighlight %}

- Imprimir el nombre del monitor seleccionado actualmente.
{% highlight bash linenos=table %}
d.mon -p
{% endhighlight %}

**NOTA:** Es necesario estudiar todas las opciones que brindan los diferentes comandos que se utilizan en una sesión de trabajo para utilizar eficientemente el SIG GRASS.

Desplegar el mapa porcecito1, ampliar una subzona o porción de interés y guardarla como un nuevo mapa
-----------------------------------------------------------------------------------------------------

{% highlight bash linenos=table %}
d.rast porcecito1
{% endhighlight %}

Entramos al modo de ampliación con el siguiente comando:

{% highlight bash linenos=table %}
d.zoom
{% endhighlight %}

Sale una leyenda que indica como realizar una ampliación de una parte del mapa. El botón de la izquierda para señalar la primera esquina, el boton del medio para quitar el efecto de ampliación, y el botón de la derecha para salir del modo de ampliación.

{% highlight bash linenos=table %}
Buttons:
Left:   1. corner
Middle: Unzoom
Right:  Quit
{% endhighlight %}

Una vez se señala la primera esquina haciendo click izquierdo en el monitor, se despliegan en la terminal de comandos las coordenadas planas del punto, y una leyenda que indica las nuevas opciones:

El botón de la izquierda para cambiar la posición de la primera esquina, el botón del medio para señalar la segunda esquina y completar así la ampliación, y el botón de la derecha para salir del modo de ampliación.

{% highlight bash linenos=table %}
Buttons:
Left:   1. corner (reset)
Middle: 2. corner
Right:  Quit
{% endhighlight %}

Luego con el botón del centro del ratón se indica la esquina diagonal opuesta para delimitar el rectángulo que se desea ampliar. Una vez hecho se despliegan las coordenadas planas de este segundo punto.

Finalmente se despliegan en la terminal las coordenadas de las lineas que delimitan el rectangulo.

Finalmente se hace click con el botón derecho en cualquier lugar del monitor para salir del modo de ampliación.

Cuando se hacen estas acciones se termina teniendo únicamente la zona de interés en el monitor desplegado.

Puede ocurrir que nuestro interés no sea en la totalidad de un mapa sino únicamente en una porción de él. Por lo tanto se ahorra procesamiento y almacenamiento si las actividades posteriores se llevan a cabo en este "pedazo" o porción. Por lo tanto, es recomendable tener el "pedazo" como una región de trabajo o un nuevo mapa.

### Primera opción: Modificando la región de despliegue.

En este caso se construye una nueva región de despliegue en lugar de crear un nuevo mapa.

Primero se ajusta la región al mapa mayor y se despliega.

{% highlight bash linenos=table %}
g.region rast=porcecito
d.rast porcecito
{% endhighlight %}

Con el comando `d.zoom` se selecciona la zona de interés.

{% highlight bash linenos=table %}
d.zoom
{% endhighlight %}

Una vez que se tiene la zona de interés desplegada en el monitor, 'asegurar' y 'guardar' la región desplegada.

{% highlight bash linenos=table %}
g.region save=porcecito_pedazo
g.list region
{% endhighlight %}

Ahora con la 'región' asegurada y guardada se llama y se despliega el mapa `porcecito`.

{% highlight bash linenos=table %}
g.region region=porcecito_pedazo
d.rast porcecito
{% endhighlight %}

![Despliegue de una subzona del mapa Porcecito]({{ site.baseurl }}/images/porcecito_zoom.png)

### Segunda opción: Construir un nuevo mapa a partir de una porción (parte o pedazo) de un mapa mayor

Empleamos un comando muy importante (se estudiará en detalle mas adelante): `r.mapcalc`

Sintaxis básica:

`r.mapcalc 'mapa_a_crear=mapa_inicial'`

{% highlight bash linenos=table %}
r.mapcalc 'porcecito_pdzo=porcecito1'
{% endhighlight %}

Ahora tenemos en el mapset `CursoGrass` dos mapas diferentes. ¿Cómo confirmarlo?

Exploración preliminar de la información en el modelo digital de elevaciones del mapa porcecito
-----------------------------------------------------------------------------------------------

Un comando de uso intensivo en GRASS es `d.rast`. Se emplea para desplegar mapas en un monitor que se encuentre disponible para el despliegue.

Desplegar solamente los valores de altitud ubicados dentro de un rango.

{% highlight bash linenos=table %}
d.rast map=porcecito val=1000-1500
{% endhighlight %}

`ADVERTENCIA: Ignorando lista de valores: el mapa es entero (por favor usar 'cat=')`

{% highlight bash linenos=table %}
d.rast map=porcecito cat=1000-1500
{% endhighlight %}

![1000-1500]({{ site.baseurl }}/images/porcecito_1000_1500.png)

{% highlight bash linenos=table %}
d.rast map=porcecito cat=2000-2300
{% endhighlight %}

![2000-2300]({{ site.baseurl }}/images/porcecito_2000_2300.png)

En este punto de la sesión de trabajo surge un interrogante: No se pueden desplegar valores (vallist), pero si se pueden desplegar categorías (catlist).

*¿Cuál es la diferencia entre "values" y "categories" en un archivo raster?*

Para desplegar el segundo rango borra el primer rango. ¿Qué hacer para tener los dos o más rangos que se desean desplegar?

{% highlight bash linenos=table %}
d.rast map=porcecito catlist=1000-1500
d.rast map=porcecito catlist=2000-2300 -o
{% endhighlight %}

![Despliegue simultáneo de dos rangos altitudinales]({{ site.baseurl }}/images/porcecito_1000_2300.png)

Este ejercicio tiene una limitación importante: Desconocemos en este punto cual es el valor de altitud máxima y el valor de altitud mínima para seleccionar rangos de manera adecuada.

Comandos de consulta básica y estadística del mapa
--------------------------------------------------

### Conocer el valor de un píxel y sus respectivas coordenadas

Se trata de un comando interactivo: Se escribe la orden en la terminal de comandos y aparecen unas indicaciones para que se vaya al mapa desplegado en el monitor y con los botones del ratón se realice una selección y la respuesta se obtiene en la terminal de comandos.

{% highlight bash linenos=table %}
d.what.rast porcecito
{% endhighlight %}

Con la ayuda de los colores del mapa trate de identificar los valores mayores y menores de altitud en el mapa desplegado.

Utilizar el botón derecho del ratón para salir de la situación interactiva y retornar a la terminal de comandos para continuar.

### Identificar las coordenadas de un punto

El siguiente comando permite identificar las coordenadas planas de un punto.

{% highlight bash linenos=table %}
d.where
{% endhighlight %}

La opción `-1` se utiliza para identificar un sólo punto y salir del comando.

{% highlight bash linenos=table %}
d.where -1
{% endhighlight %}

Si se agrega la opción `-l` también permite identificar las coordenadas geográficas en formato "Grados:Minutos:Segundos".

{% highlight bash linenos=table %}
d.where -1l
{% endhighlight %}

Agregándole la opción `-d` muestra las coordenadas geográficas en formato decimal.

{% highlight bash linenos=table %}
d.where -1ld
{% endhighlight %}

### Visualizar los valores de los píxeles de un zona determinada: Observar visualmente la estructura raster del archivo

Desplegar el mapa de interés, por ejemplo, `porcecito`.

{% highlight bash linenos=table %}
d.rast porcecito
{% endhighlight %}

Hacer zoom en una zona muy pequeña.

{% highlight bash linenos=table %}
d.zoom
{% endhighlight %}

Repetir la acción de zoom hasta que se logren percibir los píxeles (un aspecto de retícula grande en el monitor)

Una vez el reticulado es lo suficientemente grande, escribir el siguiente comando para ver en la retícula los valores de cada píxel:

{% highlight bash linenos=table %}
d.rast.num porcecito
{% endhighlight %}

![Retícula con valores de altitud en cada píxel]({{ site.baseurl }}/images/porcecito_small.png)

### Reporte de la información contenida en el mapa

El comando `r.report` permite obtener información estadística básica del mapa ráster que se consulta.

El comando `r.report` require que el usuario entre alguna información para poder realizar la tarea. Le decimos que las unidades de las estadisticas vayan en numero de píxeles `c`, en porcentaje `p` y en kilometros cuadrados `k`, y que realice la segmentacion de las altitudes en 10 rangos de altitud.

{% highlight bash linenos=table %}
r.report -h map=porcecito units=c,p,k nsteps=10
{% endhighlight %}

Observar que pasa cuando los valores del mapa se encuentra en enteros.

No divide en 10 rangos como se le había programado, sino que entrega la información para píxeles que van variando metro a metro, es decir, como enteros.

Al final dice que el archivo contiene 1420848 píxeles que corresponde al 100% y que la extensión del mapa es de 1326.56 km<sup>2</sup>.

El tipo de dato del mapa o archivo vuelve a presentarnos un problema: sabemos que los valores de altitud están en enteros.

Para continuar y superar el problema de la naturaleza de los datos consultemos la información que contiene el archivo.

#### Los metadatos del archivo porcecito

Vamos a consultar cual es la información del mapa (metadatos).

{% highlight bash linenos=table %}
r.info porcecito1
{% endhighlight %}

La información recibida indica que el tipo de dato es `CELL` que en otros términos quiere decir que los valores de altitud del mapa `porcecito` se encuentran en números enteros. Para trabajar adecuadamente necesitamos transformar estos datos a números decimales para realizar operaciones con el comando `r.report` y otras operaciones posteriores.

#### Transformar los datos de números enteros a números decimales sin alterar los valores del archivo

Pasar el mapa de integer a double precision:

{% highlight bash linenos=table %}
r.mapcalc 'porcecito1=porcecito*1.0'
{% endhighlight %}

Consultar nuevamente la información del mapa

{% highlight bash linenos=table %}
r.info porcecito1
{% endhighlight %}

Observar que los datos del archivo se transformaron de `CELL` a `DCELL`.

#### Volver a consultar la información contenida en el mapa porcecito

Reporte con el mapa ya en double precision:

{% highlight bash linenos=table %}
r.report -h map=porcecito1 units=c,p,k nsteps=10
{% endhighlight %}

*¿Qué información importante obtenemos con el comando `r.report`?*

- Seleccionar a voluntad del usuario el número de rangos altitudinales para obtener los estadísticos del archivo.
- Conocemos los valores mínimo y máximo de la altitud para el archivo en estudio.
- Utilizando el N° de píxeles, el porcentaje y la extensión podemos tener una idea adecuada de la distribución altitudinal en la región que representa el mapa.

Representación gráfica de la distribución altitudinal en el mapa porcecito
--------------------------------------------------------------------------

Una representación gráfica de los valores de altitud en el mapa `porcecito`.

{% highlight bash linenos=table %}
d.histogram map=porcecito1 nsteps=10
{% endhighlight %}

![Distribución altitudinal en porcecito]({{ site.baseurl }}/images/porcecito_hist.png)

Para obtener la imagen en formato PNG, se puede utilizar el comando `d.out.file`.

{% highlight bash linenos=table %}
d.out.file porcecito_histogram
{% endhighlight %}

Este comando genera el archivo `porcecito_histogram.png` en el directorio actual, con los contenidos del monitor activo.

Presentación de la tabla que se obtiene con r.report
----------------------------------------------------

Guardamos la salida del comando a un archivo de texto utilizando el parámetro "`output`" e indicando el nombre del archivo con la extensión ".csv" para poderlo importar a una hoja de cálculo, y la abrimos en gedit para arreglarla:

{% highlight bash linenos=table %}
r.report -h map=porcecito1 units=c,p,k nsteps=10 output=porcecito.csv
gedit porcecito.csv
{% endhighlight %}

Borramos las líneas con guiones y organizamos bien las columnas para que sólo queden separadas por el símbolo `|`:

### porcecito.csv

{% highlight text linenos=table %}
|           |   Category Information                |   cell|   %  |    square|
|          #|description                            |  count| cover|kilometers|
| 958-1149.5|from  to . . . . . . . . . . . . . . . | 116302|  8.19| 108.58443|
|1149.5-1341|from  to . . . . . . . . . . . . . . . | 138526|  9.75| 129.33369|
|1341-1532.5|from  to . . . . . . . . . . . . . . . | 148585| 10.46| 138.72519|
|1532.5-1724|from  to . . . . . . . . . . . . . . . | 199335| 14.03| 186.10752|
|1724-1915.5|from  to . . . . . . . . . . . . . . . | 219269| 15.43| 204.71874|
|1915.5-2107|from  to . . . . . . . . . . . . . . . | 234964| 16.54| 219.37225|
|2107-2298.5|from  to . . . . . . . . . . . . . . . | 192389| 13.54| 179.62245|
|2298.5-2490|from  to . . . . . . . . . . . . . . . | 131903|  9.28| 123.15018|
|2490-2681.5|from  to . . . . . . . . . . . . . . . |  36297|  2.55|  33.88840|
|2681.5-2873|from  to . . . . . . . . . . . . . . . |   3278|  0.23|   3.06048|
|TOTAL      |                                       |1420848|100.00|1326.56333|
{% endhighlight %}

Abrimos la carpeta personal y abrimos el archivo csv que creamos.

![Importación de texto separado por comas en LibreOffice]({{ site.baseurl }}/images/csv_import.png)

En el diálogo que se abre, configuramos las opciones como se ve en la imagen: en las opciones de separador seleccionamos "Separado por" y "Otros" y escribimos el símbolo `|`, seleccionamos las columnas primera y tercera y seleccionamos "Ocultar" en "Tipo de columna".

Organizamos los encabezados y le damos un poco de formato a la tabla, de manera que nos queda algo como en la siguiente tabla:

| Rango altitudinal | No. Píxeles | Porcentaje | Área (km2) |
|:-----------------:|:-----------:|:----------:|:----------:|
|    958   - 1149.5 |      116302 |       8.19 |  108.58443 |
|   1149.5 - 1341   |      138526 |       9.75 |  129.33369 |
|   1341   - 1532.5 |      148585 |      10.46 |  138.72519 |
|   1532.5 - 1724   |      199335 |      14.03 |  186.10752 |
|   1724   - 1915.5 |      219269 |      15.43 |  204.71874 |
|   1915.5 - 2107   |      234964 |      16.54 |  219.37225 |
|   2107   - 2298.5 |      192389 |      13.54 |  179.62245 |
|   2298.5 - 2490   |      131903 |       9.28 |  123.15018 |
|   2490   - 2681.5 |       36297 |       2.55 |   33.88840 |
|   2681.5 - 2873   |        3278 |       0.23 |    3.06048 |
|===================|=============|============|============|
|             TOTAL |     1420848 |     100.00 | 1326.56333 |