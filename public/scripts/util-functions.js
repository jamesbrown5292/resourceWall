const escape = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const loadBoards = function() {
  return $.get("/boards")
    .then((boards) => {
      console.log("util-functions ", boards);
      renderBoardTiles(boards);
      router.updatePageLinks();
    });
};
