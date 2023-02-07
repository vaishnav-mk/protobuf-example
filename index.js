import express from "express";
import protobuf from "protobufjs";
import bookData from "./lib/data.json" assert { type: "json" };

const { oldBook, newBook } = bookData;

const app = express();
const port = process.env.PORT || process.argv[2] || 3000;

const root = await protobuf.load("lib/book.proto");
const Book = root.lookupType("bookpackage.Book");

app.get("/book", function (req, res) {
  res.send(Book.encode(oldBook).finish());
});

app.post("/book", express.text({ type: "*/*" }), function (req, res) {
  const book = Book.decode(Buffer.from(req.body));
  const error = Book.verify(book);
  if (error) throw Error(error);
  Object.assign(oldBook, book);
  res.end();
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`protobuf-example app listening at http://localhost:${port}`);
});

let data = await fetch("http://localhost:3000/book").then((res) =>
  res.arrayBuffer()
);

console.log("Before:", Book.decode(Buffer.from(data)))

const postBody = Book.encode(newBook).finish();

await fetch("http://localhost:3000/book", {
  method: "POST",
  headers: {
    "Content-Type": "application/octet-stream",
  },
  body: postBody,
});

data = await fetch("http://localhost:3000/book").then((res) =>
  res.arrayBuffer()
);
console.log("After:", Book.decode(Buffer.from(data)));
