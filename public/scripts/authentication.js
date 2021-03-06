//base function for modal form
//TODO: add input & POST request to DB
const renderLoginModal = function() {
  $("#modal-container").html('<h3>Login</h3>');
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
    $.ajax({ type: "POST", url: "/users/login", data: serializedData })
      .then((response) => {
        console.log("her's the response", response);
        $.modal.close();
        loadMenu();
      })
      .fail((error) => {
        console.log("Error with login", error);
      });
  });
  $('#modal-container').modal();
};

//base function for modal form
//TODO: add input & POST request to DB
const renderRegisterModal = function() {
  $("#modal-container").html(`
  <h3>Create Account</h3>`);
  const $form = $(`
    <form>
      <input type="text" name="name" placeholder="Name">
      <input type="email" name="email" placeholder="email">
      <input type="password" name="password" placeholder="password">
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `);
  $form.appendTo('#modal-container');
  $form.submit(function(event) {
    event.preventDefault();
    const serializedData = $(this).serialize();
    $.ajax({ type: "POST", url: "/users/register", data: serializedData })
      .then(() => {
        $.modal.close();
        loadMenu();
      })
      .fail((error) => {
        console.log("Error with registration", error);
      });
  });
  $('#modal-container').modal();
};

//TODO:
const renderProfilePage = function() {
  $.get('/users/me').then((user) => {
    $("#main").html(`<div class="inner">
  <header>
    <h1>Edit Profile</h1>
    <p></p>
  </header>
  <section>
  <div class="col gtr-uniform">
  <form id="update-name" class="col-6 col-12-xsmall">
    <input type="text" name="newNameString" value="${user.name}" placeholder="Update Name" />
    <button type:"button" class="button primary small">Submit</button>
  </form>
  <form id="update-email" class="col-6 col-12-xsmall">
    <input type="email" name="newEmailString" value="${user.email}" placeholder="Update Email" />
    <button class="button primary small">Submit</button>
  </form>
  <form id="update-password" class="col-6 col-12-xsmall">
    <input type="password" name="password" placeholder="Update Password" />
    <button class="button primary small">Submit</button>
  </form>
  </div>
  </section>
  </div>`);

    $("#update-name").submit(function(event) {
      event.preventDefault();
      const serializedData = $(this).serializeFormJSON();
      $.post(`/users/${user.id}/edit-name`, serializedData)
        .then();
    });
    $("#update-email").submit(function(event) {
      event.preventDefault();
      const serializedData = $(this).serializeFormJSON();
      $.post(`/users/${user.id}/edit-email`, serializedData)
        .then();
    });
    $("#update-password").submit(function(event) {
      event.preventDefault();
      const serializedData = $(this).serializeFormJSON();
      $.post(`/users/${user.id}/edit-password`, serializedData)
        .then();
    });
  });
};
