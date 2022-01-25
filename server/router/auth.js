const router = require("express").Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const verifyToken = require("../midlewares/verify-token");

router.post("/auth/signup", async (req, res) => {
  if (!req.body.email || !req.body.senha) {
    res.json({
      success: false,
      message: "Informar o usuário ou senha",
    });
  } else {
    try {
      let newUser = new User();
      newUser.nome = req.body.nome;
      newUser.email = req.body.email;
      newUser.senha = req.body.senha;

      await newUser.save();

      let token = jwt.sign(newUser.toJSON(), process.env.SECRET, {
        expiresIn: 604800, //Uma semana
      });

      res.json({
        success: true,
        token: token,
        message: "Criado novo usuário com sucesso",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
});

router.get("/auth/user", verifyToken, async (req, res) => {
  try {
    let foundUser = await User.findOne({ _id: req.decoded._id });

    if (foundUser) {
      res.json({
        success: true,
        user: foundUser,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.post("/auth/login", async (req, res) => {
  try {
    let foundUser = await User.findOne({ email: req.body.email });

    if (!foundUser) {
      res.status(403).json({
        success: false,
        message: "Autorização falhou, usuário não encontrado",
      });
    } else {
      if (foundUser.comparePassword(req.body.senha)) {
        let token = jwt.sign(foundUser.toJSON(), process.env.SECRET, {
          expiresIn: 604800,
        });

        res.json({
          success: true,
          token: token,
        });
      } else {
        res.status(403).json({
          success: false,
          message: "Autenticação falhou, senha incorreta",
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.put("/auth/user", verifyToken, async (req, res) => {
  try {
    let foundUser = await User.findOne({ _id: req.decoded._id });

    if (foundUser) {
      if (req.body.nome) foundUser.nome = req.body.nome;
      if (req.body.email) foundUser.email = req.body.email;
      if (req.body.senha) foundUser.senha = req.body.senha;

      await foundUser.save();

      res.json({
        success: true,
        message: "Atualizado com sucesso",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
