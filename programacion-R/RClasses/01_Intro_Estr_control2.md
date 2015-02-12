Introducción al R
========================================================
author: Kenneth Cabrera
date: Viernes 12 de septiembre de 2014

Subconjuntos I
========================================================
- `[` Siempre devuelve un objeto de la misma clase que el original.
- `[[` Es usado para extraer los elementos de una lista.
   Sólo para extraer un elmento de la lista. Lo que devuelve
   puede ser de distitno tipo al de la lista o el `data.frame`.
- `$` se usa para extraer elementos de una lista o `data.frame`.
   Semánticamente es similar a `[[`.

Subconjuntos II
========================================================
```
x <- c("a", "b", "c", "c", "d", "a")   
x[1]
x[2]
x[1:4]
```

Subconjuntos III
========================================================
```
x <- c("a", "b", "c", "c", "d", "a")   
x > "a"
x[x > "a"]
u <- x > "a"
x[u]
```

Subconjuntos IV
========================================================
```
x <- data.frame(x = 1:5, y = letters[1:5], z = c(T,T,F,T,F))
x$x
x[["x"]]
x["x"]
x[["y"]]
x["y"]
x[["z"]]
x["z"]
```


Subconjuntos I (matrix)
========================================================
   
```
x <- matrix(6:1, 2, 3)
x[1, 2]
x[2, 1]

x[1,]

x[,2]

```

Subconjuntos II (matriz)
========================================================
```
x <- matrix(6:1, 2, 3)
x[1, 2]
x[1, 2, drop = FALSE]

```

Subconjuntos III (matriz)
========================================================
```
x <- matrix(6:1, 2, 3)
x[1, ]
x[1, , drop = FALSE]
```

Subconjuntos I (listas)
========================================================
```
x <- list(foo = 6:1, bar = 0.6)
x[1]
x[[1]]
x$bar
x[["bar"]]
x["bar"]
```

Subconjuntos II (listas)
========================================================
```
x <- list(foo = 6:1, bar = 0.6, baz = "hello")
x[c(1,3)]
```

Subconjuntos III (listas)
========================================================
```
x <- list(foo = 6:1, bar = 0.6, baz = "hello")
nombre <- "foo"
x[[nombre]]
x$nombre
x$foo
```

Subconjuntos IV (listas)
========================================================
```
x <- list(a = list(10, 12, 14), b = c(3.14, 2.81))
x[[c(1,3)]]
x[[1]][[3]]
x[[c(2,1)]]
```

Subconjuntos (data.frames)
========================================================
```
x <- data.frame(x = 1:5, y = letters[1:5], z = c(T,T,F,T,F))

x[[c(3,3)]]
x[c(1,3)]

x[1,3]
x[3,]
x[c(1,3),]
x[,c(1,3)]

```



Nombramiento parcial
========================================================
```
x <- list(unvector = 1:5)
x$u

x[["u"]]

x[["u", exact = FALSE]]
```

Remoción de valores NA I
========================================================
```
x <- c(1, 2, NA, 4, NA, 5)
malos <- is.na(x)
x[!malo]

```

Remoción de valores NA II
========================================================
```
x <- c(1, 2, NA, 4, NA, 5, 9, NA)
y <- c("a", "b", NA, "d", NA, "f", NA, "k")

buenos <- complete.cases(x,y)
buenos

x[buenos]
y[buenos]

```

Remoción de valores NA III
========================================================
```

airquality[1:6, ]

buenos <- complete.cases(airquality)

airquality[buenos, ][1:6, ]

```

Remoción de valores NA IV
========================================================
```
c(TRUE, FALSE) & NA
c(TRUE, FALSE) | NA

```

Remoción de valores NA V
========================================================
Quitar únicamente los que en todo el registro sea NA

```r
x <- c(1, 2, NA, 4, NA, 5, 9, NA)
y <- c("a", "b", NA, "d", NA, "f", NA, "k")
unido <- data.frame(x,y)
unido
```

