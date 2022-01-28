import express from "express";
import mysql from "mysql";

const app = express();
const PORT = 3030;
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "becomingcreation",
});

//Connecting The Database
db.connect((error) => {
  if (error) {
    console.log(error);
  }
  console.log("db connected succesfully");
});

app.set(express.urlencoded);
//Creating Routes
app.get("/", (req, res) => {
  db.query("SELECT * FROM `usersdata` WHERE ID=1 ", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log(result);
  });
});

//Creating endpoint for posting data into mysqli
app.get("/Post", (res, result) => {
  db.query(
    "INSERT INTO `usersdata`(id, firstname, lastname, password) VALUES ('','Coding','Ba','12345') ",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

//Creating endpoint for Deleting user from the database
app.get("/delete", (res, result) => {
  db.query("DELETE FROM `usersdata` WHERE ID=4", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("user deleted");
  });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
