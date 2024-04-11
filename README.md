# Planify Challenge - Semelman Matias

Este proyecto es una solución al desafío Planify. Se trata de una aplicación que permite seleccionar un servicio y una franja horaria para ese servicio.

## Requisitos

Para ejecutar este proyecto, necesitarás tener instalado Node.js y npm. Puedes descargarlos desde [aquí](https://nodejs.org/).

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:

```sh
npm install
```

## Ejecución

Para ejecutar el proyecto en modo de desarrollo, usa el siguiente comando:

```sh
npm run dev
```

Esto iniciará el servidor de desarrollo y podrás ver la aplicación en http://localhost:5000.

## Construcción

Para construir el proyecto para producción, usa el siguiente comando:

```sh
npm run build
```

Esto creará una versión optimizada de la aplicación en la carpeta dist.

## Pruebas

Actualmente, este proyecto no tiene pruebas automatizadas.

## Detalles relevantes

- Este proyecto utiliza React y TypeScript.
- Los datos de los servicios y las franjas horarias se cargan desde archivos JSON en la carpeta data.
- La aplicación consta de varios componentes, incluyendo un componente de acordeón para seleccionar el servicio y un componente de grupo de botones para navegar entre los pasos.

## Posibilidad de mejora del challenge

Más allá de ser un challenge y de que estoy construyendo esta solución basado en los datos que se nos dan, propondría para hacerlo más real que el json de slots estuviese separado en un array de fechas, con sus respectivos horarios. De esta forma, se podría mockear pero mucho más fiel a lo que sería una respuesta real de la API.
