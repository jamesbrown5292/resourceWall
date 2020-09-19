/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();


module.exports = (db) => {
  router.get("/", (req, res) => {
    //this is the "home page" for boards
    //when a user lands here, they see all boards rendered
    //filters are applied by query string
  });

  router.get("/:boardid", (req, res) => {
    //go to a specific board given the board id
    //resources are embedded. Likes, comments, ratings are shown
    //if user does not own this board, edit links are hidden
  });

  router.put("/:boardid/create", (req, res) => {
    //add a new board
  });

  router.delete("/:boardid/delete", (req, res) => {
    //delete a board given an id
  });

  router.put("/:boardid/:resourceid/create", (req, res) => {
    //create a resource within a board
  });

  router.post("/:boardid/:resourceid/edit", (req, res) => {
    //edit a resource within a board
  });

  router.delete("/:boardid/:resourceid/edit", (req, res) => {
    //delete a resource from a board
  });

  return router;
};