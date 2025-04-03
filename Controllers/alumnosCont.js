const alumnos = require("../DB/dbalumnos");

const obtenerEstadoAlumno = () => {
  return alumnos.map((alumno) => {
    let mensaje;

    if (alumno.califFinal > 90 && !alumno.adeudo) {
      mensaje = "Te graduaste con honores!";
    } else if (alumno.califFinal > 90 && alumno.adeudo) {
      mensaje = "Tenías honores pero tienes un adeudo.";
    } else if (alumno.califFinal >= 70) {
      mensaje = "Pasaste muy apenas...";
    } else if (alumno.califFinal < 70 && !alumno.adeudo) {
      mensaje =
        "Reprobaste, pero como no tienes adeudos tienes derecho a un examen de recuperación";
    } else if (alumno.califFinal < 70 && alumno.adeudo) {
      mensaje = "EXPULSADO";
    }

    return { matricula: alumno.matricula, mensaje };
  });
};

module.exports = { obtenerEstadoAlumno };