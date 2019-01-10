var db = require("../models");

module.exports = function(app) {
  // Get all Document
  app.get("/api/Document", function(req, res) {
    db.Document.findAll({}).then(function(dbDocument) {
      console.log(dbDocument,"Records fetched");
      res.json(dbDocument);
    });
  });

  // Create a new document
  app.post("/api/Document", function(req, res) {
    db.Document.create(req.body).then(function(dbDocument) {
      res.json(dbDocument);
    });
  });

  // Delete a document by id
  app.delete("/api/Document/:id", function(req, res) {
    db.Document.destroy({ where: { id: req.params.id } }).then(function(dbDocument) {
      res.json(dbDocument);
    });
  });
};
