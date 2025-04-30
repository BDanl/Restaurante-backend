const express = require('express');
const router = express.Router();
const { getMensaje } = require("../controllers/test/mensaje");
const { postNombre } = require("../controllers/test/nombre");
const { actualizarDato } = require("../controllers/test/actualizar");
const { eliminarDato } = require("../controllers/test/eliminar");


router.get("/mensaje", getMensaje);          // GET /test/mensaje
router.post("/enviar", postNombre);          // POST /test/enviar
router.put("/actualizar/:id", actualizarDato);    // PUT /test/actualizar/1
router.delete("/eliminar/:id", eliminarDato);     // DELETE /test/eliminar/1

module.exports = router;