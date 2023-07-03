const db = require("../models");
const loginAdmin = db.loginadmin;

exports.create = (req, res) => {
  loginAdmin
    .create(req.body)
    .then(() => res.send({ message: "Login Berhasil!" }))
    .catch((error) => res.status(500).send({ message: error.message }));
};

exports.findAll = (req, res) => {
  loginAdmin
    .find()
    .then((data) => res.send(data))
    .catch((error) => res.status(500).send({ message: error.message }));
};

exports.show = (req, res) => {
  const id = req.params.id;

  loginAdmin
    .findById(id)
    .then((data) => res.send(data))
    .catch((error) => res.status(500).send({ message: error.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;

  loginAdmin
    .findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Data tidak ditemukan" });
      } else {
        res.send({ message: "Data berhasil dihapus" });
      }
    })
    .catch((error) => res.status(500).send({ message: error.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;

  loginAdmin
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Tidak Dapat Mengupdate Data" });
      }
      res.send({ message: "Data Berhasil Diupdate!" });
    })
    .catch((error) => res.status(500).send({ message: error.message }));
};
