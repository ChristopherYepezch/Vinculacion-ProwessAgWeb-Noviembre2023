import * as firebase from "firebase/app";
import * as firestore from "firebase/firestore";
import { query, where, getDocs, collection } from "firebase/firestore";
import multer from "multer";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Reemplace la siguiente configuración con la configuración de su proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAqnpF_ppBXsSawkDiVzYzm2oAV1zLvGWQ",
  authDomain: "prowess-web-database.firebaseapp.com",
  projectId: "prowess-web-database",
  storageBucket: "prowess-web-database.appspot.com",
  messagingSenderId: "519296320778",
  appId: "1:519296320778:web:739cc55990bd1a6e4866f3",
};

const fiapp = firebase.initializeApp(firebaseConfig);
const fs = firestore.getFirestore(fiapp);

const saltRounds = 10;

//Registro de usuario
const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    const jsonUser = {};
    try {
      const snapshot = await query(
        firestore.collection(fs, "usuario"),
        where("email", "==", userData.email)
      );
      const querySnapshot = await getDocs(snapshot);
      console.log(querySnapshot);
      if (!querySnapshot.empty) {
        return res
          .status(401)
          .send({ message: "El correo electrónico ya está en uso" });
      }

      userData.password = bcrypt.hashSync(userData.password, saltRounds);

      for (const [key, value] of Object.entries(userData)) {
        if (value) {
          jsonUser[key] = value;
        }
      }
      console.log(jsonUser);
      /*var docRef = await firestore.addDoc(
        firestore.collection(fs, "usuario"),
        jsonUser
      );
      newUser._id = docRef.id;
      return res.status(201).json(newUser);*/
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error al crear el usuario", error: error.message });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al crear el usuario", error: error.message });
  }
};

