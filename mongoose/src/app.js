const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/fmayanktechnical", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection was successful"))
  .catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
  name: {
    // Corrected the property name here
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
    minlength: 2,
    maxlength: 30,
  },
  ctype: {
    type: String,
    required: true,
    lowercase: true,
    enum: ["frontend", "backened", "database"],
  },
  video: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});
//  schema define the structure of document ,default value ,validators,etc

// Mongoose  model is a wrapper on the mongoose schema
const Playlist = new mongoose.model("Playlist", playlistSchema);
const createDocument = async () => {
  try {
    const expressPlaylist = new Playlist({
      name: "express Js",
      ctype: "Back End",
      video: 80,
      author: "Mayank",
      active: true,
    });
    const mongoPlaylist = new Playlist({
      name: "mongo Js",
      ctype: "Database",
      video: 80,
      author: "Mayank",
      active: true,
    });
    const mongoosePlaylist = new Playlist({
      name: "mongoose Js",
      ctype: "Database",
      video: 80,
      author: "Mayank",
      active: true,
    });
    const nodePlaylist = new Playlist({
      name: "Node Js",
      ctype: "Front End",
      video: 80,
      author: "Mayank",
      active: true,
    });

    const result = await Playlist.insertMany([
      expressPlaylist,
      mongoPlaylist,
      mongoosePlaylist,
      nodePlaylist,
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocument();
// for validation we are using scheema like we are suing lowercase,unique,trim for remove whitespace
const getDocument = async () => {
  const result = await Playlist.find({
    $and: [{ ctype: "Front End" }, { author: "Mayank" }],
  })
    .select({ name: 1 })
    .sort({ name: -1 });

  // .countDocuments(); //.limit(1);
  console.log(result);
};
// getDocument();
// logical query it just like logical operator
// update
// const updateDocument = async (_id) => {
//   try {
//     const result = await Playlist.findByIdAndUpdate(
//       { _id },
//       {
//         $set: {
//           name: "frontend",
//         },
//       },
//       {
//         new: true,
//         userFindAndModify: false,
//       }
//     );
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// updateDocument("647aebf9468c203405e95336");
const deleteDocument = async (_id) => {
  try {
    const result = await Playlist.findByIdAndDelete({ _id });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// deleteDocument("647af23ee7825b883c19220e");
