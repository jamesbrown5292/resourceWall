// MAIN PAGE FUNCTION
const renderMainPageLayout = function() {
  $('#main').html(`<div class="inner">
  <header>
    <h1>Top Boards</h1>
    <p>TODO: Add search bar & functionality</p>
  </header>
  <section class="tiles">
  </section>
</div>`);
};
// BOARD TILE FUNCTIONS
const createBoardTileElement = function(board) {
  //console.log(board);
  let $boardTile = $(`<article class="style3">
  <span class="image">
  <img src="images/pic01.jpg" alt="" />
  </span>
  <a href="/boards/${escape(board.id)}" data-navigo>
  <h2>${escape(board.title)}</h2>
  <div class="content">
  <p>${escape(board.description)}</p>
  </div>
  </a>
  </article>`);
  return $boardTile;
};
const renderBoardTiles = function(boards) {
  $('.tiles').empty();
  for (let board of boards) {
    const $boardTile = createBoardTileElement(board);
    $('.tiles').append($boardTile);
  }
};

// BOARD FUNCTIONS
const renderBoardPage = function(board) {
  $('#main').html(`<div class="inner">
    <header>
    <h1>${escape(board.title)}</h1>
    <p>${escape(board.description)}</p>
    </header>
    <section id="resources">
    <h2>Resources</h2>  
    </section>
    </div>`);
};

//TODO: change to database query
const loadBoard = function(id) {
  $.get(`/boards/${id}`)
    .then((boards) => {
      // console.log(boards);
      renderBoardPage(boards[0]);
    }).then(() => {
      return $.get(`/boards/${id}/resources`);
    }).then((/*resources*/) => {
      const resources = [{ "title": "GMLAN", "description": "In hac habitasse platea dictumst. E", "link": "https://apache.org/n", "average_rating": "5.00" }, { "title": "Electricity", "description": "In hac habitasse platea dictumst. M", "link": "https://weibo.com/ul", "average_rating": "4.75" }, { "title": "Childcare", "description": "Vestibulum quam sapien, varius ut, ", "link": "http://webmd.com/ant", "average_rating": "4.67" }, { "title": "Nonprofits", "description": "Aenean lectus. Pellentesque eget nu", "link": "https://simplemachin", "average_rating": "4.50" }, { "title": "Wufoo", "description": "Sed ante. Vivamus tortor. Duis matt", "link": "https://google.com.h", "average_rating": "4.50" }, { "title": "LMS Test.Lab", "description": "Cras mi pede, malesuada in, imperdi", "link": "http://nymag.com/in/", "average_rating": "4.50" }];
      renderBoardResources(resources);
    });
};

const loadBoards = function() {
  return $.get("/boards")
    .then((boards) => {
      renderBoardTiles(boards);
    });
};

// RESOURCE FUNCTIONS
// TODO: Change modal with embedded URL/Video & comments/likes/rating

const createNewResource = function(resource) {
  let $createResource = $(`<article>
  <header>
      <h2>${escape(resource.title)}</h2>
      </header>
      <main>
        <p><a href="${escape(resource.link)}" target="_blank" rel="noopener noreferrer">${escape(resource.link)}</a></p>
        <p>${escape(resource.description)}</p>
      </main>
    <footer>
      <span>${(moment(resource.date_posted).fromNow())}</span>
      <span class="tweet-icons"><i class="fas fa-flag"></i>&nbsp;&nbsp;&nbsp;<i class="fas fa-retweet">&nbsp;&nbsp;&nbsp;</i><i class="fas fa-heart"></i></span>
    </footer>
  </article>`);
  return $createResource;
};

// CLICK HANDLER & MODAL FUNCTIONS
const renderBoardResources = function(resources) {
  $('#resources').empty();
  for (const resource of resources) {
    const $resource = createNewResource(resource);
    $resource.appendTo('#resources');
    $resource.click(() => {
      renderResourceModal(resource);
    });
  }
};


const renderResourceModal = function(resource) {
  $("#modal-container").html('<h3>resource placeholder</h3>');
  const $form = $(`
    <form>
      <div>
        <input class="form-control" type="email" name="email" placeholder="Email">
      </div>
      <div>
      <input type="password" name="password" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      `);
  $form.appendTo('#modal-container');
  $form.submit(function(event) {
    event.preventDefault();
    const serializedData = $(this).serialize();
    //submit data to the server
    $.post("/login", serializedData)
      .then(() => {
      });
  });
  $('#modal-container').modal();
};