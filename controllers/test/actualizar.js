// PUT: Actualizar un recurso existente
const actualizarDato = (req, res) => {
    const { id } = req.params; // Ejemplo: ID del recurso a actualizar
    const { nuevoNombre } = req.body;
    res.json({ 
      mensaje: `Dato con ID ${id} actualizado a: ${nuevoNombre}` 
    });
  };
  
  module.exports = { actualizarDato };