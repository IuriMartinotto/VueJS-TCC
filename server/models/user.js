const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const userSchema = new Schema({
  nome: String,
  email: { type: String, unique: true, required: true },
  senha: { type: String, required: true },
  endereco: { type: Schema.Types.ObjectId, ref: "Endereco" },
});

userSchema.pre("save", function(next) {
  let user = this;
  if (this.isModified("senha") || this.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }

      bcrypt.hash(user.senha, salt, null, function(err, hash) {
        if (err) {
          return next(err);
        }

        user.senha = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

userSchema.methods.comparePassword = function(senha, next) {
  let user = this;

  return bcrypt.compareSync(senha, user.senha);
};

module.exports = mongoose.model("User", userSchema);
