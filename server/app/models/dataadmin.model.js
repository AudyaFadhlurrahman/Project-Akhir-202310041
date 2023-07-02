module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      nama: String,
      email: String,
      alamat: String,
      password: String,
    },
    {
      timestamps: true,
    }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;

    return object;
  });

  return mongoose.model("dataadmin", schema);
};
