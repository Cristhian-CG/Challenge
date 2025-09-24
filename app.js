// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// ================================
// Actividad 1: Crear un array para almacenar los nombres
// ================================
let amigos = []; 

// Toma elementos
function $(sel) {
  return document.querySelector(sel);
}

// ================================
// Actividad 2: Implementa una función para agregar amigos
// ================================
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const input = document.getElementById("amigo"); // o document.querySelector("#amigo")
  const nombre = (input.value || "").trim();

  // Validar la entrada
  if (!nombre) {
    alert("Por favor, inserte un nombre.");
    input.focus();
    return;
  }

  // Actualizar el array de amigos
  amigos.push(nombre);

  // Limpiar el campo de entrada
  input.value = "";
  input.focus();

  // Actualizar la lista visual para reflejar el nuevo estado
  actualizarLista();

  // Limpiar cualquier resultado de sorteo previo
  document.getElementById("resultado").innerHTML = "";
}

// ================================
// Actividad 3: Implementa una función para actualizar la lista de amigos
// ================================
function actualizarLista() {
  // Obtener el elemento de la lista
  const lista = document.getElementById("listaAmigos");

  // Limpiar la lista existente
  lista.innerHTML = "";

  // Iterar sobre el arreglo y agregar <li> por cada amigo
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// ================================
// Actividad 4: Implementa una función para sortear los amigos
// ================================
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const nombreSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en el elemento de resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
}

// ================================
// Extra de usabilidad: Enter para añadir desde el input
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("amigo");
  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        agregarAmigo();
      }
    });
  }
});
