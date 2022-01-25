const router = require("express").Router();
const Endereco = require("../models/endereco");
const verifyToken = require("../midlewares/verify-token");
const axios = require("axios");

router.post("/endereco", verifyToken, async (req, res) => {
  try {
    const endereco = new Endereco();
    endereco.user = req.decoded._id;
    endereco.pais = req.body.pais;
    endereco.nomeCompleto = req.body.nomeCompleto;
    endereco.rua = req.body.rua;
    endereco.cidade = req.body.cidade;
    endereco.estado = req.body.estado;
    endereco.cep = req.body.cep;

    await endereco.save();

    res.json({
      success: true,
      message: "Sucesso na criação de novo endereco",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/endereco", verifyToken, async (req, res) => {
  try {
    let enderecos = await Endereco.find({ user: req.decoded._id });
    res.json({
      success: true,
      enderecos: enderecos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/paises", async (req, res) => {
  try {
    let response = await axios.get("https://restcountries.eu/rest/v2/all");

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
