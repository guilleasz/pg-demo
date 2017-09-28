# pg-demo

App para utilizar en la clase de node-postgres. Clonar el repo y correr el comando `npm install`. Esto instalará las dependencias y creará una db llamada `pg-demo`, con una tabla users, y 5 filas insertadas en ella. 

### Durante la presentación

- Mostrar la Base de Datos a través del CLI o de un GUI Tool como Postico
- Explicar que es postgres-node
- Iniciar un cliente en la aplicación en `db.js`
- Refactorear el código actual para que funcione con el paquete `pg`
- Mostrar como [sanitizar las variables](https://node-postgres.com/features/queries#parameterized-query) en `pg` cuando las interpolamos al query
- Agregar un formulario y ruta para agregar usuarios
- Hacer un unified error handler middleware con express