// Inicio de sesion de usuario
const loginUser = async (req, res) => {
  try {
    const userData = req.body;
    const snapshot = await query(
      firestore.collection(fs, "usuario"),
      where("email", "==", userData.email)
    );
    const querySnapshot = await getDocs(snapshot);
    console.log(querySnapshot);
    if (querySnapshot.empty) {
      return res.status(401).send({ message: "Email o Contraseña Inválidos" });
    }
    const user = querySnapshot.docs[0].data();
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign({ _id: user._id }, "secreto" //! Cambiar secreto
      );
      res.send({
        token,
        _id: user._id,
        email: user.email,
        rol: user.rol,

      });
    } else {
      res.status(401).send({ message: "Email o Contraseña Inválidos" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al crear el usuario", error: error.message });
  }
};

/*
// Crear usuario
const postUser = async (req, res) => {
  try {
    if (
      (!req.body.name,
      !req.body.email,
      !req.body.password,
      !req.body.address,
      !req.body.phone)
    ) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ message: "Todos los campos son requeridos" });
    }

    const snapshot = await db
      .collection("usuario")
      .where("email", "==", req.body.email)
      .get();
    if (!snapshot.empty) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ message: "El correo electrónico ya está en uso" });
    }

    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
      address: req.body.address,
      phone: req.body.phone,
      image: {
        public_id: req.body.public_id || "prowess/seller_tlpqnm",
        secure_url:
          req.body.secure_url ||
          "https://res.cloudinary.com/primalappsje/image/upload/v1671478343/primal/seller_tlpqnm.png",
      },
      isAdmin: false,
      commission: 0,
    };

    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      newUser.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
      await fs.unlink(req.files.image.tempFilePath);
    }

    const docRef = await db.collection("usuario").add(newUser);
    newUser._id = docRef.id;
    delete newUser.password;
    return res.status(HTTP_STATUS.CREATED).json(newUser);
  } catch (error) {
    return res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: "Error al crear el usuario" });
  }
};

// Solicitar reinicio de contraseña
export const requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  try {
    // Envía un correo electrónico de reinicio de contraseña al usuario
    await auth.sendPasswordResetEmail(email);
    return res.status(200).json({
      message:
        "Correo electrónico de reinicio de contraseña enviado exitosamente.",
    });
  } catch (error) {
    return res.status(500).json({
      message:
        "Error al enviar el correo electrónico de reinicio de contraseña.",
      error: error.message,
    });
  }
};

// Metodo GET
export const getUsers = async (req, res) => {
  try {
    const snapshot = await db.collection("users").get();
    const users = [];
    snapshot.forEach((doc) => {
      const user = doc.data();
      user._id = doc.id;
      delete user.password;
      users.push(user);
    });
    return res.status(HTTP_STATUS.OK).json(users);
  } catch (error) {
    return res
      .status(HTTP_STATUS.NOT_FOUND)
      .json({ message: "Error al obtener la lista de usuarios" });
  }
};

// Obtener usuario por ID
export const getUserById = async (req, res) => {
  try {
    const docRef = db.collection("users").doc(req.params.id);
    const doc = await docRef.get();
    if (!doc.exists) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ message: "Usuario no encontrado" });
    }
    const user = doc.data();
    user._id = doc.id;
    delete user.password;
    return res.status(HTTP_STATUS.OK).json(user);
  } catch (error) {
    return res
      .status(HTTP_STATUS.NOT_FOUND)
      .json({ message: "Error al obtener el usuario" });
  }
};

// Metodo PUT para actualizar usuarios
export const updateUser = async (req, res) => {
  try {
    const docRef = db.collection("users").doc(req.params.id);
    const doc = await docRef.get();
    if (!doc.exists) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ message: "Usuario no encontrado" });
    }
    const user = doc.data();
    if (!user.isAdmin) {
      return res
        .status(HTTP_STATUS.UNAUTHORIZED)
        .json({ message: "No tiene permisos para actualizar este usuario" });
    }

    const updateUser = {
      commission: req.body.commission ? req.body.commission : user.commission,
      name: req.body.name ? req.body.name : user.name,
      email: req.body.email ? req.body.email : user.email,
      address: req.body.address ? req.body.address : user.address,
      phone: req.body.phone ? req.body.phone : user.phone,
    };

    if (req.body.password) {
      updateUser.password = bcrypt.hashSync(req.body.password);
    }

    if (req.files?.image) {
      if (user.image?.public_id) {
        await deleteImageUser(user.image.public_id);
      }
      const result = await uploadImageUser(req.files.image.tempFilePath);
      updateUser.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
      await fs.unlink(req.files.image.tempFilePath);
    }

    await docRef.update(updateUser);
    return res.status(HTTP_STATUS.OK).json(updateUser);
  } catch (error) {
    return res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: "Error al actualizar el usuario" });
  }
};

// Metodo DELETE
export const deleteUser = async (req, res) => {
  try {
    const docRef = db.collection("users").doc(req.params.id);
    const doc = await docRef.get();
    if (!doc.exists) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ message: "Usuario no encontrado" });
    }
    const user = doc.data();
    if (!user.isAdmin) {
      return res
        .status(HTTP_STATUS.UNAUTHORIZED)
        .json({ message: "No tiene permisos para eliminar este usuario" });
    }

    if (user.image?.public_id) {
      await deleteImageUser(user.image.public_id);
    }

    await docRef.delete();
    return res.status(HTTP_STATUS.OK).json({ message: "Usuario eliminado" });
  } catch (error) {
    return res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ message: "Error al eliminar el usuario" });
  }
};

const JWT_SECRET = crypto.randomBytes(64).toString("hex");

// Inicio de sesion de usuario
app.post("/login", async (req, res) => {});

// Crear usuario
app.post("/usuarios", async (req, res) => {});

// Metodo GET
app.get("/usuarios", async (req, res) => {});

// Obtener usuario por ID
app.get("/usuarios/:id", async (req, res) => {});

// Metodo PUT para actualizar usuarios
app.put("/usuarios/:id", async (req, res) => {});

// Metodo DELETE
app.delete("/usuarios/:id", async (req, res) => {});

// Iniciar el servidor

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

app.use(express.json());

// Configurar Firebase Admin SDK con tus credenciales
const serviceAccount = require("./ruta/de/tu/credencial.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tu-proyecto.firebaseio.com",
});

// Obtener categoria por el Id
app.get("/categories/:id", async (req, res) => {
  const id = req.params.id;
});

// OBTENER TODAS LAS CATEGORÍAS
app.get("/categories", async (req, res) => {});*/

export { loginUser, registerUser };
