const router = require("express").Router();
const Produto = require("../models/produtos");
const upload = require("../midlewares/upload-photo");

router.post("/produtos", upload.single("imagem"), async (req, res) => {
  try {
    let produto = new Produto();
    produto.titulo = req.body.titulo;
    produto.descricao = req.body.descricao;
    produto.imagem = req.file.location;
    produto.quantidadeStock = req.body.quantidadeStock;
    produto.preco = req.body.preco;
    produto.categoriaID = req.body.categoriaID;
    produto.proprietarioID = req.body.proprietarioID;
    produto.avaliacao = req.body.avaliacao;

    await produto.save();
    res.json({
      status: true,
      message: "Salvo com sucesso",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/produtos", async (req, res) => {
  try {
    let produtos = await Produto.find()
      .populate("proprietario categoria")
      .exec();
    res.json({
      success: true,
      produtos: produtos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/produtos/:id", async (req, res) => {
  try {
    let produto = await Produto.findOne({ _id: req.params.id })
      .populate("proprietario categoria")
      .exec();
    res.json({
      success: true,
      produto: produto,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.put("/produtos/:id", upload.single("imagem"), async (req, res) => {
  try {
    let produto = await Produto.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          titulo: req.body.titulo,
          preco: req.body.preco,
          categoria: req.body.categoriaID,
          imagem: req.file.location,
          descricao: req.body.descricao,
          proprietario: req.body.proprietarioID,
          avaliacao: req.body.avaliacao,
          quantidadeStock: req.body.quantidadeStock,
        },
      },
      { upsert: true }
    );

    res.json({
      success: true,
      produtoAtualizado: produto,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.delete("/produtos/:id", async (req, res) => {
  try {
    let produtoDeletado = await Produto.findOneAndDelete({
      _id: req.params.id,
    });

    if (produtoDeletado) {
      res.json({
        status: true,
        message: "Deletado com sucesso",
      });
    }
  } catch (error) {}
});

module.exports = router;
