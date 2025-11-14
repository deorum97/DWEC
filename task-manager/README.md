Este gestor de tareas crea tareas, las muestra, puede borrarlas,
modificar si estan completadas o no y las puede listar por prioridad.

Se ha usado un facade para hacer el DOM ya que se va a usar varias veces y va a hacer contenido dinamico.
Un command para hacer las funciones de crearTarea, borrarTarea y completarTarea.
Se ha hecho un actory para saber como funcionaria aunque no está en uso.
Hay una clase strategy para hacer el filtro por prioridad.
Y el TaskManager es un singleton para que solo haya una instancia de él el factory tambien
se puede pasar a singleton pero al no usarlo no lo he considerado necesario.

Para ejecutarlo solo hace falta crear las tareas con el propio formulario que hay y en las campos que donde aparecen las tareas creadas se pueden usar unos botones para borrar o modificar las tareas que se han creado.
En la parte inferior hay un select para que muetre las listas filtradas con lo que se quiera.

```
task-manager-pro/
│
├── index.html
├── style.css
├── README.md
├── js/
├── main.js
├── models/
│ └── task.js
│ └── constants.js
├── patterns/
│ ├── factory.js
│ ├── command.js
│ ├── strategy.js
│ ├── decorator.js (sin uso)
│ └── observer.js (sin uso)
├── ui/
├── domFacade.js
└── taskListView.js
```
