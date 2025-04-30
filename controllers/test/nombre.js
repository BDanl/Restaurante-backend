const postNombre = (req, res) => {
  if (!req.body || !req.body.nombre) {
    res.status(400).json({ error: 'Nombre es requerido' });
    return;
  }
  const { nombre } = req.body;
  res.json({ respuesta: `Hola, ${nombre}! Recibí tu dato.` });
};
  
  module.exports = { postNombre };