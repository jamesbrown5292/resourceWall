const escape = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


const userAuthenticate = (userId) => {
  const currentUser = req.session.userId;
  return currentUser === userId;
};

const loadBoards = function() {
  return $.get("/boards")
    .then((boards) => {
      renderBoardTiles(boards);
    });
};

module.exports = {
  escape,
  userAuthenticate,
  loadBoards
};
