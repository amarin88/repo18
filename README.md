# E-commerce Backend API

Este es el proyecto final del curso de Backend en CoderHouse, comisión 53155, bajo la supervisión del profesor Luis Alejandro Mera y el tutor Nahuel Lautaro Torres Loretto. El proyecto consiste en una API para un sistema de gestión de productos y carritos de compras.

## Tabla de Contenidos

1. [Instalación](#instalación)
2. [Uso](#uso)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Documentación](#documentación)
5. [Contribución](#contribución)
6. [Licencia](#licencia)

## Instalación

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener **Node.js** y **MongoDB** instalados en tu sistema.
3. Instala las dependencias del proyecto ejecutando el siguiente comando en la terminal:

   npm install

4. Crea un archivo `.env` basado en el archivo `env.example`, configurando las variables de entorno necesarias (por ejemplo, URL de MongoDB, puerto, etc.).
5. Para ejecutar la aplicación, utiliza el siguiente comando:

   npm start

## Uso

1. La aplicación ofrece un sistema de gestión de productos y carritos con las siguientes rutas principales:
   - `/api/products`: Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los productos.
   - `/api/carts`: Permite gestionar carritos de compra y agregar productos a los carritos.
   - `/api/user`: Gestión de usuarios.
   - `/api/session`: Manejo de sesiones de autenticación.
   - `/api/emails`: Envío de correos electrónicos.
   - `/api/loggerTest`: Ruta para testear el sistema de logs.
   
2. Para interactuar con la API, puedes usar herramientas como **Postman** o **cURL** para enviar solicitudes HTTP a las rutas anteriores.
3. Asegúrate de tener una instancia de MongoDB ejecutándose en tu máquina o en un servidor remoto. Puedes configurar la conexión en el archivo `config/mongoDb.config.js`.

## Estructura del Proyecto

La estructura del proyecto está organizada de manera modular para facilitar su mantenimiento y escalabilidad:

- **`config/`**: Contiene las configuraciones clave como la conexión a MongoDB, Passport (autenticación), y Swagger (documentación de API).
- **`controllers/`**: Controladores que gestionan la lógica de negocio y las respuestas HTTP.
- **`docs/`**: Documentación de la API, incluidos archivos YAML para Swagger.
- **`dto/`**: Objetos de Transferencia de Datos (Data Transfer Objects).
- **`errors/`**: Middlewares y clases personalizadas para el manejo de errores.
- **`middlewares/`**: Middlewares para procesamiento de solicitudes HTTP.
- **`mocks/`**: Datos ficticios para pruebas.
- **`persistences/`**: Implementaciones de acceso a datos y persistencia.
- **`routes/`**: Rutas de la aplicación (productos, carritos, usuarios, etc.).
- **`services/`**: Servicios que encapsulan la lógica de negocio.
- **`utils/`**: Funciones y utilidades varias (logger, helpers, etc.).
- **`validators/`**: Validadores de datos para las solicitudes HTTP.

## Documentación

Este proyecto utiliza **Swagger** para documentar la API. Puedes acceder a la documentación de la API a través de la siguiente ruta una vez que el servidor esté en funcionamiento:

```
http://localhost:PORT/api-docs
```

Swagger permite probar los endpoints directamente desde el navegador y visualizar las diferentes operaciones disponibles.

## Contribución

Las contribuciones son bienvenidas. Si deseas contribuir, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/contribución`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva característica'`).
4. Sube tus cambios (`git push origin feature/contribución`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia [Sin Licencia]. Todos los derechos reservados © Andrés Marin, 2024.