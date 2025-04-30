const getMensaje = (req, res) => {
    res.json({ mensaje: "¡Hola desde el backend!" });
  };
  
  module.exports = { getMensaje };