const verifyToken = require("../midlewares/verify-token");
const avaliacao = require("../models/avaliacao");
const Produto = require("../models/produtos");
const upload = require("../midlewares/upload-photo");

const router = require("express").Router();

router.post(
  "/avaliacao/:produtoID",
  [verifyToken, upload.single("photo")],
  async (req, res) => {
    try {
      const novaAvaliacao = new avaliacao();

      novaAvaliacao.headline = req.body.headline;
      novaAvaliacao.body = req.body.body;
      novaAvaliacao.rating = req.body.rating;
      novaAvaliacao.photo = req.file.location;
      novaAvaliacao.user = req.decoded._id;
      novaAvaliacao.produtoID = req.params.produtoID;

      await Produto.update({ $push: novaAvaliacao._id });

      const savedAvaliacao = await novaAvaliacao.save();

      if (savedAvaliacao) {
        res.json({
          success: true,
          message: "Sucesso na inserção",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);

router.get("/avaliacao/:produtoID", async (req, res) => {
  try {
    const avalicaoProduto = await Avaliacao.find({
      produtoID: req.params.produtoID,
    })
      .populate("user")
      .exec();

    res.json({
      success: true,
      avaliacoes: avalicaoProduto,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
