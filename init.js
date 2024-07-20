const mongoose = require("mongoose");
const Chat = require("./models/chats.js");

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allchats = [
  {
    from: "Gopal",
    to: "Barun",
    msg: "send me your exam sheet",
    created_at: new Date(),
  },
  {
    from: "Anand",
    to: "Swantan",
    msg: "send me your exam sheet",
    created_at: new Date(),
  },
  {
    from: "Vasu",
    to: "Basu",
    msg: "send me your exam sheet",
    created_at: new Date(),
  },
  {
    from: "Hary",
    to: "Poter",
    msg: "send me your exam sheet",
    created_at: new Date(),
  },
];

Chat.insertMany(allchats);
