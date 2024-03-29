    mongoose = require("mongoose");

var connectionString = "mongodb+srv://admin:admin123@cluster0.2zepn.mongodb.net/leasing?retryWrites=true&w=majority";

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on("connected", function() {
  console.log("Connected to " + connectionString);
});

mongoose.connection.on("error", function(error) {
  console.log("Connection to " + connectionString + " failed:" + error);
});

mongoose.connection.on("disconnected", function() {
  console.log("Disconnected from " + connectionString);
});

process.on("SIGINT", function() {
  mongoose.connection.close(function() {
    console.log("Disconnected from " + connectionString + " through app termination");
    process.exit(0);
  });
});