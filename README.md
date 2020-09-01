# Weather-Forecast
Esta aplicación nos permite ver el clima del día de hoy, más el extendido (5 días) de nuestra localización actual y la de 5 otras ciudades.

## Installation
Para clonar y utilizar esta aplicación, necesitamos Git y Node.js (el cual viene con npm) instalado en nuestra computadora. Luego, desde la terminal deberemos seguir los siguientes pasos :
```
# Clonar el repositiorio:
$ git clone git@github.com:solevallejos/weather.git

# Dirigirse al repositorio clonado
$ cd weather

# Instalar dependencias (debajo se encuentran la lista de las utilizadas)
$ npm install

## Scripts disponibles
In the project directory, you can run:

### npm start
Ejecuta la aplicación en modo desarollo.
Para verla, ingresar http://localhost:3000 en el navegador
```

## Test
Realice un test breve de la aplicación con Cypress. Primero, debemos tener el proyecto corriendo en el puerto http://localhost:3000. Luego, para acceder al test se tendremos que escribir en la consola:
```
# npm cypress open
```
Una vez allí, seleccionamos la opcion index.js y se ejecutará el test.

## Importante
En algunas ocasiones, bloqueadores de anuncios/publicidades como AdBlock pueden interrumpir las peticiones a APIs. Se sugiere deshabilitar estos plugins para realizar la prueba de esta aplicación.

## Dependencias
<ul>
    <li><a href="https://github.com/axios/axios">Axios</a></li>
    <li><a href="https://www.cypress.io/">Cypress</a></li>
    <li><a href="https://reactjs.org/">React.JS</a></li>
    <li><a href="https://www.styled-components.com">Styled-components</a></li>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
</ul>

## Iconos utilizados
https://www.flaticon.com/packs/weather-78

## Misceláneo
<ul>
    <li>No utilicé manejadores de estado porque no encontré la necesidad para esta tarea. En caso de que la app crezca, habría que evaluar que herramienta sería la indicada.</li>
    <li>Si la aplicación es usada a nivel internacional, instalaría la librería i18n para que el idioma dentro de la aplicación sea el adecuado para el usuario.</li>
<li>Implementaría Storybook para tener visualizaciones de los componentes.</li>
    <li>Me quedó pendiente resolver un problema que no logré entender. En algunas ocasiones, el nombre de la semana (del día actual) se duplica, pero el contenido es correcto (ejemplo, los dos primeros dias son Lunes, pero las temperaturas son distintas, porque no pertenecen al mismo dia y eso lo pude corroborar mirando el unix time stapm de cada dia devuelto). Otro caso fué que en países donde me debería de figurar un dia mayor al actual (como por ejemplo, Australia que tiene +12hs de diferencia con nosotros) me muestra el dia de hoy (loocal)</li>
</ul>

