const router = require("express").Router();
const Proprietario = require("../models/proprietario");

const upload = require("../midlewares/upload-photo");

router.post("/proprietarios", upload.single("foto"), async (req, res) => {
    try {
      const proprietario = new Proprietario();
      proprietario.nome = req.body.nome;
      proprietario.sobre = req.body.sobre;
      proprietario.foto = req.file.location;
  
      await proprietario.save();
  
      res.json({
        success: true,
        message: "Sucesso na criação de um novo proprietario",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  });


  router.get("/proprietarios", async (req, res) => {
    try {
        let proprietarios = await Proprietario.find();
        res.json({
            proprietarios: proprietarios
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
          });
    }
})

  module.exports = router;
