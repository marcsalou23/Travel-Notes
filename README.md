# Travel Notes

Travel Notes es una aplicación web que permite a los usuarios compartir sus experiencias de viaje, recomendaciones y conocimientos con otros viajeros de todo el mundo. Es una plataforma diseñada para que los viajeros documenten sus travesías, proporcionen consejos de viaje valiosos y se conecten con una comunidad de exploradores con intereses similares.

![web](https://s5.gifyu.com/images/SRNAe.gif)

## Características

- Crea y publica notas de viaje con texto y etiquetas de categoría.
- Explora una colección diversa de historias de viajes compartidas por otros usuarios.
- Participa en la comunidad dejando comentarios y reacciones en las notas.
- Edita y actualiza tus propias notas de viaje cuando lo desees.

## Propósito

Travel Notes tiene como objetivo capturar la esencia del viaje a través de narrativas personales. Es un espacio donde las personas pueden relatar sus aventuras, compartir joyas ocultas e inspirar a otros a emprender sus propios viajes. Ya sea que seas un viajero en solitario, un explorador en familia o un grupo de amigos en una aventura, Travel Notes proporciona una plataforma para capturar y celebrar tus recuerdos de viaje.

# Instrucciones de Inicio

## Requisitos Previos
- Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina.

## Configuración Inicial
1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd tu-repositorio
   ```

## Configuración del Servidor

### 1. Instala las Dependencias del Servidor
   ```bash
   cd server
   npm install
   ```

### 2. Configura las Variables de Entorno
   Crea un archivo `.env` en el directorio `server` y configura las variables de entorno necesarias. Puedes seguir el ejemplo en el archivo `.env.example`.

### 3. Inicializa la Base de Datos
   Ejecuta el siguiente comando para inicializar la base de datos:
   ```bash
   npm run initDB
   ```

### 4. Inicia el Servidor
   ```bash
   node server.js
   ```

   El servidor estará disponible en [http://localhost:${process.env.PORT}](http://localhost:${process.env.PORT}).

## Configuración del Cliente

### 1. Instala las Dependencias del Cliente
   ```bash
   cd ../client
   npm install
   ```

### 2. Inicia la Aplicación Cliente
   ```bash
   npm start
   ```

   La aplicación cliente estará disponible en [http://localhost:3000](http://localhost:3000).

¡Listo! Ahora deberías tener el servidor y el cliente en ejecución. Puedes acceder a la aplicación en tu navegador y comenzar a utilizarla. Si encuentras algún problema, asegúrate de haber seguido todos los pasos correctamente y revisa la consola en busca de posibles errores.

## Contribución

Se dan la bienvenida y se fomentan las contribuciones a Travel Notes. Si tienes ideas para mejorar la aplicación o deseas informar problemas, no dudes en abrir un problema (issue) o enviar una solicitud de extracción (pull request). Juntos, podemos mejorar la experiencia para todos los usuarios y crear una comunidad próspera de entusiastas del viaje.
