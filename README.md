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

## Parametros en endpoints

Endpoints con params, en genera hay que considerar que siempre se coloquen primero los endpoint que tiene un forma especifica por ejemplo `api.example.com/tasks/filter/` y despues los que tienen una forma dinamica `api.example.com/tasks/{id}/` porque el dinamismo puede absorver todo antes y tener un comportamiento indesperado.

```js
api.example.com/tasks/filter/
api.example.com/tasks/{id}/
api.example.com/people/{id}/
api.example.com/users/{id}/tasks

const { id } = req.params;
```
Endpoints con Query params

```js
api.example.com/products
api.example.com/products?page=1
api.example.com/products?limit=10&offset=0
api.example.com/products?region=USA
api.example.com/products?region=USA&brand=xyz

const { limit, offset } = req.query;
```
## Generando data kafe

Solamente tenemos que instalar la dependencia con `npm i @faker-js/faker`

## Códigos de estado de respuesta HTTP

Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica. Las respuestas se agrupan en cinco clases:

1. Respuestas informativas (100–199),
2. Respuestas satisfactorias (200–299),
3. Redirecciones (300–399),
4. Errores de los clientes (400–499),
5. y errores de los servidores (500–599).

Una referencia podre ser encontrada en `https://http.cat/`
