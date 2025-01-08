const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const defaultImage = "../../assets/Kedarkantha.jpg";

const EchoSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 50,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    default:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  image: {
    type: String,
    required: false,
    default: defaultImage,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

EchoSchema.pre("save", function (next) {
  if (!this.description || this.description.trim() === "") {
    this.description = this.schema.paths.description.defaultValue;
  }
  next();
});

EchoSchema.methods.getFormattedBirthDate = function () {
  return this.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

module.exports = mongoose.model("Memory", EchoSchema);

//
