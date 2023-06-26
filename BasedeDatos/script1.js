// Resto del código...

// Función para inscribir un alumno a una clase
function inscribirAlumno(nombre, apellidos, edad, clase) {
    var alumno = new Alumno(nombre, apellidos, edad);
    alumno.inscribirMateria(clase);
    alumnos.push(alumno);
  
    guardarAlumnosEnLocalStorage();
  }
  
  // Función para asignar calificación a un alumno
  function asignarCalificacion(nombre, apellidos, materia, calificacion) {
    var alumnoEncontrado = buscarPorNombre(nombre)[0];
  
    if (alumnoEncontrado && alumnoEncontrado.apellidos.toLowerCase() === apellidos.toLowerCase()) {
      alumnoEncontrado.asignarCalificacion(materia, calificacion);
      guardarAlumnosEnLocalStorage();
    } else {
      console.log('Error: No se encontró al alumno.');
    }
  }
  
  // Función para crear grupos y asignar alumnos
  function crearGrupo(nombreGrupo, alumnosSeleccionados) {
    var grupo = {
      nombre: nombreGrupo,
      alumnos: alumnosSeleccionados
    };
  
    // Puedes almacenar el grupo en una estructura de datos adecuada, como un array o un objeto
    // Por ejemplo:
    grupos.push(grupo);
  }
  
  // Obtener los valores de los campos del formulario y realizar las acciones correspondientes
  document.getElementById("form-alumnos").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var edad = document.getElementById("edad").value;
    var clase = document.getElementById("clase").value;
    var materia = document.getElementById("materia").value;
    var calificacion = document.getElementById("calificacion").value;
  
    inscribirAlumno(nombre, apellidos, edad, clase);
    asignarCalificacion(nombre, apellidos, materia, calificacion);
  
    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("clase").value = "";
    document.getElementById("materia").value = "";
    document.getElementById("calificacion").value = "";
  });
  
  // Resto del código...
  