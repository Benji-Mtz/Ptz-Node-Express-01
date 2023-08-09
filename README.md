## Primeros pasos

Iniciamos el proyecto con los sigientes archivos:

```sh
npm init -y
touch .gitignore .editorconfig .eslintrc.json
```
 - Para el relleno del archivo `.gitignore` nos podemos apoyar de la siguiente pagina
   - [gitignore](https://www.toptal.com/developers/gitignore)
-  Para eslint usaremos una configuración similar a la siguiente en su respectivo archivo:

```json
{
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "extends": [
        "eslint:recommended",
        "prettier"
    ],
    "env": {
        "es6": true,
        "node": true,
        "jest": true
    },
    "rules": {
        "no-console": "warn"
    }
}
```
- Para la configuración del archivo `.editorconfig` usaremos lo siguiente:

```
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.js]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false
```

- Crearemos algunas tareas en el archivo `package.json`

```json
 "scripts": {
    "dev": " nodemon index.js",
    "start": " node index.js",
    "lint": "eslint"
  },
```
Para que las configuraciones funcionen instalaremos las siguientes dependencias en modo de desarrollo

`npm i eslint eslint-config-prettier eslint-plugin-prettier prettier -D`