```
   x    y
1  1    a
2  2    b
3 NA <NA>
4  4    d
5 NA <NA>
6  5    f
7  9 <NA>
8 NA    k
```

Remoción de valores NA V
========================================================
Quitar únicamente los que en todo el registro sea NA

```r
x <- c(1, 2, NA, 4, NA, 5, 9, NA)
y <- c("a", "b", NA, "d", NA, "f", NA, "k")
unido <- data.frame(x,y)
unido[!(is.na(x) & is.na(y)),]
```

```
   x    y
1  1    a
2  2    b
4  4    d
6  5    f
7  9 <NA>
8 NA    k
```

Lectura de datos
========================================================
Las principales funciones para la lectura de base de datos son:
- `read.table`, `read.csv`, `read.csv2`, para leer datos tabulados.
- `readLines`, para leer lineas de un archivo de texto.
- `source`, para leer archivos con código en R. (inverso de `dump`)
- `dget`, para leer archivos con código en R. (inverso de `dput`)
- `load`, para leer archivos propios en formato `.RData`.

Escritura de datos
========================================================
Las funciones para escritura análogas son:
- `write.table`, `write.csv`, `write.csv2`
- `writeLines`
- `dump`
- `dput`
- `save`

Lectura de datos con read.table I
========================================================
La forma más genérica de la lectura de datos es con la función 'read.table'.
Algunos argumentos importantes son:
- `file`, el nombre del archivo, o una conexión.
- `header`, argumento lógico para determinar si el archivo tiene encabezado.
- `sep`, sarta que indica el símbolo separador de columnas.
- `colClasess`, un vector de sartas que indica la clase en la cual sería
  leída cada columna de la base de datos.
  
Lectura de datos con read.table II
========================================================
- `nrows`, número de fila a leer del archivo de la base de datos.
- `comment.char`, sarta que indica el símbolo para comentarios.
- `skip`, número de líneas para dejar de leer al principo de la base de datos.
- `stringsAsFactors`, lógico para determinar si las variables alfanuméricas se conviertan o no a factores.
  
read.table por omisión  
========================================================
```
datos <- read.table("archivo.txt")
```
Por omisión:
- Omite la lectura de cualquier línea que comience con `#`.
- Calcula aproximadamente cuántas líneas hay y por o tanto cuánta memoria necesitará.
- Estima el tipo de variable de cada columna de la tabla. Si le decimos explícitamente de que tipos es cada columna la lectura es mucho más eficiente.
- Argumentos por omisión se puede obtener con `args(read.table)`.

Lectura de bases de datos grandes I
========================================================
Para leer base de datos grandes (>50MB y <2GB):
- Lea la página de ayuda de `read.table`.
- Realice un cálculo rápido de la memoria que se requiere para guardar sus datos. Si este cálculo es mayor de 2GB en windows o mayor de su RAM en linux, piense en otras estrategias.
- Establezca el argumento comment.char= "", si no hay líneas comentadas en su archivo.

Lectura de bases de datos grandes II
========================================================
- Use el agrgumento `colClasses` para leer más rápido la base de datos.
Si todas son numérica con sólo establecer el argumento como `colClases = "numeric"` se ahorra un buen tiempo.

```
incial <- read.table("basededatos.txt", nrows = 100)
clases <- apply(inicial, class)
todo <- read.table("basededatos.txt", colClasses = clases)

```

Conozca el sistema
========================================================
- ¿De cuánta memoria dispone (RAM)?
- ¿Qué otras aplicaciones están en uso?
- ¿Existen otros usuarios que entran al sistemas?
- ¿Cuál es el sistema operativo?
- ¿Es el sistema operativo de 32 o 64 bits?

Cálculo de uso de memoria
========================================================
Si se tiene una tabla de 1'500.000 filas y 120 columnas, y todas son numéricas entonces se tiene que un cálculo rápido es:

```
todo <- 1500000 * 120 * 8
todo
todo/2^20 # bytes/MB
(todo/2^20)/1000 # En GB

```
