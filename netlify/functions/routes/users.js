// const express = require("express");
import express, { Router } from "express";
const router = express.Router();

const users = [
  { id: 1, jmeno: "Pepa", age: 20 },
  { id: 2, jmeno: "Jarka", age: 30 },
  { id: 3, jmeno: "Bára", age: 25 },
  { id: 4, jmeno: "Markéta", age: 40 },
  { id: 5, jmeno: "Lenka", age: 21 },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/", async (req, res) => {
  const newPost = await req.body;
  // const lastUser = users[users.length-1];
  const prevMaxId = users[users.length - 1].id;
  const readyPost = {
    // id: parseInt(newPost.id),
    id: prevMaxId + 1,
    jmeno: newPost.jmeno,
    age: parseInt(newPost.age),
  };
  users.push(readyPost);
  // users.sort((a, b) => a.id - b.id);
  res.status(201).json(readyPost);
});

router.put("/:id", async (req, res) => {
  const test = users.find((element) => {
    return element.id === parseInt(req.params.id);
  });

  if (!test) {
    return res.sendStatus(404);
  }

  let newPost = await req.body;
  const index = users.findIndex((item) => item.id === parseInt(req.params.id));
  // users[index].id = parseInt(newPost.id);
  users[index].jmeno = newPost.jmeno;
  users[index].age = parseInt(newPost.age);

  //const hotovo = { ...newPost, id: req.params.id };
  newPost = { id: req.params.id, ...newPost };
  res.json(newPost);
});

router.delete("/:id", (req, res) => {
  const index = users.findIndex((item) => item.id === parseInt(req.params.id));

  if (index == -1) {
    return res.sendStatus(404);
  }

  users.splice(index, 1);
  res.json(users);
});

router.get("/index/:id", (req, res) => {
  const result = users[req.params.id];
  if (!result) {
    return res.sendStatus(404);
  }
  res.send(result);
});

router.get("/id/:id", (req, res) => {
  const result = users.filter((user) => user.id === parseInt(req.params.id));

  if (!result[0]) {
    return res.sendStatus(404);
  }
  res.json(result[0]);
});

module.exports = router;
