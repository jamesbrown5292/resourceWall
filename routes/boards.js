/*
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const boardHelper = require('../helpers/board-helpers.js');
const express = require('express');
const router  = express.Router();


module.exports =  function(db) {

  router.get("/", (req, res) => {
    //this is the "home page" for boards
    //when a user lands here, they see all boards rendered
    //filters are applied by query string
    console.log(boardHelper.getAllBoards);
  });


  router.get("/:boardid", (req, res) => {
    //go to a specific board given the board id
    //resources are embedded. Likes, comments, ratings are shown
    //if user does not own this board, edit links are hidden
  });

  router.post("/:boardid/create", (req, res) => {
    //add a new board
  });

  router.delete("/:boardid/delete", (req, res) => {
    //delete a board given an id
  });

  //get rid of /create - here for illustrative purposes
  router.put("/:boardid/edit", (req, res) => {
    //edit the board details - name, cats, desc etc.
  });


  return router;
};
