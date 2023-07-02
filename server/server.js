const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();

const corsOption = {
  origin: "*",
};

// register cors middleware
app.use(cors(corsOption));
app.use(express.json());

// connect to database
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

db.mongoose
  .connect(db.url, mongooseConfig)
  .then(() => console.log("database connected"))
  .catch((error) => {
    console.log(`koneksi ke database gagal ${error.message}`);
    process.exit();
  });

// memanggil route admin
require("./app/routes/admin.route")(app);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server started on port ${port}`));
