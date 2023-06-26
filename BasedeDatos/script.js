// Almacenar alumnos
var alumnos = [];

// Agregar alumno
function altaAlumno() {
  var nombre = document.getElementById('nombre').value;
  var apellidos = document.getElementById('apellidos').value;
  var edad = document.getElementById('edad').value;

  var alumno = {
    nombre: nombre,
    apellidos: apellidos,
    edad: edad,
    materias: [],
    calificaciones: []
  };

  alumnos.push(alumno);
  guardarEnLocalStorage();
  mostrarAlumnos();
  alert('El alumno ' + nombre + ' ha sido dado de alta.');
}

// Mostrar Alumnos
function mostrarAlumnos() {
  var listaAlumnos = document.getElementById('listaAlumnos');
  listaAlumnos.innerHTML = '';

  for (var i = 0; i < alumnos.length; i++) {
    var alumno = alumnos[i];
    var fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${alumno.nombre}</td>
      <td>${alumno.apellidos}</td>
      <td>${alumno.edad}</td>
      <td>${alumno.materias.join(', ')}</td>
      <td>${alumno.calificaciones.join(', ')}</td>
    `;
    listaAlumnos.appendChild(fila);
  }
}

// Guardar en LocalStorage
function guardarEnLocalStorage() {
  localStorage.setItem('alumnos', JSON.stringify(alumnos));
}

// Cargar desde LocalStorage
function cargarDesdeLocalStorage() {
  var datos = localStorage.getItem('alumnos');
  if (datos) {
    alumnos = JSON.parse(datos);
  }
  
  mostrarAlumnos();
}

// Cargar desde LocalStorage al inicio
cargarDesdeLocalStorage();

