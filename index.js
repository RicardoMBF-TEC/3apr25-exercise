const express = require("express");
const app = express();
const alumnosRoutes = require("./Routes/alumnoRoute");

app.use("/api", alumnosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

//PARA PROBAR SE USA http://localhost:3000/api/alumnos