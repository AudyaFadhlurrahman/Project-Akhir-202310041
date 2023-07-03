module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      email: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
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

  return mongoose.model("loginadmin", schema);
};
