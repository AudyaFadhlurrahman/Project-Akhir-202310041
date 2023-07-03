module.exports = (app) => {
  const admin = require("../controllers/register.controller");
  const r = require("express").Router();

  r.get("/register", admin.findAll);
  r.get("/register/:id", admin.show);
  r.post("/register", admin.create);
  r.put("/register/:id", admin.update);
  r.delete("/register/:id", admin.delete);

  app.use("/api", r);
};
