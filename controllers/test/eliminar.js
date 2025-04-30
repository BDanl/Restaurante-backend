// DELETE: Eliminar un recurso
const eliminarDato = (req, res) => {
    const { id } = req.params; // Ejemplo: ID del recurso a eliminar
    res.json({ 
      mensaje: `Dato con ID ${id} eliminado correctamente` 
    });
  };
  
  module.exports = { eliminarDato };