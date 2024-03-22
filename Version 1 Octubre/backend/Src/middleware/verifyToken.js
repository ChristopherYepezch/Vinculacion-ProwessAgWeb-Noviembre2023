import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  const token = req.headers["token"];

  if (token) {
    jwt.verify(token, "secreto" //! Cambiar secreto
    , (error, data) => {
      if (error) return res.status(400).json({ mensaje: "Token invalido" });
      else {
        req.user = data;
        next();
      }
    });
  } else {
    res.status(400).json({ mensaje: "Debes enviar un token" });
  }
};

export { verifyToken };