# Boilerplate de JS Vanilla 🚀

Este repositorio es tu punto de partida ideal para proyectos basados en JavaScript puro (Vanilla JS). Está equipado con herramientas modernas para optimizar y mejorar tu experiencia de desarrollo.

## 🌟 Características

- **Vite ⚡**: Un build tool diseñado para ofrecerte un desarrollo veloz y construcciones de producción ultra-eficientes.

## 🚀 Configuración inicial

1. **Crea tu repositorio 🛠️**:

   En vez de clonar este repositorio directamente, haz clic en el botón "Use this template" (Usar esta plantilla) en la página principal del repositorio para crear un nuevo repositorio basado en esta plantilla.

2. **Vite ⚡**:

   Vite ya está listo para usarse, pero puedes ajustar la configuración en `vite.config.js`.

3. **Husky, Commitlint y Lint-staged 🐕**:

   Instala las dependencias:

   ```bash
   npm install
   ```

   Luego, para asegurarte de que Husky está bien configurado:

   ```bash
   npm run prepare
   ```

4. **GitHub Actions 🤖**:

   Las acciones ya están preconfiguradas. Encuentra los detalles en `.github/workflows`.

## 🔧 Herramientas adicionales

### EditorConfig

El plugin EditorConfig para VSCode asegura que todos los desarrolladores del proyecto sigan un estilo de codificación consistente. La configuración se define en el archivo `.editorconfig` en la raíz del proyecto.

1. **Instalación**:
   - Instala el plugin EditorConfig en VSCode.
   - EditorConfig aplicará automáticamente las reglas definidas en el archivo `.editorconfig` al abrir el proyecto en VSCode.

### Prettier

Prettier es una herramienta de formateo de código que garantiza un estilo de código consistente en todo el proyecto. El plugin Prettier para VSCode ayuda a aplicar estas reglas automáticamente.

1. **Instalación**:

   - Instala el plugin Prettier en VSCode.
   - Asegúrate de que Prettier esté configurado como el formateador por defecto en VSCode (`"editor.defaultFormatter": "esbenp.prettier-vscode"` en la configuración de usuario o de espacio de trabajo).

2. **Uso**:
   - Prettier formateará tu código automáticamente al guardar los archivos si tienes habilitada la opción `"editor.formatOnSave": true` en la configuración de VSCode.

### ESLint

ESLint es una herramienta de análisis de código estático que identifica y reporta patrones encontrados en el código, ayudando a mantener un código de calidad y libre de errores.

### Husky

Husky facilita la integración de hooks en git para mejorar el proceso de commits y pushes.

A continuación se explican tres hooks configurados para este proyecto: pre-commit, commit-msg y pre-push.

- **pre-commit**: Este hook se ejecuta antes de que se realice un commit. El script verifica que la rama actual no sea main o master y, si lo es, impide el commit. Luego ejecuta lint-staged para revisar y formatear los archivos que están en staging.

- **commit-msg**: Este hook se ejecuta después de que se ha escrito el mensaje de commit, pero antes de que el commit se guarde. Usa commitlint para asegurar que el mensaje del commit sigue un formato específico.

- **pre-push**: Este hook se ejecuta antes de que se envíen los cambios a una rama remota. Verifica que el nombre de la rama siga un formato específico (hotfix/, bugfix/, o feature/ seguido de un nombre alfanumérico).

### Commitlint

Commitlint garantiza que los mensajes de tus commits sean coherentes y sigan un estándar.

### Lint-staged

Lint-staged lintea y formatea únicamente los archivos que se han modificado y están en staging.

### GitHub Actions

GitHub Actions automatiza tus flujos de trabajo, como pruebas y linting, en cada push o pull request. A continuación se explican dos configuraciones de flujo de trabajo de GitHub Actions: audit.yml y test.yml.

- **audit.yml**: Este archivo define una acción de GitHub que se ejecuta cada vez que se hace un push al repositorio. La acción realiza una auditoría de código, verificando la calidad del mismo usando ESLint.

- **test.yml** Este archivo define una acción de GitHub que se ejecuta cada vez que se hace un push al repositorio. La acción ejecuta las pruebas del proyecto para asegurarse de que todo funciona correctamente. Actualmente, los pasos están comentados porque no se deben ejecutar los tests hasta que no estén definidos.

## 📜 Comandos npm

Aquí están los comandos npm configurados y su explicación:

1. **`npm run dev`**:

- Inicia el servidor de desarrollo utilizando Vite. Esto permite que el servidor se reinicie automáticamente cuando se detectan cambios en los archivos del proyecto.
- Comando: `vite`

2. **`npm run build`**:

   - Compila los archivos JavaScript usando `vite build`.
   - Comando: `vite build`

3. **`npm run preview`**:

   - Previsualiza la aplicación construida utilizando `vite preview`.
   - Comando: `vite preview`

4. **`npm run prepare`**:

   - Instala Husky para configurar los hooks de git.
   - Comando: `husky install`

5. **`npm run lint`**:

   - Analiza el código en el directorio `src` usando ESLint para detectar y reportar problemas de estilo y errores.
   - Comando: `eslint src`

6. **`npm run lint:fix`**:

   - Ejecuta ESLint en el directorio `src` y automáticamente corrige los problemas que pueden ser solucionados.
   - Comando: `eslint src --fix`

7. **`npm run format`**:
   - Formatea el código en el directorio `src` usando Prettier, asegurando un estilo de código consistente.
   - Comando: `prettier --write src`

## 📢 Reglas de Git

Para mantener un flujo de trabajo limpio:

1. **Nunca hagas push directamente a la rama `main`**. Esta rama debería tener restricciones de push ya que cualquier cambio directo puede causar conflictos y complicaciones.

2. **Crea siempre una rama aparte** para tus cambios y características. Asegúrate de que sus nombres sean descriptivos y sigan las convenciones establecidas.

3. **Realiza Pull Requests (PRs) para integrar tus cambios**. Una vez que tu rama esté lista y hayas realizado tus commits, crea una Pull Request en GitHub. Esto desencadenará las GitHub Actions para validar tu código antes de la integración.
