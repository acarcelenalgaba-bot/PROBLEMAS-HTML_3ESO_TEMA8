const baseDatosProblemas = {
    "ficha1": [
        {
            titulo: "Problema 1: Definiciones básicas de cinemática",
            enunciado: "Con la ayuda del documento de teoría, explica con tus propias palabras los siguientes terminos: <br> a) &nbsp Sistema de referencia. <br> b) &nbsp Trayectoria de un móvil. <br> c) &nbsp Velocidad. <br> d) &nbsp Movimiento rectilíneo uniforme. <br> e) &nbsp Movimiento rectilíneo uniformente acelerado.",
            solucion: `<div class='paso'>
                <strong>a) Sistema de referencia:</strong><br>
                Un sistema de referencia es un conjunto de objetos o puntos que se utilizan para describir la posición y el movimiento de otros objetos. Es como un marco de coordenadas que nos permite medir y comparar las posiciones y movimientos de los objetos en el espacio. Por ejemplo, si estamos en un coche en movimiento, el sistema de referencia podría ser el propio coche, y podríamos describir el movimiento de otros objetos (como árboles o edificios) en relación a ese sistema.
            </div>
            <div class='paso'>
                <strong>b) Trayectoria de un móvil:</strong><br>
                La trayectoria de un móvil es el camino que sigue un objeto en movimiento a lo largo del tiempo. Es la línea imaginaria que conecta todas las posiciones sucesivas del objeto mientras se mueve. Por ejemplo, si lanzamos una pelota al aire, su trayectoria sería la curva que describe desde el punto de lanzamiento hasta el punto donde cae al suelo.
            </div>
            <div class='paso'>
                <strong>c) Velocidad:</strong><br>
                La velocidad es una magnitud física que describe la rapidez con la que un objeto se mueve en una dirección específica. Se define como el cambio de posición de un objeto por unidad de tiempo. La velocidad se expresa comúnmente en metros por segundo (m/s) o kilómetros por hora (km/h). Por ejemplo, si un coche recorre 100 kilómetros en 2 horas, su velocidad sería de 50 km/h.
            </div>
            <div class='paso'>
                <strong>d) Movimiento rectilíneo uniforme:</strong><br>
                El movimiento rectilíneo uniforme es un tipo de movimiento en el que un objeto se desplaza a lo largo de una línea recta con una velocidad constante. Esto significa que el objeto recorre distancias iguales en intervalos de tiempo iguales. Por ejemplo, si un tren se mueve a una velocidad constante de 80 km/h, está realizando un movimiento rectilíneo uniforme.
            </div>
            <div class='paso'>
                <strong>e) Movimiento rectilíneo uniformemente acelerado:</strong><br>
                El movimiento rectilíneo uniformemente acelerado es un tipo de movimiento en el que un objeto se desplaza a lo largo de una línea recta con una aceleración constante. Esto significa que la velocidad del objeto cambia de manera uniforme con el tiempo. Por ejemplo, si un coche acelera desde el reposo hasta alcanzar una velocidad de 60 km/h en 5 segundos, está realizando un movimiento rectilíneo uniformemente acelerado.
            </div>
             `
        }, 
        {
            titulo: "Problema 2: Conversión de unidades de velocidad",
            enunciado: "Pasar de unidades las siguientes velocidades usando factores de conversión: <br> a) de 36 km/h a m/s. <br> b) de 10 m/s a km/h. <br> c) de 50 m/min a km/h.",
            solucion: `<div class='paso'>
                <strong>a) Conversión de 36 km/h a m/s:</strong><br>
                Para convertir de kilómetros por hora a metros por segundo, utilizamos el factor de conversión: 1 km/h = 0.27778 m/s.<br>
                \\[36 \\text{ km/h} \\times 0.27778 \\text{ m/s por km/h} = 10 \\text{ m/s}\\]
                <span class='resultado'>Resultado: &nbsp 36 km/h = 10 m/s</span>
            </div>
            <div class='paso'>
                <strong>b) Conversión de 10 m/s a km/h:</strong><br>
                Para convertir de metros por segundo a kilómetros por hora, utilizamos el factor de conversión: 1 m/s = 3.6 km/h.<br>
                \\[10 \\text{ m/s} \\times 3.6 \\text{ km/h por m/s} = 36 \\text{ km/h}\\]
                <span class='resultado'>Resultado: &nbsp 10 m/s = 36 km/h</span>
            </div>
            <div class='paso'>
                <strong>c) Conversión de 50 m/min a km/h:</strong><br>
                Para convertir de metros por minuto a kilómetros por hora, primero convertimos metros por minuto a metros por segundo, y luego a kilómetros por hora.<br>
                \\[50 \\text{ m/min} \\times \\frac{1 \\text{ min}}{60 \\text{ s}} = 0.8333 \\text{ m/s}\\]
                Luego, convertimos metros por segundo a kilómetros por hora:<br>
                \\[0.8333 \\text{ m/s} \\times 3.6 \\text{ km/h por m/s} = 3 \\text{ km/h}\\]
                <span class='resultado'>Resultado: &nbsp 50 m/min = 3 km/h</span>
            </div> 
            `
        },
        {
            titulo: "Problema 3: Análisis de un gráfico de posición-tiempo",
            enunciado: "El gráfico muestra la posición de cuatro automóviles en función del tiempo. Observa y responde: <br> a) ¿Cuál comienza su movimiento en el origen del sistema de referencia? <br> b) ¿Cuál se mueve con una velocidad menor? ¿Y mayor? <br> c) ¿Qué móvil avanza hacia el origen? <br> d) ¿Qué móviles se desplazan con velocidad parecida? <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/ficha1_3.png' style='width: 30rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> ",
            solucion: `<div class='paso'>
                <strong>a) Móvil que comienza en el origen:</strong><br>
                El móvil que comienza su movimiento en el origen del sistema de referencia es el móvil A, ya que su posición inicial es 0 metros en el tiempo 0 segundos.
            </div>
            <div class='paso'>
                <strong>b) Velocidad menor y mayor:</strong><br>
                El móvil con la velocidad menor es el móvil D, ya que su pendiente es negativa, la más baja en el gráfico. El móvil con la velocidad mayor es el móvil C, ya que su pendiente es la más alta.
            </div>
            <div class='paso'>
                <strong>c) Móvil que avanza hacia el origen:</strong><br>
                El móvil D avanza hacia el origen, ya que su posición disminuye con el tiempo, lo que indica que se está moviendo en dirección opuesta al origen.
            </div>
            <div class='paso'>
                <strong>d) Móviles con velocidad parecida:</strong><br>
                Los móviles A y C se desplazan con velocidades parecidas, ya que sus pendientes son similares en el gráfico, lo que indica que recorren distancias similares en intervalos de tiempo similares.
            </div>
               
            `
        },
        {
            titulo: "Problema 4: Análisis de gráficos de posición-tiempo y velocidad-tiempo",
            enunciado: "De las gráficas de la figura, ¿cuáles corresponden a un MRU? ¿Cuáles a un MRUA? ¿Por qué? ¿Hay alguna gráfica que no corresponda a ninguno de los movimientos? ¿Por qué? <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/ficha1_4.png' style='width: 50rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> ",
            solucion: `<div class='paso'>
                <strong>Gráficas de MRU:</strong><br>
                Las gráficas que corresponden a un Movimiento Rectilíneo Uniforme (MRU) son la gráfica 1 (posición-tiempo) y la gráfica 4 (velocidad-tiempo). En la gráfica 1, la posición aumenta de manera lineal con el tiempo, lo que indica una velocidad constante. En la gráfica 4, la velocidad es constante a lo largo del tiempo, lo que también es característico de un MRU.
            </div>
            <div class='paso'>
                <strong>Gráficas de MRUA:</strong><br>
                Las gráficas que corresponden a un Movimiento Rectilíneo Uniformemente Acelerado (MRUA) son la gráfica 2 (posición-tiempo) y la gráfica 3 (velocidad-tiempo). En la gráfica 2, la posición aumenta de manera no lineal con el tiempo, lo que indica una aceleración constante. En la gráfica 3, la velocidad aumenta de manera lineal con el tiempo, lo que también es característico de un MRUA.
            </div>
            <div class='paso'>
                <strong>Gráfica que no corresponde a ningún movimiento:</strong><br>
                La gráfica 5 (posición-tiempo) no corresponde a ningún movimiento físico real, ya que muestra una posición que cambia de manera abrupta y no continua, lo que no es posible en un movimiento real. Esto podría representar un error en la medición o un fenómeno no físico.
            </div>  
            `
        }
    ],
    "ficha2": [
        {
            titulo: "Problema 1: Cálculo de distancia y tiempo con velocidad constante",
            enunciado: "Un coche sale de Madrid a una velocidad de 12 m/s. Si tarda 100 min en llegar a su destino, ¿a qué distancia está éste? Si el pueblo al que se dirige estuviera a 12 km, ¿cuánto tardaría?",
            solucion: ` <div class='paso'>
                <strong>1. Cálculo de la distancia:</strong><br>
                Para calcular la distancia recorrida por el coche, utilizamos la fórmula de la velocidad: \\(v = \\frac{d}{t}\\), donde \\(v\\) es la velocidad, \\(d\\) es la distancia y \\(t\\) es el tiempo. Primero, convertimos el tiempo de minutos a segundos: \\(100 \\text{ min} = 6000 \\text{ s}\\). Luego, despejamos la distancia: \\[d = v \\cdot t = 12 \\text{ m/s} \\cdot 6000 \\text{ s} = 72000 \\text{ m} = 72 \\text{ km}\\].
            </div>
            <div class='paso'>
                <strong>2. Cálculo del tiempo para recorrer 12 km:</strong><br>
                Para calcular el tiempo que tardaría en recorrer 12 km, utilizamos nuevamente la fórmula de la velocidad: \\(v = \\frac{d}{t}\\). Despejamos el tiempo: \\[t = \\frac{d}{v} = \\frac{12000 \\text{ m}}{12 \\text{ m/s}} = 1000 \\text{ s} = 16,67 \\text{ min}\\].
            </div>
            `
        },
        {
            titulo: "Problema 2: Cálculo de distancia del Sol a la Tierra",
            enunciado: "La velocidad de la luz en el vacío es 300 000 km/s. La luz del Sol tarda en llegar a la Tierra 8 minutos 20 segundos. ¿Cuál es la distancia del Sol a la Tierra?",
            solucion: ` <div class='paso'>
                <strong>1. Cálculo de la distancia:</strong><br>
                Para calcular la distancia del Sol a la Tierra, utilizamos la fórmula de la velocidad: \\(v = \\frac{d}{t}\\), donde \\(v\\) es la velocidad, \\(d\\) es la distancia y \\(t\\) es el tiempo. Primero, convertimos el tiempo de minutos y segundos a segundos: \\(8 \\text{ min} 20 \\text{ s} = 500 \\text{ s}\\). Luego, despejamos la distancia: \\[d = v \\cdot t = 300000 \\text{ km/s} \\cdot 500 \\text{ s} = 150000000 \\text{ km}\\].
            </div>

            `
        },
        {
            titulo: "Problema 3: Cálculo de distancia y tiempo con velocidad constante",
            enunciado: "Un automóvil lleva una velocidad constante de 126 km/h en una autopista. ¿Qué distancia recorre en 1 segundo? ¿Qué tiempo emplea en recorrer 100 m?",
            solucion: `<div class='paso'>
                <strong>1. Cálculo de la distancia recorrida en 1 segundo:</strong><br>
                Para calcular la distancia recorrida en 1 segundo, primero convertimos la velocidad de km/h a m/s: \\(126 \\text{ km/h} = 35 \\text{ m/s}\\). Luego, utilizamos la fórmula de la velocidad: \\(v = \\frac{d}{t}\\). Despejamos la distancia para un tiempo de 1 segundo: \\[d = v \\cdot t = 35 \\text{ m/s} \\cdot 1 \\text{ s} = 35 \\text{ m}\\].
            </div>
            <div class='paso'>
                <strong>2. Cálculo del tiempo para recorrer 100 m:</strong><br>
                Para calcular el tiempo que tarda en recorrer 100 m, utilizamos nuevamente la fórmula de la velocidad: \\(v = \\frac{d}{t}\\). Despejamos el tiempo: \\[t = \\frac{d}{v} = \\frac{100 \\text{ m}}{35 \\text{ m/s}} \\approx 2,86 \\text{ s}\\].
            </div>
            `
        },
        {
            titulo: "Problema 4: Análisis de un gráfico de posición-tiempo",
            enunciado: "En el movimiento de un cuerpo se ha obtenido la siguiente gráfica: <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/ficha2_4.png' style='width: 50rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br> a) Explica qué clase de movimiento ha tenido. <br> b) Calcula la distancia total recorrida. <br> c) Dibuja el grá co v-t. <br> d) Calcula la velocidad media en el recorrido total. ",
            solucion: `<div class='paso'>
                <strong>a) Tipo de movimiento:</strong><br>
                El gráfico muestra una posición que aumenta de manera no lineal con el tiempo, lo que indica que el cuerpo está experimentando una aceleración constante. Por lo tanto, el movimiento es un Movimiento Rectilíneo Uniformemente Acelerado (MRUA).
            </div>
            <div class='paso'>
                <strong>b) Cálculo de la distancia total recorrida:</strong><br>
                Para calcular la distancia total recorrida, podemos utilizar la fórmula del MRUA: \\[d = v_0 \\cdot t + \\frac{1}{2} \\cdot a \\cdot t^2\\]. Sin embargo, como no se proporcionan valores específicos para la velocidad inicial (\\(v_0\\)) y la aceleración (\\(a\\)), no podemos calcular la distancia exacta sin más información.
            </div>
            <div class='paso'>
                <strong>c) Dibujo del gráfico v-t:</strong><br>
                Para dibujar el gráfico de velocidad-tiempo (v-t), necesitamos conocer la velocidad inicial y la aceleración. Sin esta información, no podemos dibujar el gráfico con precisión. Sin embargo, en un MRUA, el gráfico v-t sería una línea recta que comienza en la velocidad inicial y aumenta de manera lineal con el tiempo debido a la aceleración constante.
            </div>
            <div class='paso'>
                <strong>d) Cálculo de la velocidad media:</strong><br>
                La velocidad media (\\(v_{media}\\)) se calcula como la distancia total recorrida dividida por el tiempo total: \\[v_{media} = \\frac{d}{t}\\]. Sin conocer la distancia total recorrida, no podemos calcular la velocidad media con precisión. Sin embargo, si tuviéramos la distancia total, podríamos usar el tiempo total para obtener la velocidad media.  
            
            `
        },
        {
            titulo: "Problema 5: Cálculo de velocidad media",
            enunciado: "Determina la velocidad media de un tren que ha recorrido 257 km en 1 h 28 min.",
            solucion: `
                <div class='paso'>
                    <strong>1. Conversión de tiempo a horas:</strong><br>
                    Primero, convertimos el tiempo de horas y minutos a horas decimales: \\(1 \\text{ h} 28 \\text{ min} = 1 + \\frac{28}{60} = 1,467 \\text{ h}\\).
                </div>
                <div class='paso'>
                    <strong>2. Cálculo de la velocidad media:</strong><br>
                    La velocidad media se calcula como la distancia total dividida por el tiempo total: \\[v_{media} = \\frac{d}{t} = \\frac{257 \\text{ km}}{1,467 \\text{ h}} \\approx 175,2 \\text{ km/h}\\].
                    <span class='resultado'>Resultado: &nbsp \\(v_{media} \\approx 175,2 \\text{ km/h}\\)</span>
                </div>  
            `
        },
        {
            titulo: "Problema 6: Comparación de velocidades a partir de gráficos",
            enunciado: "Las gráficas de la figura representan el comportamiento de dos móviles. Razona cuál de ellos se mueve a mayor velocidad. <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/ficha2_6.png' style='width: 50rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> ",
            solucion: `
                <div class='paso'>
                    <strong>Comparación de velocidades:</strong><br>
                    Para comparar las velocidades de los dos móviles, debemos observar la pendiente de las gráficas de posición-tiempo. El móvil con la pendiente más pronunciada se mueve a mayor velocidad. En este caso, el móvil A tiene una pendiente más pronunciada que el móvil B, lo que indica que el móvil A se mueve a mayor velocidad que el móvil B.
                </div> 
            `
        },
        {
            titulo: "Problema 7: Cálculo de distancia recorrida con velocidad constante",
            enunciado: "¿Qué distancia recorre en 40 min un automóvil que se mueve en línea recta con velocidad constante de 70 km/h? Expresa la distancia en metros. ",
            solucion: ` <div class='paso'>
                <strong>Datos:</strong> <br>
                Velocidad (\\(v\\)) = 70 km/h <br>
                Tiempo (\\(t\\)) = 40 min <br>
                <strong>1. Cálculo de la distancia recorrida:</strong><br>
                Para calcular la distancia recorrida por el automóvil, utilizamos la fórmula de la velocidad: \\(v = \\frac{x}{t}\\), donde \\(v\\) es la velocidad, \\(x\\) es la distancia y \\(t\\) es el tiempo. <br> Primero, convertimos el tiempo de minutos a horas: \\(40 \\text{ min} = \\frac{40}{60} \\text{ h} = 0,667 \\text{ h}\\). <br> Luego, despejamos la distancia: \\[x = v \\cdot t = 70 \\text{ km/h} \\cdot 0,667 \\text{ h} = 46,67 \\text{ km}\\]. Finalmente, convertimos la distancia a metros: \\[46,67 \\text{ km} = 46670 \\text{ m}\\].<br> <span class='resultado'>Resultado: &nbsp 46,67 km = 46670 m</span>
            `
        },
        {
            titulo: "Problema 8: Cálculo de posición y distancia recorrida con velocidad constante",
            enunciado: "Un móvil que se desplaza en línea recta a la velocidad constante de 30 m/s está situado a 150 m del origen de las distancias. ¿Qué posición ocupará dentro de 12 s? ¿Qué distancia habrá recorrido en estos 12 s? ",
            solucion: ` <div class='paso'> 
                <strong>Datos:</strong> <br>
                Velocidad (\\(v\\)) = 30 m/s <br>
                Tiempo (\\(t\\)) = 12 s <br>
                Posición inicial (\\(s_0\\)) = 150 m <br>
                <strong>1. Cálculo de la posición después de 12 segundos:</strong><br>
                Para calcular la posición del móvil después de 12 segundos, utilizamos la fórmula de la posición para un movimiento con velocidad constante: \\[s = s_0 + v \\cdot t\\]. Sustituyendo los valores: \\[s = 150 \\text{ m} + 30 \\text{ m/s} \\cdot 12 \\text{ s} = 150 \\text{ m} + 360 \\text{ m} = 510 \\text{ m}\\].<br> <span class='resultado'>Resultado: &nbsp La posición del móvil después de 12 segundos es 510 m.</span>
            </div>
            <div class='paso'>
                <strong>2. Cálculo de la distancia recorrida en 12 segundos:</strong><br>
                La distancia recorrida por el móvil se calcula utilizando la fórmula de la distancia para un movimiento con velocidad constante: \\[d = v \\cdot t\\]. Sustituyendo los valores: \\[d = 30 \\text{ m/s} \\cdot 12 \\text{ s} = 360 \\text{ m}\\].<br> <span class='resultado'>Resultado: &nbsp La distancia recorrida por el móvil en 12 segundos es 360 m.</span>
            </div>
             ` 
        },
        {
            titulo: "Problema 9: Cálculo de distancia recorrida con velocidad constante",
            enunciado: "Un cuerpo se desplaza a una velocidad constante de 25 m/s en línea recta. Representa las gráficas velocidad-tiempo y posición-tiempo, si s<sub>0</sub> = 0.",
            solucion: ` <div class='paso'>
                <strong>Datos:</strong> <br>
                Velocidad (\\(v\\)) = 25 m/s <br>
                Posición inicial (\\(s_0\\)) = 0 m <br>
                <strong>1. Gráfica velocidad-tiempo (v-t):</strong><br>
                La gráfica de velocidad-tiempo para un movimiento con velocidad constante es una línea horizontal. En este caso, la línea estaría a la altura de 25 m/s en el eje de velocidad, y se extendería a lo largo del tiempo. Esto indica que la velocidad del cuerpo es constante a lo largo del tiempo.
            </div>
            <div class='paso'>
                <strong>2. Gráfica posición-tiempo (s-t):</strong><br>
                La gráfica de posición-tiempo para un movimiento con velocidad constante es una línea recta con pendiente positiva. En este caso, la pendiente de la línea sería igual a la velocidad (25 m/s). La línea comenzaría en el origen (0,0) y se extendería hacia arriba a medida que el tiempo avanza, indicando que la posición del cuerpo aumenta de manera lineal con el tiempo. Por ejemplo, después de 1 segundo, la posición sería 25 m; después de 2 segundos, sería 50 m; y así sucesivamente.
            </div>
             ` 
        },
        {
            titulo: "Problema 10: Cálculo de distancia recorrida con velocidad constante",
            enunciado: "La representación gráfica del movimiento de un cuerpo es la que aparece en la gura. Contesta las siguientes cuestiones: <br> a) ¿Qué tipo de movimiento ha tenido en cada tramo? Razona la respuesta. <br>  b) ¿Cuál ha sido la velocidad en cada tramo? <br>  c) ¿Qué espacio ha recorrido al cabo de los 10 segundos? <br>  d) ¿Cuál ha sido el desplazamiento del móvil? <div style='text-align: center; margin-bottom: 20px;'> <img src='img/ficha2_10.png' style='width: 20rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> ",
            solucion: ` <div class='paso'>
                <strong>a) Tipo de movimiento en cada tramo:</strong><br>
                En el primer tramo (0 a 4 segundos), el cuerpo se mueve a una velocidad constante, lo que indica un Movimiento Rectilíneo Uniforme (MRU). En el segundo tramo (4 a 7 segundos), el cuerpo se detiene, lo que también es un MRU pero con velocidad cero. En el tercer tramo (7 a 10 segundos), el cuerpo se mueve nuevamente a una velocidad constante pero en dirección opuesta, lo que también es un MRU.
            </div>
            <div class='paso'>
                <strong>b) Velocidad en cada tramo:</strong><br>
                En el primer tramo, la velocidad es positiva y constante. En el segundo tramo, la velocidad es cero. En el tercer tramo, la velocidad es negativa y constante.
            </div>
            <div class='paso'>
                <strong>c) Espacio recorrido al cabo de los 10 segundos:</strong><br>
                El espacio recorrido es la suma de las distancias absolutas recorridas en cada tramo. En el primer tramo, el cuerpo recorre una distancia positiva. En el segundo tramo, no se recorre ninguna distancia. En el tercer tramo, el cuerpo recorre una distancia negativa (en dirección opuesta). La distancia total recorrida sería la suma de las distancias absolutas de cada tramo.
            </div>
            <div class='paso'>
                <strong>d) Desplazamiento del móvil:</strong><br>
                El desplazamiento es la diferencia entre la posición final y la posición inicial del móvil. En este caso, el desplazamiento sería la posición final después de los 10 segundos menos la posición inicial al inicio del movimiento. Dado que el móvil se mueve en dirección opuesta en el tercer tramo, el desplazamiento podría ser menor que el espacio recorrido total.
            </div> 
        
            ` 
        },
        {
            titulo: "Problema 11: Distancia recorrida por guepardo",
            enunciado: "Un guepardo corre durante 10 s a una velocidad constante de 90 km/h. ¿Qué distancia ha recorrido?",
            solucion: `
            <div class='paso'>
                <strong>Datos:</strong> <br>
                Velocidad (\\(v\\)) = 90 km/h <br>
                Tiempo (\\(t\\)) = 10 s <br>
                <strong>1. Cálculo de la distancia recorrida:</strong><br>
                Primero, convertimos la velocidad de km/h a m/s: \\(90 \\text{ km/h} = 25 \\text{ m/s}\\). Luego, utilizamos la fórmula de la velocidad: \\(v = \\frac{d}{t}\\). Despejamos la distancia: \\[d = v \\cdot t = 25 \\text{ m/s} \\cdot 10 \\text{ s} = 250 \\text{ m}\\].<br> <span class='resultado'>Resultado: &nbsp El guepardo ha recorrido 250 metros.</span>
            </div>

            ` 
        }
    ],
    "ficha3": [
        {
            titulo: "Problema 1: Coche en una carretera recta con aceleración constante",
            enunciado: "Un coche se mueve con velocidad constante a 100 km/h por una carretera recta. Si comienza a acelerar durante 15 segundos su velocidad sube a 120 km/h. ¿Cuál ha sido su aceleración? ¿Y el espacio recorrido?",
            solucion: `<div class='paso'>
                <strong>Datos:</strong> <br>
                Velocidad inicial (\\(v_0\\)) = 100 km/h <br>
                Velocidad final (\\(v_f\\)) = 120 km/h <br>
                Tiempo (\\(t\\)) = 15 s <br>
                <strong>1. Cálculo de la aceleración:</strong><br>
                Primero, convertimos las velocidades a m/s: &nbsp \\(v_0 = 100 \\\ \\frac {km}{h} \\cdot  \\frac{1000}{3600} = 27,8 \\text{ m/s}\\) y \\(v_f = 120 \\\ \\frac {km}{h} \\cdot \\frac{1000}{3600} = 33,3 \\text{ m/s}\\). Luego, utilizamos la fórmula de la aceleración: \\(a = \\frac{v_f - v_0}{t}\\) y sustituimos datos. <br>
                \\[a = \\frac{33,3 - 27,8}{15} = 0,367 \\text{ m/s}^2\\]
                <span class='resultado'>Resultado: &nbsp La aceleración es de 0,367 m/s².</span>
            </div>
            <div class='paso'>
                <strong>2. Cálculo del espacio recorrido:</strong><br>
                Utilizamos la fórmula del espacio recorrido en movimiento uniformemente acelerado: \\(x = v_0 \\cdot t + \\frac{1}{2} \\cdot a \\cdot t^2\\).<br>
                \\[x = 27,8 \\cdot 15 + \\frac{1}{2} \\cdot 0,367 \\cdot (15)^2 = 417 + 41,06 = 458,06 \\text{ m}\\]
                <span class='resultado'>Resultado: &nbsp El espacio recorrido es de 458,06 metros.</span>
            </div>
            ` 
        },
        {
            titulo: "Problema 2: Atleta corriendo con aceleración constante",
            enunciado: "Un atleta está corriendo por la pista a una velocidad de 3 m/s. En el momento final de la carrera hace un sprint con una aceleración de 1 m/s<sup>2</sup>. ¿Cuál será su velocidad al cabo de 5 s? ¿Y cuánto es el espacio recorrido en ese tiempo?",
            solucion: `
                <div class='paso'>
                    <strong>Datos:</strong> <br>
                    Velocidad inicial (\\(v_0\\)) = 3 m/s <br>
                    Aceleración (\\(a\\)) = 1 m/s² <br>
                    Tiempo (\\(t\\)) = 5 s <br>
                    <strong>1. Cálculo de la velocidad al cabo de 5 segundos:</strong><br>
                    Utilizamos la fórmula de la velocidad en movimiento uniformemente acelerado: \\(v = v_0 + a \\cdot t\\).<br>
                    \\[v = 3 + 1 \\cdot 5 = 8 \\text{ m/s}\\]
                    <span class='resultado'>Resultado: &nbsp La velocidad al cabo de 5 segundos es de 8 m/s.</span>
                </div>
                <div class='paso'>
                    <strong>2. Cálculo del espacio recorrido en ese tiempo:</strong><br>
                    Utilizamos la fórmula del espacio recorrido en movimiento uniformemente acelerado: \\(x = v_0 \\cdot t + \\frac{1}{2} \\cdot a \\cdot t^2\\).<br>
                    \\[x = 3 \\cdot 5 + \\frac{1}{2} \\cdot 1 \\cdot (5)^2 = 15 + 12,5 = 27,5 \\text{ m}\\]
                    <span class='resultado'>Resultado: &nbsp El espacio recorrido en ese tiempo es de 27,5 metros.</span>
            `
        },
        {
            titulo: "Problema 3: Coche en Barcelona con aceleración constante",
            enunciado: "Un coche sale de Barcelona con una velocidad de 80 km/h. Se pone a acelerar y a los 10 segundos llega a una velocidad de 100 km/h recorriendo 0,25 km. Vuelve a acelerar y se coloca en una velocidad de 110 km/h en 5 segundos recorriendo 0,5 km. Calcula las posiciones en los diferentes momentos del movimiento y representa las gráficas s-t y v-t.",
            solucion: `
                <div class='paso'>
                    <strong>Datos:</strong> <br>
                    Velocidad inicial (\\(v_0\\)) = 80 km/h <br>
                    Velocidad final 1 (\\(v_{f1}\\)) = 100 km/h <br>
                    Tiempo 1 (\\(t_1\\)) = 10 s <br>
                    Distancia 1 (\\(d_1\\)) = 0,25 km <br>
                    Velocidad final 2 (\\(v_{f2}\\)) = 110 km/h <br>
                    Tiempo 2 (\\(t_2\\)) = 5 s <br>
                    Distancia 2 (\\(d_2\\)) = 0,5 km <br>
                    <strong>1. Cálculo de las posiciones en los diferentes momentos del movimiento:</strong><br>
                    Primero, convertimos las velocidades a m/s: \\(v_0 = 80 \\\ \\frac {km}{h} \\cdot  \\frac{1000}{3600} = 22,22 \\text{ m/s}\\), \\(v_{f1} = 100 \\\ \\frac {km}{h} \\cdot  \\frac{1000}{3600} = 27,78 \\text{ m/s}\\) y \\(v_{f2} = 110 \\\ \\frac {km}{h} \\cdot  \\frac{1000}{3600} = 30,56 \\text{ m/s}\\). Luego, calculamos la aceleración en cada tramo utilizando la fórmula de la aceleración: \\(a = \\frac{v_f - v_0}{t}\\). Para el primer tramo: \\[a_1 = \\frac{27,78 - 22,22}{10} = 0,556 \\text{ m/s}^2\\]. Para el segundo tramo: \\[a_2 = \\frac{30,56 - 27,78}{5} = 0,556 \\text{ m/s}^2\\]. Luego, calculamos las posiciones utilizando la fórmula del espacio recorrido en movimiento uniformemente acelerado: \\(x = v_0 \\cdot t + \\frac{1}{2} \\cdot a \\cdot t^2\\). Para el primer tramo: \\[x_1 = 22,22 \\cdot 10 + \\frac{1}{2} \\cdot 0,556 \\cdot (10)^2 = 222,2 + 27,8 = 250 \\text{ m}\\]. Para el segundo tramo: \\[x_2 = 27,78 \\cdot 5 + \\frac{1}{2} \\cdot 0,556 \\cdot (5)^2 = 138,9 + 6,95 = 145,85 \\text{ m}\\]. La posición total al final del segundo tramo es la suma de las posiciones de ambos tramos: \\[x_{total} = x_1 + x_2 = 250 + 145,85 = 395,85 \\text{ m}\\].
                </div>
                <div class='paso'>
                    <strong>2. Representación de las gráficas s-t y v-t:</strong><br>
                    La gráfica s-t (posición-tiempo) mostraría una curva que aumenta de manera no lineal durante el primer tramo debido a la aceleración, seguida de otra curva que también aumenta pero a un ritmo diferente durante el segundo tramo. La gráfica v-t (velocidad-tiempo) mostraría una línea que aumenta de manera lineal durante el primer tramo y luego otra línea que también aumenta de manera lineal pero con una pendiente diferente durante el segundo tramo.
                </div>
            `
        },
        {
            titulo: "Problema 4: Gráfica de un cuerpo en movimiento",
            enunciado: "En el movimiento de un cuerpo se ha obtenido la siguiente gráfica: <br> a) Explica qué clase de movimiento ha tenido. <br> b) Calcula el espacio total recorrido haciendo uso de la gráfica. <br> c) Calcula las aceleraciones y dibuja la grá ca aceleración-tiempo. <br> d) Dibuja la gráfica s-t. <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/ficha3_4.png' style='width: 30rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> ",
            solucion: ` <div class='paso'>
                <strong>a) Tipo de movimiento:</strong><br>
                El gráfico muestra una posición que aumenta de manera no lineal con el tiempo, lo que indica que el cuerpo está experimentando una aceleración constante. Por lo tanto, el movimiento es un Movimiento Rectilíneo Uniformemente Acelerado (MRUA).
            </div>
            <div class='paso'>
                <strong>b) Cálculo del espacio total recorrido:</strong><br>
                Para calcular el espacio total recorrido, podemos utilizar la fórmula del MRUA: \\[d = v_0 \\cdot t + \\frac{1}{2} \\cdot a \\cdot t^2\\]. Sin embargo, como no se proporcionan valores específicos para la velocidad inicial (\\(v_0\\)) y la aceleración (\\(a\\)), no podemos calcular la distancia exacta sin más información.
            </div>
            <div class='paso'>
                <strong>c) Cálculo de las aceleraciones y gráfica aceleración-tiempo:</strong><br>
                Para calcular las aceleraciones, necesitamos conocer los valores de velocidad en diferentes momentos del tiempo. Sin esta información, no podemos calcular las aceleraciones ni dibujar la gráfica de aceleración-tiempo con precisión. Sin embargo, en un MRUA, la gráfica de aceleración-tiempo sería una línea horizontal que indica una aceleración constante a lo largo del tiempo.
            </div>
            <div class='paso'>
                <strong>d) Gráfica s-t:</strong><br>
                La gráfica de posición-tiempo (s-t) para un movimiento con aceleración constante es una curva que aumenta de manera no lineal. En este caso, la curva comenzaría en el origen (0,0) y se extendería hacia arriba a medida que el tiempo avanza, indicando que la posición del cuerpo aumenta de manera no lineal con el tiempo debido a la aceleración constante.   
            
            `
        },
        {
            titulo: "Problema 5: Motorista frenando",
            enunciado: "Un motorista que viaja a 20 m/s disminuye su velocidad a razón de 3 m/s cada segundo. ¿Cuántos metros recorre hasta que se detiene? ¿Cuál es su aceleración?",
            solucion: ` <div class='paso'>
                <strong>Datos:</strong> <br>
                Velocidad inicial (\\(v_0\\)) = 20 m/s <br>
                Aceleración (\\(a\\)) = -3 m/s² <br>
                <strong>1. Cálculo del tiempo hasta que se detiene:</strong><br>
                Para calcular el tiempo que tarda en detenerse, utilizamos la fórmula de la velocidad en movimiento uniformemente acelerado: \\(v = v_0 + a \\cdot t\\). Despejamos el tiempo para cuando la velocidad final (\\(v\\)) es cero: \\[0 = 20 + (-3) \\cdot t \\Rightarrow t = \\frac{20}{3} \\approx 6,67 \\text{ s}\\].
            </div>
            <div class='paso'>
                <strong>2. Cálculo de la distancia recorrida hasta que se detiene:</strong><br>
                Utilizamos la fórmula del espacio recorrido en movimiento uniformemente acelerado: \\(x = v_0 \\cdot t + \\frac{1}{2} \\cdot a \\cdot t^2\\). Sustituyendo los valores: \\[x = 20 \\cdot 6,67 + \\frac{1}{2} \\cdot (-3) \\cdot (6,67)^2 = 133,4 - 66,7 = 66,7 \\text{ m}\\].<br> <span class='resultado'>Resultado: &nbsp El motorista recorre 66,7 metros hasta que se detiene.</span>
            </div>
        `
        },
        {
            titulo: "Problema 6: Coche aumentando su velocidad",
            enunciado: "Un coche aumenta su velocidad desde 60 km/h a 80 km/h en un tiempo de 6 s. Calcula la aceleración, la velocidad que tendrá a los 9 s de comenzar a acelerar, si se supone que continúa con la misma aceleración, y la distancia que recorrió en los 9 s.",
            solucion: ` <div class='paso'>
                <strong>Datos:</strong> <br>
                Velocidad inicial (\\(v_0\\)) = 60 km/h = 16,67 m/s <br>
                Velocidad final (\\(v\\)) = 80 km/h = 22,22 m/s <br>
                Tiempo (\\(t\\)) = 6 s <br>
                <strong>1. Cálculo de la aceleración:</strong><br>
                Utilizamos la fórmula de la velocidad en movimiento uniformemente acelerado: \\(v = v_0 + a \\cdot t\\). Despejamos la aceleración: \\[a = \\frac{v - v_0}{t} = \\frac{22,22 - 16,67}{6} = 0,92 \\text{ m/s}^2\\].
            </div>
            <div class='paso'>
                <strong>2. Cálculo de la velocidad a los 9 s:</strong><br>
                Utilizamos la misma fórmula: \\(v = v_0 + a \\cdot t\\). Sustituyendo los valores: \\[v = 16,67 + 0,92 \\cdot 9 = 16,67 + 8,28 = 24,95 \\text{ m/s}\\].
            </div>
            <div class='paso'>
                <strong>3. Cálculo de la distancia recorrida en los 9 s:</strong><br>
                Utilizamos la fórmula del espacio recorrido: \\(x = v_0 \\cdot t + \\frac{1}{2} \\cdot a \\cdot t^2\\). Sustituyendo los valores: \\[x = 16,67 \\cdot 9 + \\frac{1}{2} \\cdot 0,92 \\cdot 9^2 = 150,03 + 33,48 = 183,51 \\text{ m}\\].
            </div>

        `
        },
        {
            titulo: "Problema 7: Tren en parada",
            enunciado: "Al acercarse a la estación, un tren va disminuyendo su velocidad desde 80 km/h hasta detenerse. Si la aceleración es de - 1,5 m/s2, ¿cuánto tiempo tardará en pararse? ¿A qué distancia de la estación empezó a frenar?",
            solucion: ` <div class='paso'>
                <strong>Datos:</strong> <br>
                Velocidad inicial (\\(v_0\\)) = 80 km/h = 22,22 m/s <br>
                Aceleración (\\(a\\)) = -1,5 m/s² <br>
                <strong>1. Cálculo del tiempo hasta que se detiene:</strong><br>
                Utilizamos la fórmula de la velocidad en movimiento uniformemente acelerado: \\(v = v_0 + a \\cdot t\\). Despejamos el tiempo para cuando la velocidad final (\\(v\\)) es cero: \\[0 = 22,22 + (-1,5) \\cdot t \\Rightarrow t = \\frac{22,22}{1,5} \\approx 14,81 \\text{ s}\\].
            </div>
            <div class='paso'>
                <strong>2. Cálculo de la distancia desde la estación hasta el punto donde empezó a frenar:</strong><br>
                Utilizamos la fórmula del espacio recorrido en movimiento uniformemente acelerado: \\(x = v_0 \\cdot t + \\frac{1}{2} \\cdot a \\cdot t^2\\). Sustituyendo los valores: \\[x = 22,22 \\cdot 14,81 + \\frac{1}{2} \\cdot (-1,5) \\cdot (14,81)^2 = 329,28 - 164,72 = 164,56 \\text{ m}\\].<br> <span class='resultado'>Resultado: &nbsp El tren tardará aproximadamente 14,81 segundos en detenerse y comenzó a frenar a una distancia de aproximadamente 164,56 metros de la estación.</span>       
        `
        },
        {
            titulo: "Problema 8: Aceleración de un vehículo",
            enunciado: "Un vehículo parte del reposo y alcanza una velocidad de 72 km/h en 20s. Calcula su aceleración.",
            solucion: ` <div class='paso'>
                <strong>Datos:</strong> <br>
                Velocidad inicial (\\(v_0\\)) = 0 m/s <br>
                Velocidad final (\\(v\\)) = 72 km/h = 20 m/s <br>
                Tiempo (\\(t\\)) = 20 s <br>
                <strong>Cálculo de la aceleración:</strong><br>
                Utilizamos la fórmula de la velocidad en movimiento uniformemente acelerado: \\(v = v_0 + a \\cdot t\\). Despejamos la aceleración: \\[a = \\frac{v - v_0}{t} = \\frac{20 - 0}{20} = 1 \\text{ m/s}^2\\].<br> <span class='resultado'>Resultado: &nbsp La aceleración del vehículo es de 1 m/s².</span>
            </div>
        `
        },
        {
            titulo: "Problema 9: Conductor de una motocicleta con aceleración constante",
            enunciado: "El conductor de una motocicleta se encuentra un semáforo en rojo. Previamente ha empezado a reducir su velocidad con a = - 5 m/s<sup>2</sup>. Calcula la distancia que recorrerá la motocicleta hasta pararse si la velocidad inicial es de 54 km/h.",
            solucion: ` <div class='paso'>
                <strong>Datos:</strong> <br>
                Velocidad inicial (\\(v_0\\)) = 54 km/h = 15 m/s <br>
                Aceleración (\\(a\\)) = -5 m/s² <br>
                <strong>Cálculo de la distancia recorrida hasta pararse:</strong><br>
                Utilizamos la fórmula del espacio recorrido en movimiento uniformemente acelerado: \\(x = v_0 \\cdot t + \\frac{1}{2} \\cdot a \\cdot t^2\\). Primero, calculamos el tiempo que tarda en detenerse utilizando la fórmula de la velocidad: \\(v = v_0 + a \\cdot t\\). Despejamos el tiempo para cuando la velocidad final (\\(v\\)) es cero: \\[0 = 15 + (-5) \\cdot t \\Rightarrow t = \\frac{15}{5} = 3 \\text{ s}\\]. Luego, sustituimos el tiempo en la fórmula del espacio recorrido: \\[x = 15 \\cdot 3 + \\frac{1}{2} \\cdot (-5) \\cdot (3)^2 = 45 - 22,5 = 22,5 \\text{ m}\\].<br> <span class='resultado'>Resultado: &nbsp La motocicleta recorrerá una distancia de 22,5 metros hasta pararse.</span>
            </div>
        `
        },
        {
            titulo: "Problema 10: Gráfica de un cuerpo en movimiento",
            enunciado: "A partir de la gráfica calcula: <br> a) La aceleración. <br> b) La velocidad al cabo de 8 s. <br> c) La distancia recorrida a los 8 s. <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/ficha3_10.png' style='width: 30rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> ",
            solucion: ` <div class='paso'>
                <strong>a) Cálculo de la aceleración:</strong><br>
                Para calcular la aceleración, necesitamos conocer los valores de velocidad en diferentes momentos del tiempo. Sin esta información, no podemos calcular la aceleración con precisión. Sin embargo, si tuviéramos los valores de velocidad en diferentes momentos, podríamos utilizar la fórmula de la aceleración: \\(a = \\frac{v_f - v_0}{t}\\) para calcular la aceleración.
            </div>
            <div class='paso'>
                <strong>b) Cálculo de la velocidad al cabo de 8 segundos:</strong><br>
                Para calcular la velocidad al cabo de 8 segundos, necesitaríamos conocer la aceleración y la velocidad inicial. Sin esta información, no podemos calcular la velocidad con precisión. Sin embargo, si tuviéramos estos datos, podríamos utilizar la fórmula de la velocidad en movimiento uniformemente acelerado: \\(v = v_0 + a \\cdot t\\) para calcular la velocidad al cabo de 8 segundos.
            </div>
            <div class='paso'>
                <strong>c) Cálculo de la distancia recorrida a los 8 segundos:</strong><br>
                Para calcular la distancia recorrida a los 8 segundos, necesitaríamos conocer la aceleración, la velocidad inicial y el tiempo. Sin esta información, no podemos calcular la distancia con precisión. Sin embargo, si tuviéramos estos datos, podríamos utilizar la fórmula del espacio recorrido en movimiento uniformemente acelerado: \\(x = v_0 \\cdot t + \\frac{1}{2} \\cdot a \\cdot t^2\\) para calcular la distancia recorrida a los 8 segundos.   
        `
        }    

    ]
};
