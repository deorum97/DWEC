const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// Navegación
document.getElementById("logo").addEventListener("click", mostrarHome);
document.getElementById("btnHome").addEventListener("click", mostrarHome);
document
  .getElementById("btnConsultar")
  .addEventListener("click", mostrarConsultar);
document.getElementById("btnCrear").addEventListener("click", mostrarCrear);

document.getElementById("formCrear").addEventListener("submit", crearLibro);
// Array global de libros
const libros = [];

// Navegación
function ocultarTodo() {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("consultar").classList.add("hidden");
  document.getElementById("crear").classList.add("hidden");
}

function mostrarHome() {
  ocultarTodo();
  document.getElementById("home").classList.remove("hidden");
}

function mostrarConsultar() {
  ocultarTodo();
  document.getElementById("consultar").classList.remove("hidden");
  pintarLibros();
}

function mostrarCrear() {
  ocultarTodo();
  document.getElementById("crear").classList.remove("hidden");
}

// Crear libro
async function crearLibro(event) {
  event.preventDefault();

  const response = await fetch("http://localhost:3000/libros", {
    method: "POST",
    body: JSON.stringify({
      titulo: document.getElementById("titulo").value,
      autor: document.getElementById("autor").value,
      anio: document.getElementById("anio").value,
    }),
    headers: myHeaders,
  });
  mostrarConsultar();
}

// Pintar libros
async function pintarLibros() {
  const tbody = document.getElementById("tablaLibros");
  tbody.innerHTML = "";

  await fetch("http://localhost:3000/libros")
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("Something went wrong on API server!");
      }
      return response.json();
    })
    .then(async (response) => {
      for (const libro of response) {
        const fila = document.createElement("tr");
        fila.innerHTML = `
                <td>${libro.titulo}</td>
                <td>${libro.autor}</td>
                <td>${libro.anio}</td>
                <td><button id="botonBorrar">Borrar libro</button></td>
            `;
        tbody.appendChild(fila);
        const botonBorrar = document.getElementById("botonBorrar");
        botonBorrar.addEventListener("click", borrarLibro(libro.id));
      }
    });
}
async function borrarLibro(id) {
  const response = await fetch(`http://localhost:3000/libros/${id}`, {
    method: "DELETE",
    headers: myHeaders,
  });
  pintarLibros();
}
