module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      nama: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
      },
      alamat: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        unique: true,
        required: true,
      },
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
