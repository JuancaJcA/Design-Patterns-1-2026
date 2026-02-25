# Manual de TypeScript

Este proyecto contiene la configuración base y la estructura recomendada para comenzar el aprendizaje de TypeScript, garantizando un entorno robusto, ordenado y tipado.

---

## Pre-requisitos

Antes de iniciar, es obligatorio contar con el entorno de ejecución instalado:

* **Node.js**: Motor de ejecución para JavaScript fuera del navegador. Sin él, no es posible utilizar el gestor de paquetes.
* **NPM (Node Package Manager)**: Se instala automáticamente con Node.js y se encarga de gestionar las dependencias y herramientas.

---

## Configuración del Entorno

Para replicar este proyecto desde cero, se han ejecutado los siguientes comandos en la terminal:

1. **Inicialización del manifiesto:**
```bash
npm init -y

```


*Crea el archivo `package.json` que registra las dependencias del proyecto.*
2. **Instalación de TypeScript:**
```bash
npm install typescript --save-dev

```


*Descarga el compilador de TypeScript como una dependencia de desarrollo.*
3. **Creación del cerebro de configuración:**
```bash
npx tsc --init

```


*Genera el archivo `tsconfig.json` para definir las reglas de compilación.*

---

## Estructura del Proyecto

Al instalar TypeScript, la estructura del proyecto se organiza de la siguiente manera:

### 1. Archivos en la Raíz (Root)

Son los archivos de configuración que controlan todo el proyecto:

* **`package.json`**: El manifiesto del proyecto (Equivalente al `pom.xml` de Maven). Contiene los scripts y nombres de dependencias.
* **`package-lock.json`**: El registro exacto de las versiones instaladas para garantizar que el proyecto funcione igual en cualquier computadora.
* **`tsconfig.json`**: El archivo de configuración del compilador TypeScript. Define cómo se transforma el código a JavaScript.

### 2. La Carpeta `node_modules/`

Aquí es donde NPM descarga el código de las herramientas. Su estructura interna es:

* **`.bin/`**: Contiene los "ejecutables". Aquí dentro vive el comando `tsc`. Cuando se escribe `npx tsc`, el sistema busca el ejecutable en esta carpeta.
* **`typescript/`**: Contiene el código fuente del compilador.
** **`bin/`**: Ejecutables internos de la librería TypeScript.
** **`lib/`**: Las bibliotecas de definiciones de tipo (archivos `.d.ts`) que permiten que TypeScript entienda qué funciones existen en JavaScript (como `console.log` o `Math.random`).


* **`.package-lock.json`**: Es un archivo interno de control de NPM dentro de la carpeta de módulos (no debe confundirse con el del nivel superior).


---

## Archivos del Sistema

### package.json

Es el corazón del proyecto en el ecosistema Node. Define metadatos y scripts.

> **Dato referente a Java:** Es el equivalente al archivo `pom.xml` en Maven o `build.gradle` en Gradle.

### tsconfig.json

Controla cómo el compilador convierte el código. Para este proyecto, se recomiendan las siguientes opciones:

* `"rootDir": "./src"`: Indica dónde está nuestro código fuente.
* `"outDir": "./dist"`: Indica dónde colocar el código compilado.
* `"strict": true`: Activa el modo de tipado fuerte (esencial para mantener la seguridad similar a Java).

---

## Comandos de Uso Frecuente

| Tarea                 | Comando                | Descripción                                                  |
| --------------------- | ---------------------- | ------------------------------------------------------------ |
| **Compilar**          | `npx tsc`              | Convierte todos los archivos de `src/` a `dist/`.            |
| **Modo Observador**   | `npx tsc -w`           | Compila automáticamente cada vez que se guarda un cambio.    |
| **Ejecutar**          | `node dist/main.js`    | Ejecuta el programa resultante con el motor de Node.js.      |


---

## Estructura de Directorios Recomendada

Para mantener la separación de responsabilidades entre el código fuente y el código ejecutable, se establece la siguiente jerarquía:

```text
fundamentos/
├── node_modules/     # Dependencias instaladas (gestionado por NPM)
├── src/              # CÓDIGO FUENTE: Aquí se crean los archivos .ts
│   └── main.ts       # Punto de entrada de la aplicación
├── dist/             # DISTRIBUCIÓN: Archivos .js generados tras compilar
├── package.json      # Manifiesto y scripts del proyecto
├── tsconfig.json     # Configuración del compilador TypeScript
└── .prettierrc       # Reglas de formato de código

```

