module.exports = (app) => {
  const loginadmin = require("../controllers/auth.controller");
  const r = require("express").Router();

  r.get("/signin", loginadmin.findAll);
  r.get("/signin/:id", loginadmin.show);
  r.post("/signin", loginadmin.create);

  app.use("/api", r);
};
