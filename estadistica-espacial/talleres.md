---
layout: curso
title: 'Talleres'
curso: 'estadistica-espacial'
order: 02
custom_js: 'mathjax'
---

## Taller individual 1

Tomando la siguiente base de datos:

[Ciudades de Colombia](/estadistica-espacial/datos/CiudadesDeColombia.xlsx){:target="_blank"}

Realizar:

### Actividades:

1. Crear nuevas columnas en el excel en donde se calcule los grados totales de cada ciudad.
2. Agregar una columna con el identificador del DANE para cada ciudad.
2. Convertir la base de datos en formato ".csv" para que pueda ser leída por el R.
3. Consturir **otra** base de datos de las mismas ciudades con identificador DANE y
   agregarle información como población, NBI, y alguna adicional de su elección (p.ej. altitud).
4. Escribir en R un guión que lea las dos bases de datos y que cree un objeto "SpatialPointsDataFrame" correspondiente.

### Entregables:

1. Base de datos con las coordenadas en grados totales y el identificador DANE de ciudad.
2. Base de datos con la identificación DANE de la ciudad adicionando tres columans de información del muncipio: población, NBI, y alguna otra de su elección.
3. Guión en R con los comandos para construir la base de datos en el objeto "SpatialPointsDataFrame".

### Fecha de entrega:

Lunes 16 de febrero de 2015 antes de las 23:59 hora colombiana al correo **krcabrer@unal.edu.co** en asunto escribir **[EE]**.

## Taller individual 2

- Objetivo: Realizar cuatro simulaciones del campos aleatorios Matérn, desde el equivalente al exponencial,
  hasta una cercana al gausiano.

### Actividades:

1. Seleccionen una media, una varianza, un rango y una distancia máxima a las cuales quiere plantear un campo aleatorio de una variable real.
2. Construya cuatro semivariogramas teóricos para cuatro (4) escenarios posible con la función Matérn todas
   equivalentes al rango y distancia máxima seleccionadas por usted pero con diferentes valores de kappa $$(\kappa)$$ y phi $$(\phi)$$.
   Los valores de kappa $$(\kappa)$$ y phi $$(\phi)$$ empezarán con los equivalentes a una exponencial y deberán llegar a un modelo muy 
   similar a un gausiano.
3. Simular los cuatro campos aleatorios basados en los modelos teóricos propuestos por usted.

### Entregables:

1. Guión en R con las instrucciones utilizadas para construir los semivariogramas teóricos construidos por usted, así
   como la simulación de los campos aleatorios.
2. Trabajo escrito en formato **.pdf** donde se muestre el contexto de la variable simulada, los parámetros $$\kappa$$ y
   $$\phi$$ utilizados, así como los campos aleatorios simulados.
3. Conclusiones de los resultados obtenidos en relación a la variable seleccionada por usted.

### Fecha de entrega:

Martes 17 de marzo de 2015 antes de las 23:59 hora colombiana al correo **krcabrer@unal.edu.co** en asunto escribir **[EE]**.


## Taller individual 3

### Base de datos
![Datos del ejemplo sencillo](/estadistica-espacial/ejemploSencillo.png){: .img-responsive}

### Entregables:
-  Tomar la base de datos representada anteriormente y construir el semivariograma
   de los datos represtados en un script de R. El dato de la coordenada (3,4),
   cambiarlo por el valor de 2 y de nuevo construir el variograma respectivo.
   Comparar los dos semivariogrmas obtenidos.

### Fecha de entrega:
- Viernes 20 de marzo de 2015 antes de las 23:59 horas al 
correo **krcabrer@unal.edu.co** y en asunto escribir **[EE]**

## Taller individual 4

### Base de datos

La [base de datos de un depósito férrico](/estadistica-espacial/datos/depositoFerrico.xlsx){:target="_blank"} 
contiene la distribución en coordenadas dadas en pies (ft), de los valores
en porcentaje de un depósito de hierro (Fe). 

La base de datos está presentada como los valores se ven en planta, es decir
que la parte superior de la base de datos es el Norte, en la parte inferior es
el Sur, hacia la izquierda es el Oeste o el Occidente y hacia la derecha es
el Este o el Oriente.


### Actividades
- Constuir la base de datos para ser procesada por el R.
- Leer la base de datos en R.
- Realizar un análisis exploratorio de los datos.
- Constuir el variograma que represente la estructure espacial y
  determinar si existe o no estrucutra espacial.
- Proponer de acuerdo a los resultados:
  * El nivel de tendencia (ninguno, lineal o cuadrático)
  * El valor del sill (entre qué valores podría estar).
  * El valor del rango (entre qué valores podría estar).
  * Posible modelo teórico y sus parámetros aproximados. Con estos modelos
    superponer sobre el variograma empírico, el variograma teórico
    propuesto por usted.
- Conclusiones y recomendaciones.

### Entregables
- Documento en **.pdf** con los resultados obtenidos (Únicamente
  graficas y texto de análisis)
- Guión en R con las instrucciones utilizadas para generar los resultados.
- Base de datos en formato **".csv"** utilizada para el análisis.


### Fecha de entrega 
  * Viernes, 27 de Marzo de 2015 antes de las 23:59 hora de Colombia,
    al correo **krcabrer@unal.edu.co** y en asunto escribir **[EE]**

