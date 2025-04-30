require("dotenv").config();

const express = require("express");
const cors = require("cors");
const MainRouter = require("./routes/MainRouter"); // Importamos el router

// Middlewares
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json()); 

// Usamos el MainRouter para todas las rutas
app.use("/", MainRouter); // Todas las rutas definidas en MainRouter ahora son accesibles desde la raíz

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});