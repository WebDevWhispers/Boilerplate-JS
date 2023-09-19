# Boilerplate de JS Vanilla 🚀

Este repositorio es tu punto de partida ideal para proyectos basados en JavaScript puro (Vanilla JS). Está equipado con herramientas modernas para optimizar y mejorar tu experiencia de desarrollo.

## 🌟 Características

- **Docker 🐳**: Asegura un entorno de desarrollo consistente sin importar dónde estés trabajando.
- **Vite ⚡**: Un build tool diseñado para ofrecerte un desarrollo veloz y construcciones de producción ultra-eficientes.
- **Commitlint ✅**: Garantiza que los mensajes de tus commits sean coherentes y sigan un estándar.
- **ESLint 📜**: Detecta y corrige problemas en tu código JavaScript.
- **Prettier 🎨**: Mantiene tu código limpio y formateado de manera uniforme.
- **Lint-staged 💼**: Lintea únicamente los archivos que se han modificado y están en staging.
- **Husky 🐕**: Facilita la integración de hooks en git para mejorar el proceso de commits y pushes.
- **GitHub Actions 🤖**: Automatiza tus flujos de trabajo, como pruebas y linting, en cada push o pull request.

## 🚀 Configuración inicial

1. **Crea tu repositorio 🛠️**:

   En vez de clonar este repositorio directamente, haz clic en el botón "Use this template" (Usar esta plantilla) en la página principal del repositorio para crear un nuevo repositorio basado en esta plantilla.

2. **Docker 🐳**:

   Es necesario instalar Docker y Docker Compose para establecer y manejar tu entorno de desarrollo. Aunque puedes instalar ambas herramientas por separado, se recomienda optar por Docker Desktop. Esta herramienta unifica Docker y Docker Compose en una única interfaz, facilitando su manejo, ofreciendo una integración más fluida con el sistema operativo y proporcionando herramientas adicionales útiles para la gestión y visualización de tus contenedores.

   Luego, puedes iniciar los servicios con:

   ```bash
   docker-compose up
   ```

   Si prefieres ejecutar los servicios en segundo plano, puedes utilizar la opción `-d`:

   ```bash
   docker-compose up -d
   ```

   Esta opción permite que los servicios se ejecuten en modo "detached", liberando la terminal.

3. **Vite ⚡**:

   Vite ya está listo para usarse, pero puedes ajustar la configuración en `vite.config.js`.

4. **Husky, Commitlint y Lint-staged 🐕**:

   Instala las dependencias:

   ```bash
   npm install
   ```

   Luego, para asegurarte de que Husky está bien configurado:

   ```bash
   npm run prepare
   ```

5. **ESLint y Prettier 📜🎨**:

   Lintea y formatea tu código:

   ```bash
   npm run lint
   ```

6. **GitHub Actions 🤖**:

   Las acciones ya están preconfiguradas. Encuentra los detalles en `.github/workflows`.

## 📢 Reglas de Git

Para mantener un flujo de trabajo limpio:

1. **Nunca hagas push directamente a la rama `main`**. Esta rama debería tener restricciones de push ya que cualquier cambio directo puede causar conflictos y complicaciones.

2. **Crea siempre una rama aparte** para tus cambios y características. Asegúrate de que sus nombres sean descriptivos y sigan las convenciones establecidas.

3. **Realiza Pull Requests (PRs) para integrar tus cambios**. Una vez que tu rama esté lista y hayas realizado tus commits, crea una Pull Request en GitHub. Esto desencadenará las GitHub Actions para validar tu código antes de la integración.
