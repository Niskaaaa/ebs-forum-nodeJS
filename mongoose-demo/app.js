const mongoose = require("mongoose");


mongoose.connect("mongodb://admin:admin@81.68.175.29:27816/bbs", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const User = mongoose.model("users", {
  name: String,
  age: Number,
  email: String,
});

const imooc = new User({
  name: "imooc-test",
  age: 30,
  email: "imooc@imooc.com",
});

imooc.save().then(() => {
  console.log("save ok!");
});


