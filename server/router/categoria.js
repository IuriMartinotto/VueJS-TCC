const router = require("express").Router();
const Categoria = require("../models/categoria");

router.post("/categorias", async (req, res) => {
  try {
    const categoria = new Categoria();
    categoria.tipo = req.body.tipo;

    await categoria.save();

    res.json({
      success: true,
      message: "Sucesso na criação de nova categoria",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/categorias", async (req, res) => {
  try {
    let categorias = await Categoria.find();
    res.json({
      success: true,
      categorias: categorias,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