---

### Configuración de `package.json`

Se debe modificar el atributo `main` para que apunte al archivo compilado:

```json
"main": "dist/main.js"

```

---

## Configuración del Compilador (tsconfig.json)

Para que el proceso de compilación sea automático y ordenado, se deben asegurar los siguientes valores en el archivo `tsconfig.json`:

* `"rootDir": "./src"`: Indica que los archivos fuente están en la carpeta `src`.
* `"outDir": "./dist"`: Indica que el JavaScript resultante se guardará en `dist`.
* `"strict": true`: Activa todas las comprobaciones de tipo estrictas.
* `"verbatimModuleSyntax": false` : Para evitar una contradicción técnica donde TypeScript está intentando usar una sintaxis moderna de módulos (ESM) mientras que la configuración dice que se comporte como un módulo antiguo (CommonJS).

---

## Calidad de Código: Prettier

Prettier garantiza que el código mantenga un formato uniforme.

### Instalación

```bash
npm install --save-dev prettier

```

### Configuración (.prettierrc)

Crear un archivo llamado `.prettierrc` en la raíz con el siguiente contenido:

```json
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": false,
  "printWidth": 90,
  "tabWidth": 2,
  "useTabs": false
}

```

### Ejecución del formateador

Para organizar el código automáticamente, ejecutar:

```bash
npx prettier --write "src/**/*.ts"

```

---

## Scripts de Automatización

En el archivo `package.json`, se deben añadir los siguientes scripts para simplificar la ejecución:

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/main.js",
  "dev": "tsc -w",
  "format": "prettier --write \"src/**/*.ts\""
}

```

### Cómo usar los comandos:

* **npm run build:** Ejecuta la compilación única del proyecto. Lee la configuración de tsconfig.json, analiza la carpeta src y genera los archivos en dist.

* **npm run start:** Inicia la ejecución del punto de entrada del programa ya compilado.

* **npm run dev:** Activa el modo observador del compilador. Es ideal para el desarrollo activo, ya que detecta cambios en los archivos .ts y actualiza la carpeta dist al instante.

* **npm run format:** Ejecuta el formateador Prettier en todos los archivos del directorio fuente. Este comando asegura que todo el código cumpla con las reglas de estilo definidas en .prettierrc sin necesidad de escribir la ruta completa en la terminal.

---

### Profundización sobre el Directorio dist

Al trabajar con TypeScript, el entorno de ejecución (Node.js) no procesa los archivos .ts directamente. Para ello, se requiere el proceso de transpilación, el cual genera el directorio dist.

* **Naturaleza del folder dist:** Es el directorio de salida (Distribution). Contiene la versión final del proyecto en JavaScript puro, compatible con los estándares que los motores de ejecución entienden.

Archivos generados:

* **Archivos .js:** Son el resultado de remover los tipos y convertir la sintaxis moderna de TypeScript a JavaScript estándar. Por cada archivo .ts en src, el compilador genera un archivo .js equivalente en dist.

* **Archivos .js.map (Opcional):** Si están habilitados en el tsconfig.json, estos archivos permiten "mapear" el código JavaScript con el código TypeScript original, facilitando la depuración (debugging) de errores.

* **Ciclo de vida:** Este directorio es volátil. No se debe realizar ninguna edición manual dentro de dist, ya que cualquier cambio se perderá la próxima vez que se ejecute el comando de compilación (tsc).

```bash
NOTA: Transpilación es el proceso de convertir código fuente escrito en un lenguaje de programación de alto nivel (como TypeScript o JavaScript moderno ES6+) a otra versión o lenguaje equivalente (usualmente JavaScript más antiguo), permitiendo que el código funcione en navegadores u entornos antiguos.

```

---

## Ejemplo "Hola Mundo" (src/main.ts)

```typescript
interface Saludo {
  mensaje: string;
  autor: string;
}

const bienvenida: Saludo = {
  mensaje: "Iniciando curso de TypeScript",
  autor: "Docente",
};

console.log(bienvenida.mensaje + " por " + bienvenida.autor);

```
