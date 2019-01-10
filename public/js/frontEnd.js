$(".create-form").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
 
    console.log("update button clicked");
 
    // app.get("/add", function(req, res) {
    //     res.render("add");
    //   });
 
    // $.get("/add", function(data) {
    //     console.log("call add.handlebar");
    //   });

    $.ajax("/add", {
        type: "GET"
      }).then(
        function() {
          console.log("updated quote");
          // Reload the page to get the updated list
          location.assign("/add");
        }
      );

});
