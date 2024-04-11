# Planify Challenge - Semelman Matias

### [Spanish description, english version below]

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

## Reflexiones propias a mejorar

- Estoy seguro que, de haber tomado el challenge con mas calma, podría haber hecho un uso de GIT con buenas prácticas,
  eso incluye respetar mi sistema de branching, trabajando en una rama "develop", testeando en una rama "testing" y recién confirmado que funciona todo OK mergear a "main/master". Las ramas deberían ser por features y commits atómicos.

## Posibilidad de mejora del challenge

Más allá de ser un challenge y de que estoy construyendo esta solución basado en los datos que se nos dan, propondría para hacerlo más real que el json de slots estuviese separado en un array de fechas, con sus respectivos horarios. De esta forma, se podría mockear pero mucho más fiel a lo que sería una respuesta real de la API.

---

# English version

This project is a solution to the Planify challenge. It is an application that allows selecting a service and a time slot for that service.

## Requirements

To run this project, you will need to have Node.js and npm installed. You can download them from here.

## Installation

To install the project dependencies, run the following command at the root of the project:

```sh
npm install
```

## Execution

To run the project in development mode, use the following command:

```sh
npm run dev
```

This will start the development server and you can view the application at http://localhost:5000.

## Build

To build the project for production, use the following command:

```sh
npm run build
```

This will create an optimized version of the application in the dist folder.

## Tests

Currently, this project does not have automated tests.

## Relevant details

- This project uses React and TypeScript.
- The data for the services and time slots is loaded from JSON files in the data folder.
- The application consists of several components, including an accordion component for selecting the service and a button group component for navigating between steps.

## Personal reflections for improvement

I am sure that if I had taken the challenge more calmly, I could have made use of GIT with good practices. This includes respecting my branching system, working on a "develop" branch, testing on a "testing" branch, and only merging to "main/master" once everything is confirmed to be working OK. The branches should be per feature and commits should be atomic.

## Possibility for improving the challenge

Beyond being a challenge and the fact that I am building this solution based on the data provided to us, I would propose, to make it more realistic, that the slots JSON be separated into an array of dates with their respective times. This way, it could be mocked but much more faithful to what a real API response would be.
