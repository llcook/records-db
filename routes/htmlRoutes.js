var db = require("../models");

module.exports = function(app) {
  // Load index page with all documents
  
  app.get("/", function(req, res) {
      res.render("index");
  });
  
  // app.get("/", function(req, res) {
  //   db.Document.findAll({}).then(function(dbDocuments) {
  //     res.render("index", {
  //       documents: dbDocuments
  //     });
  //   });
  // });

  // Load example page and pass in an example by id
  app.get("/search", function(req, res) {
    db.Document.findOne({ where: { id: req.params.id } }).then(function(dbDocument) {
      res.render("search", {
        documents: dbDocuments
      });
    });
  });

  // Load add page (form: source, title, desc...)
  app.get("/add", function(req, res) {
    res.render("add");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
