// TABLE FUNCTIONALITY (CALLS DATATABLES PLUGIN)
$("#dataTable").DataTable();

// ADD DOCUMENT CLICK FUNCTION ////////////////////////////////////////

$(".createForm").on("click", function (event) {
  event.preventDefault();

  console.log("update button clicked");

  $.ajax("/add", {
      type: "GET"
    }).then(
      function() {
        console.log("updated quote");
        location.assign("/add");
      }
    );

});

// ADD DOCUMENT CLICK FUNCTION ////////////////////////////////////////

$(".formSubmit").on("click", function (event) {
event.preventDefault();

var newDocument = {
  source: $("#source").val(),
  title: $("#title").val(),
  date: $("#date").val(),
  category: $("#category").val(),
  description: $("#description").val(),
  // image here

};

console.log("Source is " + $("#source").val());
console.log("Title is " + $("#document_name").val());
console.log("Date is " + $("#date").val());
console.log("Category is " + $("#category").val());
console.log("Description is " + $("#description").val());

console.log(newDocument);

$.post("/api/Document", newDocument)
.then(function (data) {

  if (data) {
    console.log("Data Response is: " + JSON.stringify(data));
    

    // Thanks message here: "$("Thanks For Your Submission").text(data.name);"
            //Clear form

          
    alert("Thanks for adding to our database!");

  } else {
    console.log("No response data came back!");

  }
  $("#source").val("");
  $("#title").val("");
  $("#date").val("");
  $("#category").val("");
  $("#description").val("");


});

});