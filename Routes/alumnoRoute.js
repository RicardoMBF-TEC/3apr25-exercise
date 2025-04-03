const express = require("express");
const router = express.Router();
const { obtenerEstadoAlumno } = require("../Controllers/alumnosCont");

router.get("/alumnos", (req, res) => {
  const resultado = obtenerEstadoAlumno();
  res.json(resultado);
});

module.exports = router;